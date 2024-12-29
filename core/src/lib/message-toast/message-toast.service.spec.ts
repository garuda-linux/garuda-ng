import { TestBed } from '@angular/core/testing';

import { MessageToastService } from './message-toast.service';

describe('MessageToastService', () => {
  let service: MessageToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageToastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
