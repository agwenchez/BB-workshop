import { TestBed } from '@angular/core/testing';

import { PocketsInterceptor } from './pockets.interceptor';

describe('PocketsInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      PocketsInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: PocketsInterceptor = TestBed.inject(PocketsInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
