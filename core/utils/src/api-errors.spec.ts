import { HttpErrorResponse } from '@angular/common/http';
import { describe, expect, it } from 'vitest';
import { backendErrorMessage } from './api-errors';

describe('backendErrorMessage', () => {
  it('extracts the message of an HTTP error response', () => {
    const error = new HttpErrorResponse({ status: 400, error: { message: 'Invalid request' } });
    expect(backendErrorMessage(error, 'fallback')).toBe('Invalid request');
  });

  it('falls back for non-HTTP errors and missing messages', () => {
    expect(backendErrorMessage(new Error('boom'), 'fallback')).toBe('fallback');
    expect(backendErrorMessage(new HttpErrorResponse({ status: 500, error: {} }), 'fallback')).toBe('fallback');
    expect(backendErrorMessage('weird', 'fallback')).toBe('fallback');
  });
});
