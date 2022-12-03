const { readFileSync, promises: fsPromises } = require("fs");
function syncReadFile(filename) {
  const contents = readFileSync(filename, "utf-8");

  const arr = contents.split(/\r?\n/);

  return arr;
}

let data = syncReadFile(
  "/Users/rami/Desktop/learning/DailyCode/javascriptSol/day3/day3.txt"
);

const charNumberValue = (char) => {
  if (char === char.toUpperCase()) {
    return char.charCodeAt(0) - 38;
  } else {
    return char.charCodeAt(0) - 96;
  }
};

const filterForMatch = (firstString, secondString) => {
  let matched = secondString.filter((char, index) => {
    if (firstString.includes(char)) {
      return secondString[index];
    }
  })[0];
  return matched;
};

let total = 0;
for (str of data) {
  let firstHalfOfString = str.split("", str.length / 2);
  let secondHalfOfString = str.split("").slice(str.length / 2, str.length);
  let filtered = filterForMatch(firstHalfOfString, secondHalfOfString);
  let matchedCharValue = charNumberValue(filtered);
  total += matchedCharValue;
}
console.log(total);
