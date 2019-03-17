import { TestBed } from '@angular/core/testing';

import { NumberService } from './number.service';

describe('NumberService', () => {
  let numberService: NumberService;
  beforeEach(() => {
    numberService = new NumberService();
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    const service: NumberService = TestBed.get(NumberService);
    expect(service).toBeTruthy();
  });

  it('should generate  ten numbers', () => {
    numberService.generateRandomNumbers(10)
      .subscribe((result) => {
        expect(result.length).toEqual(10, 'ten numbers generated');
      });
  });

  it('should generate ten digit numbers', () => {
    numberService.generateRandomNumbers(1)
      .subscribe((result) => {
        expect(result[0].length).toEqual(10, 'ten digit number generated');
      });
  });

  it('should generate unique numbers', () => {
    numberService.generateRandomNumbers(100)
      .subscribe((result) => {
        const resultSet = new Set(result);
        expect(result.length).toEqual(resultSet.size, 'numbers generated are unique');
      });
  });

  it('should return sort order list', () => {
    const expectedSortOrder = [
      {name: 'Ascending', value: 'ascending'},
      {name: 'Descending', value: 'descending'}
    ];
    const sortOrder = numberService.sortOrder;

    expect(sortOrder.length).toEqual(expectedSortOrder.length, 'sort order equal');
    expect(sortOrder[0].name).toEqual(expectedSortOrder[0].name, 'same values returned');
  });
});
