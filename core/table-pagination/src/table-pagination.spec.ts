import { describe, expect, it } from 'vitest';
import { createLazyTablePagination } from './table-pagination';

describe('createLazyTablePagination', () => {
  it('starts on the first page with the default page size', () => {
    const pagination = createLazyTablePagination();
    expect(pagination.page()).toBe(1);
    expect(pagination.perPage()).toBe(25);
  });

  it('derives the page from the lazy load offset', () => {
    const pagination = createLazyTablePagination();
    pagination.handleLazyLoad({ first: 50, rows: 25 });
    expect(pagination.page()).toBe(3);
    expect(pagination.perPage()).toBe(25);
  });

  it('keeps a changed page size from the lazy load event', () => {
    const pagination = createLazyTablePagination();
    pagination.handleLazyLoad({ first: 100, rows: 50 });
    expect(pagination.page()).toBe(3);
    expect(pagination.perPage()).toBe(50);
  });

  it('falls back to defaults when the event lacks values', () => {
    const pagination = createLazyTablePagination();
    pagination.handleLazyLoad({ first: 75, rows: 25 });
    pagination.handleLazyLoad({});
    expect(pagination.page()).toBe(1);
    expect(pagination.perPage()).toBe(25);
  });

  it('resets back to the first page without touching the page size', () => {
    const pagination = createLazyTablePagination();
    pagination.handleLazyLoad({ first: 200, rows: 100 });
    pagination.resetPage();
    expect(pagination.page()).toBe(1);
    expect(pagination.perPage()).toBe(100);
  });

  it('honors a custom default page size', () => {
    const pagination = createLazyTablePagination(50);
    expect(pagination.perPage()).toBe(50);
    pagination.handleLazyLoad({});
    expect(pagination.page()).toBe(1);
    expect(pagination.perPage()).toBe(50);
  });
});
