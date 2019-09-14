const sayHello = (string) => {
  return (`Hello ${string}!`);
};

const uppercase = (string) => {
  return string.toUpperCase(); // can make one line if you don't use return const lowercase = (string) => string.toUpperCase();
};

const lowercase = (string) => {
  return string.toLowerCase();
};

const countCharacters = (string) => {
  return string.length;
};

const firstCharacter = (string) => {
  return string.substring(0, 1);
};

const firstCharacters = (string, n) => {
  return string.substring(0, n);
};
module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters,
};
