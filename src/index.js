module.exports = function reverse (n) {
    let reversedStr = Math.abs(n).toString().split("").reverse().join("");
      let reversedNumber = parseInt(reversedStr, 10);
      return reversedNumber;
  }
