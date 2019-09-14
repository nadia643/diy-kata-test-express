const negate = (a) => {
  return !a;
};

const both = (a, b) => {
  return a && b;
};

const either = (a, b) => {
  return a || b;
};

const none = (a, b) => {
  return !a && !b;
};

const one = (a, b) => {
  return a ^ b;
};

const truthiness = (a) => {
  return a === true;
};

const isEqual = (a, b) => {
  // your code here
};

const isGreaterThan = (a, b) => {
  return a > b;
};

const isLessThanOrEqualTo = (a, b) => {
  return a <= b;
};

const isOdd = (a) => {
  // your code here
};

const isEven = (a) => {
  // your code here
};

const isSquare = (a) => {
  // your code here
};

const startsWith = (char, string) => {
  return string.startsWith(char);
};

const containsVowels = (string) => {
  // your code here
};

const isLowerCase = (string) => {
  return isLowerCase.isLowerCase(string);
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase,
};
