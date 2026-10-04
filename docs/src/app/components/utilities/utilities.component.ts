import { Component } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

import { CodeExampleComponent } from '../../../util/code-example/code-example.component';

@Component({
  selector: 'garuda-docs-utilities',
  imports: [Highlight, CodeExampleComponent],
  templateUrl: './utilities.component.html',
  styleUrl: './utilities.component.scss',
})
export class UtilitiesComponent {
  pipesTs = `import { BytesPipe, CpuTimePipe, DurationPipe, LocaleDatePipe, RelativeTimePipe, StripPrefixPipe } from '@garudalinux/core';

{{ 4096 | garudaBytes }}                   <!-- 4.0 KiB -->
{{ 42 | garudaDuration }}                  <!-- 42s (input in minutes) -->
{{ 4800000000 | garudaCpuTime }}           <!-- 1m 20s (input in nanoseconds) -->
{{ '2026-08-28T10:00:00Z' | garudaLocaleDate:'medium' }}
{{ build.finishedAt | garudaRelativeTime }} <!-- 3 minutes ago -->
{{ 'https://aur.chaotic.cx/' | garudaStripPrefix }} <!-- aur.chaotic.cx -->`;

  paginationTs = `import { createLazyTablePagination } from '@garudalinux/core';

@Component({ /* ... */ })
export class PackagesTableComponent {
  readonly pagination = createLazyTablePagination(25);

  onLoad(event: { first?: number; rows?: number | null }): void {
    this.pagination.handleLazyLoad(event);
  }

  onFilterChanged(): void {
    // A new filter must never request an out-of-range page.
    this.pagination.resetPage();
  }
}`;

  loadingTs = `import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { loadingInterceptor, LoadingService } from '@garudalinux/core/loading';

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(withInterceptors([loadingInterceptor]))],
});

// Anywhere in the app: drives progress bars / skeletons.
readonly isLoading = inject(LoadingService).isLoading;`;

  errorsTs = `import { backendErrorMessage } from '@garudalinux/core';

update(this.api.save().pipe(
  catchError((error: unknown) => {
    this.message = backendErrorMessage(error, 'Could not save the package.');
    return EMPTY;
  }),
));`;
}
