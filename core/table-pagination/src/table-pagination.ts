import { signal, type WritableSignal } from '@angular/core';

export const DEFAULT_PER_PAGE = 25;

export interface LazyTablePagination {
  page: WritableSignal<number>;
  perPage: WritableSignal<number>;
  handleLazyLoad(event: { first?: number; rows?: number | null }): void;
  resetPage(): void;
}

/**
 * Pagination state for lazy PrimeNG tables. Filter changes call resetPage so
 * a new filter never requests an out-of-range page, no matter which offset a
 * restored table state or the paginator reported.
 */
export function createLazyTablePagination(defaultPerPage: number = DEFAULT_PER_PAGE): LazyTablePagination {
  const page = signal(1);
  const perPage = signal(defaultPerPage);
  return {
    page,
    perPage,
    handleLazyLoad(event) {
      const rows = event.rows ?? defaultPerPage;
      page.set(Math.floor((event.first ?? 0) / rows) + 1);
      perPage.set(rows);
    },
    resetPage() {
      page.set(1);
    },
  };
}
