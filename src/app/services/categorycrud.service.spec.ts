import { TestBed } from '@angular/core/testing';

import { CategorycrudService } from './categorycrud.service';

describe('CategorycrudService', () => {
  let service: CategorycrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategorycrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
