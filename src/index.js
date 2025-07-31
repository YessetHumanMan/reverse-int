module.exports = function reverse(n) {
  const reversedStr = Math.abs(n).toString().split('').reverse().join('');
  const reversedNumber = parseInt(reversedStr, 10);
  return reversedNumber;
};
