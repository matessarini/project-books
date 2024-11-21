import { TestBed } from '@angular/core/testing';

import { BooksSellService } from './books-sell-service.service';

describe('BooksSellService', () => {
  let service: BooksSellService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksSellService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
