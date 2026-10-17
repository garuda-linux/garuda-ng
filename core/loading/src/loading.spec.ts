import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';
import { describe, expect, it } from 'vitest';
import { loadingInterceptor, LoadingService } from './loading';

describe('LoadingService', () => {
  let service: LoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingService);
  });

  it('is only loading while at least one request is pending', () => {
    expect(service.isLoading()).toBe(false);

    service.setLoading(true, 'a');
    service.setLoading(true, 'b');
    expect(service.isLoading()).toBe(true);

    service.setLoading(false, 'a');
    expect(service.isLoading()).toBe(true);

    service.setLoading(false, 'b');
    expect(service.isLoading()).toBe(false);
  });
});

describe('loadingInterceptor', () => {
  let http: HttpClient;
  let controller: HttpTestingController;
  let loading: LoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(withInterceptors([loadingInterceptor])), provideHttpClientTesting()],
    });
    http = TestBed.inject(HttpClient);
    controller = TestBed.inject(HttpTestingController);
    loading = TestBed.inject(LoadingService);
  });

  it('toggles the loading state around the request', async () => {
    const pending = firstValueFrom(http.get('/api/data').pipe());
    expect(loading.isLoading()).toBe(true);

    controller.expectOne('/api/data').flush({});
    await pending;
    expect(loading.isLoading()).toBe(false);
  });
});
