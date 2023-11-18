const palindrome = str => {
  if (str === undefined) return;
  return str
    .split('')
    .reverse()
    .join('');
};

const average = array => {
  if (array.length === 0) return 0;
  const sum = array.reduce((a, b) => a + b, 0);
  return sum / array.length;
};

module.exports = {
  palindrome,
  average
};
