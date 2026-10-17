import { HttpErrorResponse } from '@angular/common/http';

export function backendErrorMessage(error: unknown, fallback: string): string {
  if (error instanceof HttpErrorResponse && typeof error.error?.message === 'string' && error.error.message.length > 0) {
    return error.error.message;
  }
  return fallback;
}
