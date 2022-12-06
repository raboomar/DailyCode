const fileReader = require("../fileReader");

let data = fileReader.syncReadFile(
  "/Users/rami/Desktop/learning/DailyCode/javascriptSol/day6/day6.txt"
);

const getSubString = (start, end) => {
  let subStr = str.substring(start, end);
  return subStr;
};

let str = data[0];
let startIndex = 0;
let endIndex = 14;
for (let i = 0; i <= str.length; i++) {
  let sub = getSubString(startIndex, endIndex);
  let arrString = sub.split("");
  let isNotMarker = arrString.some(
    (char, index) => arrString.indexOf(char) !== index
  );

  if (isNotMarker) {
    startIndex++;
    endIndex++;
  } else {
    console.log(endIndex);
    break;
  }

  //   let subStr = str.substring(startIndex, endIndex);

  //   let arrStr = subStr.split("");
  //   let isNotMarker = arrStr.some(
  //     (char, index) => arrStr.indexOf(char) !== index
  //   );
  //   startIndex += 1;
  //   console.log(startIndex);
  //   endIndex += 1;
  //   if (isNotMarker) {
  //   }
  //   console.log(startIndex, endIndex);
}

//   if (isNotMarker === false) {
//     console.log(endIndex);
//     break;
//   } else {
//     startIndex += 1;
//     endIndex += 1;
//   }
// }
// console.log(isMarker);
