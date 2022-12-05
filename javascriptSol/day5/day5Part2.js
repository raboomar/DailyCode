const fileReader = require("../fileReader");

let data = fileReader.syncReadFile(
  "/Users/rami/Desktop/learning/DailyCode/javascriptSol/day5/day5Part2.txt"
);

// let crates = { 1: ["Z", "N"], 2: ["M", "C", "D"], 3: ["P"] };
let crates = {
  1: ["N", "B", "D", "T", "V", "G", "Z", "J"],
  2: ["S", "R", "M", "D", "W", "P", "F"],
  3: ["V", "C", "R", "S", "Z"],
  4: ["R", "T", "J", "Z", "P", "H", "G"],
  5: ["T", "C", "J", "N", "D", "Z", "Q", "F"],
  6: ["N", "V", "P", "W", "G", "S", "F", "M"],
  7: ["G", "C", "V", "B", "P", "Q"],
  8: ["Z", "B", "P", "N"],
  9: ["W", "P", "J"],
};

for (move of data) {
  let movesArr = move.split(" ");
  let amountToMove = movesArr[1];
  let fromWhere = movesArr[3];
  let toWhere = movesArr[5];
  let createsToBeMoved = crates[fromWhere].splice(-amountToMove);

  createsToBeMoved.forEach((element) => {
    crates[toWhere].push(element);
  });
}
console.log(crates);
