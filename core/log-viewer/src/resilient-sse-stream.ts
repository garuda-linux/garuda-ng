export const SSE_RECONNECT_DELAY_MS = 1000;
export const SSE_MAX_RECONNECT_ATTEMPTS = 5;

export interface ResilientSseOptions {
  /**
   * Builds the connection URL per attempt, letting consumers resume from
   * their own progress (e.g. a byte offset) on every reconnect.
   */
  url: () => string;
  onMessage: (data: string) => void;
  /**
   * Additional named SSE event types to subscribe to besides the default
   * message event; their frames are forwarded to `onNamedEvent`.
   */
  namedEvents?: readonly string[];
  onNamedEvent?: (eventType: string, data: string) => void;
  onOpen?: () => void;
  /** Fired when reconnect attempts are exhausted while the tab is visible. */
  onErrorExhausted?: () => void;
  maxAttempts?: number;
  delayMs?: number;
}

/**
 * EventSource wrapper for log-stream consumers. Handles bounded backoff
 * reconnects and re-opens dropped streams when a backgrounded tab becomes
 * visible again (browsers throttle and kill background SSE). Consumers call
 * `close()` once they receive a terminal frame.
 */
export class ResilientSseStream {
  private readonly options: Required<Pick<ResilientSseOptions, 'maxAttempts' | 'delayMs' | 'namedEvents' | 'onMessage'>> &
    ResilientSseOptions;
  private source: EventSource | undefined;
  private reconnectTimer: number | undefined;
  private attempts = 0;
  private closed = false;

  constructor(options: ResilientSseOptions) {
    this.options = {
      maxAttempts: SSE_MAX_RECONNECT_ATTEMPTS,
      delayMs: SSE_RECONNECT_DELAY_MS,
      namedEvents: [],
      ...options,
    };
    document.addEventListener('visibilitychange', this.onVisibilityChange);
  }

  open(): void {
    if (this.closed) return;
    this.disconnect();
    const source = new EventSource(this.options.url());
    this.source = source;

    source.onopen = () => {
      this.attempts = 0;
      this.options.onOpen?.();
    };

    source.onmessage = (event) => {
      // A delivered frame proves the connection is healthy again.
      if (event.data !== '') this.attempts = 0;
      this.options.onMessage(event.data);
    };

    for (const eventType of this.options.namedEvents ?? []) {
      source.addEventListener(eventType, (event: MessageEvent) => {
        if (event.data !== '') this.attempts = 0;
        this.options.onNamedEvent?.(eventType, event.data);
      });
    }

    source.onerror = () => {
      // Backgrounded tabs get their connections dropped by the browser; park
      // the stream so the visibility handler re-opens it once focused again.
      if (document.visibilityState !== 'visible') {
        this.park();
        return;
      }
      if (this.attempts >= this.options.maxAttempts) {
        this.close();
        this.options.onErrorExhausted?.();
        return;
      }
      this.attempts += 1;
      this.park();
      this.scheduleReconnect();
    };
  }

  /** Stops the stream permanently; neither reconnects nor reacts to visibility changes. */
  close(): void {
    if (this.reconnectTimer !== undefined) window.clearTimeout(this.reconnectTimer);
    this.reconnectTimer = undefined;
    this.closed = true;
    this.disconnect();
    document.removeEventListener('visibilitychange', this.onVisibilityChange);
  }

  /** Drops the connection without giving up: reconnect/visibility may resume later. */
  private park(): void {
    if (this.reconnectTimer !== undefined) window.clearTimeout(this.reconnectTimer);
    this.reconnectTimer = undefined;
    this.disconnect();
  }

  private disconnect(): void {
    this.source?.close();
    this.source = undefined;
  }

  private scheduleReconnect(): void {
    if (this.reconnectTimer !== undefined) return;
    this.reconnectTimer = window.setTimeout(() => {
      this.reconnectTimer = undefined;
      this.open();
    }, this.options.delayMs);
  }

  private readonly onVisibilityChange = (): void => {
    if (document.visibilityState === 'visible' && !this.closed && !this.source) {
      this.attempts = 0;
      this.open();
    }
  };
}
