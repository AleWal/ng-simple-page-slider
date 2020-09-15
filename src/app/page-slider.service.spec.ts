import { TestBed } from '@angular/core/testing';

import { PageSliderService } from './page-slider.service';

describe('PageSliderService', () => {
  let service: PageSliderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageSliderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
