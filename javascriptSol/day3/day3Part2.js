const fileReader = require("../fileReader");

let data = fileReader.syncReadFile(
  "/Users/rami/Desktop/learning/DailyCode/javascriptSol/day3/day3part2.txt"
);

const findMatched = (arrayOfStrings) => {
  let firstArr = arrayOfStrings[0].split("");
  let secondArr = arrayOfStrings[1].split("");
  let thirdArr = arrayOfStrings[2].split("");
  let matched = thirdArr.filter((char, index) => {
    if (firstArr.includes(char) && secondArr.includes(char)) {
      return char;
    }
  })[0];
  return matched;
};

const charNumberValue = (char) => {
  if (char === char.toUpperCase()) {
    return char.charCodeAt(0) - 38;
  } else {
    return char.charCodeAt(0) - 96;
  }
};

let total = 0;
while (data.length) {
  let arr = data.splice(0, 3);
  let winningChar = findMatched(arr);
  let charValue = charNumberValue(winningChar);
  total += charValue;
}
console.log(total);
