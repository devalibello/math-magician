import operate from '../logic/operate';

describe('operate', () => {
  it('should perform addition correctly', () => {
    const numberOne = '5';
    const numberTwo = '3';
    const operation = '+';
    const expected = '8';
    const result = operate(numberOne, numberTwo, operation);
    expect(result).toBe(expected);
  });

  it('should perform subtraction correctly', () => {
    const numberOne = '10';
    const numberTwo = '3';
    const operation = '-';
    const expected = '7';
    const result = operate(numberOne, numberTwo, operation);
    expect(result).toBe(expected);
  });

  it('should perform multiplication correctly', () => {
    const numberOne = '5';
    const numberTwo = '4';
    const operation = 'x';
    const expected = '20';
    const result = operate(numberOne, numberTwo, operation);
    expect(result).toBe(expected);
  });

  it('should perform division correctly', () => {
    const numberOne = '15';
    const numberTwo = '3';
    const operation = '÷';
    const expected = '5';
    const result = operate(numberOne, numberTwo, operation);
    expect(result).toBe(expected);
  });

  it('should handle division by zero', () => {
    const numberOne = '10';
    const numberTwo = '0';
    const operation = '÷';
    const expected = "Can't divide by 0.";
    const result = operate(numberOne, numberTwo, operation);
    expect(result).toBe(expected);
  });

  it('should perform modulo correctly', () => {
    const numberOne = '10';
    const numberTwo = '3';
    const operation = '%';
    const expected = '1';
    const result = operate(numberOne, numberTwo, operation);
    expect(result).toBe(expected);
  });

  it('should handle modulo with division by zero', () => {
    const numberOne = '10';
    const numberTwo = '0';
    const operation = '%';
    const expected = "Can't find modulo as can't divide by 0.";
    const result = operate(numberOne, numberTwo, operation);
    expect(result).toBe(expected);
  });

  it('should throw an error for unknown operation', () => {
    const numberOne = '10';
    const numberTwo = '5';
    const operation = '&';
    expect(() => {
      operate(numberOne, numberTwo, operation);
    }).toThrowError("Unknown operation '&'");
  });
});
