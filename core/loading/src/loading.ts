import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { Service, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { BehaviorSubject, Observable, finalize } from 'rxjs';

/** Tracks pending requests and exposes a single `isLoading` signal for progress bars. */
@Service()
export class LoadingService {
  private readonly loading$ = new BehaviorSubject<boolean>(false);
  private readonly pendingRequests = new Set<string>();

  readonly isLoading = toSignal(this.loading$);

  setLoading(loading: boolean, requestId: string): void {
    if (loading) {
      this.pendingRequests.add(requestId);
    } else {
      this.pendingRequests.delete(requestId);
    }
    this.loading$.next(this.pendingRequests.size > 0);
  }
}

let requestCounter = 0;

/** Functional HTTP interceptor toggling `LoadingService` per request. */
export function loadingInterceptor(request: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const loading = inject(LoadingService);
  const requestId = `${request.url}#${++requestCounter}`;
  loading.setLoading(true, requestId);
  return next(request).pipe(finalize(() => loading.setLoading(false, requestId)));
}
