const getNthElement = (index, array) => {
  if (array <= 4) {
    return array[index];
  }
}; // need to work on this one

const arrayToCSVString = (array) => {
  return array.join();
};

const csvStringToArray = (string) => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  array.splice(array)
};

const numbersToStrings = (numbers) => {
  return numbers.toString();
};

const uppercaseWordsInArray = (strings) => {
  return strings.toUpperCase(strings);
};

const reverseWordsInArray = (strings) => {
  // your code here
};

const onlyEven = (numbers) => {
  if (numbers % 2 === 0) {
    return onlyEven;
  }
};

const removeNthElement2 = (index, array) => {
  array.remove[index, 2];
};

const elementsStartingWithAVowel = (strings) => {
  // your code here
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  /* he would do the green below was better than the if thing
  return strings.filter(word => {
    return vowels.includes(word[0].toLowerCase());
  });
*/
  const wordsWithVowels = [];
  strings.forEach(word => { //gone over e'thing with strings and printed
    if (vowels.includes(word[0].toLowerCase())) {
      wordsWithVowels.push(word);
    }
  })
  return wordsWithVowels;
}; //we're calling inclues on vowels and passing in word[0] on it

const removeSpaces = (string) => {
  // your code here
};

const sumNumbers = (numbers) => {
  // your code here
};

const sortByLastLetter = (strings) => {
  // your code here
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter,
};
