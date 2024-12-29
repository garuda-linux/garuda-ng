import { TestBed } from '@angular/core/testing';

import { MessageToastService } from './message-toast.service';
import { provideGarudaNG } from '../config';

describe('MessageToastService', () => {
  let service: MessageToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideGarudaNG()],
    });
    service = TestBed.inject(MessageToastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
