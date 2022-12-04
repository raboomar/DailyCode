const fileReader = require("../fileReader");

let data = fileReader.syncReadFile(
  "/Users/rami/Desktop/learning/DailyCode/javascriptSol/day4/day4Part1.txt"
);
let test12 = [];
for (pairs of data) {
  pairs.split(",").map((str) => {
    let indexToSplitAt = str.indexOf("-");
    let itemRange = str.split("-");
    let emptyArr = [];
    let firstNum = parseInt(itemRange[0]);
    let secondNum = parseInt(itemRange[1]);
    for (let i = firstNum; i <= secondNum; i++) {
      emptyArr.push(parseInt(i));
    }
    test12.push(emptyArr);
  });
}

let totalPairs = 0;
while (test12.length) {
  let twoArryasToCheck = test12.splice(0, 2);

  let firstCheck = twoArryasToCheck[0].some((element) => {
    return twoArryasToCheck[1].includes(element);
  });
  let secondCheck = twoArryasToCheck[1].some((element) => {
    return twoArryasToCheck[0].includes(element);
  });

  if (firstCheck || secondCheck) {
    totalPairs++;
  }
}

console.log(totalPairs);
