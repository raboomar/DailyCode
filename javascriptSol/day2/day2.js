const { readFileSync, promises: fsPromises } = require("fs");
const computerShapes = { A: "Rock", B: "Paper", C: "Scissors" };
const myShapes = { X: "Rock", Y: "Paper", Z: "Scissors" };
const shapePoints = { Rock: 1, Paper: 2, Scissors: 3 };
const outcomePoints = { Lost: 0, Draw: 3, Win: 6 };
const neededOutcome = { X: "Lost", Y: "Draw", Z: "Win" };

function syncReadFile(filename) {
  const contents = readFileSync(filename, "utf-8");

  const arr = contents.split(/\r?\n/);

  return arr;
}

syncReadFile(
  "/Users/rami/Desktop/learning/DailyCode/javascriptSol/day2/day2.txt"
);

let arr = ["A Y"];

const userInput = (picks) => {
  let myPick = myShapes[picks[2]];

  let computersPick = computerShapes[picks[0]];
  let outcome = validate(myPick, computersPick);

  let wantedOutCome = neededOutcome[picks[2]];

  myPick =
    wantedOutCome === outcome
      ? myShapes[picks[2]]
      : shapeToChoose(computersPick, picks[2]);

  let finalOutcome = validate(myPick, computersPick);
  if (finalOutcome === "Draw") {
    return 3 + shapePoints[myPick];
  } else if (finalOutcome === "Win") {
    return 6 + shapePoints[myPick];
  } else {
    return shapePoints[myPick];
  }
};

const shapeToChoose = (pc, me) => {
  if (me === "X") {
    if (pc === "Rock") {
      return "Scissors";
    } else if (pc === "Paper") {
      return "Rock";
    } else if (pc === "Scissors") {
      return "Paper";
    }
  } else if (me === "Z") {
    if (pc === "Rock") {
      return "Paper";
    } else if (pc === "Paper") {
      return "Scissors";
    } else if (pc === "Scissors") {
      return "Rock";
    }
  } else {
    return pc;
  }
};

const validate = (mes, pcs) => {
  if (mes === pcs) {
    return "Draw";
  } else if (mes === "Rock" && pcs === "Scissors") {
    return "Win";
  } else if (mes === "Paper" && pcs === "Rock") {
    return "Win";
  } else if (mes === "Scissors" && pcs === "Paper") {
    return "Win";
  } else {
    return "Lost";
  }
};

let test12 = syncReadFile(
  "/Users/rami/Desktop/learning/DailyCode/javascriptSol/day2/day2.txt"
);

let totalPoints = 0;
for (ar of test12) {
  totalPoints += userInput(ar);
  // console.log(userInput(ar));
}
console.log(totalPoints);
