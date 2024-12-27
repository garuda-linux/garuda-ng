import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

export const requestExampleSource = (path: string) =>
  inject(HttpClient)
    .get(path, {
      responseType: 'text',
    })
    .pipe(map((s) => s.trim()));
