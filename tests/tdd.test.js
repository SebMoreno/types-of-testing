/*
Escribir una función que al pasarle un número:
  - Si es múltiplo de 3, devuelva "fizz"
  - Si es múltiplo de 5, devuelva "buzz"
  - Si es múltiplo de 3 y 5, devuelva "fizzbuzz"
  - Muestra el número si no es múltiplo de ninguno de los anteriores
*/

const fizzbuzz = num => {
  if (typeof num !== 'number') throw new Error('Debes pasar un número');
  if (Number.isNaN(num)) throw new Error('Debes pasar un número');
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
};

describe('Fizzbuzz', () => {
  it('should be a function', () => {
    expect(typeof fizzbuzz).toBe('function');
  });
  it('should throw an error if no number is passed', () => {
    expect(() => fizzbuzz()).toThrow('Debes pasar un número');
  });
  it('should throw an error if NaN is passed', () => {
    expect(() => fizzbuzz('hola')).toThrow('Debes pasar un número');
  });
  it('should return fizz if a multiple of 3 is passed', () => {
    expect(fizzbuzz(3)).toBe('fizz');
    expect(fizzbuzz(6)).toBe('fizz');
  });
  it('should return buzz if a multiple of 5 is passed', () => {
    expect(fizzbuzz(5)).toBe('buzz');
    expect(fizzbuzz(10)).toBe('buzz');
  });
  it('should return fizzbuzz if a multiple of 3 and 5 is passed', () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz');
    expect(fizzbuzz(30)).toBe('fizzbuzz');
  });
  it('should return the number if not a multiple of 3 or 5', () => {
    expect(fizzbuzz(2)).toBe(2);
    expect(fizzbuzz(7)).toBe(7);
  });
});
