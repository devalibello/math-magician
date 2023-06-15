import calculate from '../logic/calculate';

describe('calculate', () => {
  // Test cases for AC button
  it('should reset the calculator data object for AC button', () => {
    const obj = {
      total: '10',
      next: '5',
      operation: '+',
    };
    const buttonName = 'AC';
    const expected = {
      total: null,
      next: null,
      operation: null,
    };
    const result = calculate(obj, buttonName);
    expect(result).toEqual(expected);
  });

  // Test case for numeric buttons
  it('should update the calculator data object for numeric buttons', () => {
    const obj = {
      total: '10',
      next: '5',
      operation: '+',
    };
    const buttonName = '9';
    const expected = {
      total: '10',
      next: '59',
      operation: '+',
    };
    const result = calculate(obj, buttonName);
    expect(result).toEqual(expected);
  });

  // Test case for the '=' button
  it('should perform the operation and return the result for the "=" button', () => {
    const obj = {
      total: '10',
      next: '5',
      operation: '+',
    };
    const buttonName = '=';
    const expected = {
      total: '15',
      next: null,
      operation: null,
    };
    const result = calculate(obj, buttonName);
    expect(result).toEqual(expected);
  });

  // Additional test cases for other scenarios

  // ...
});
