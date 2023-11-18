const { palindrome } = require('../utils/for_testing');

describe('palindrome', () => {
  test('of a long word', () => {
    const result = palindrome('paranguarucutirimiruaro');
    expect(result).toBe('oraurimiritucuraugnarap');
  });

  test('of empty string', () => {
    const result = palindrome('');
    expect(result).toBe('');
  });

  test('of undefined', () => {
    const result = palindrome();
    expect(result).toBeUndefined();
  });
});
