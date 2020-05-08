import { TestBed } from '@angular/core/testing';

import { MovieinfoService } from './movieinfo.service';

describe('MovieinfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieinfoService = TestBed.get(MovieinfoService);
    expect(service).toBeTruthy();
  });
});
