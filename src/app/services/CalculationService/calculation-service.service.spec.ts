import { TestBed } from '@angular/core/testing';

import { CalculationServiceService } from './calculation-service.service';

describe('CalculationServiceService', () => {
  let service: CalculationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be Equal', () => {
    let expected = [17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1];
    let actual = service.collatzSequence(17);
    expect(expected).toEqual(actual);
  });
});
