// Qustion One
let max = 1028;
let min = 0;
let runProgram = input.forEach((spot) => {
  let rowRangeMin = 0;
  let rowRangeMax = 127;

  // 51
  // 38
  let colRangeMin = 0;
  let colRangeMax = 7;

  for (letter of spot) {
    if (letter === "F") {
      rowRangeMax = Math.floor(rowRangeMin + rowRangeMax / 2);
    }
    if (letter === "B") {
      if (rowRangeMin != 0) {
        rowRangeMin = Math.ceil(rowRangeMin + rowRangeMax / 2);
      }
  }

    if (letter === "R") {
      colRangeMax = Math.ceil(colRangeMin + colRangeMax / 2);
    }
    if (letter === "L") {
      colRangeMin = Math.floor(colRangeMin + colRangeMax / 2);
    }
  }

  if (rowRangeMax > max) {
    max = rowRangeMax;
  }
  if (rowRangeMin < min) {
    min = rowRangeMin;
  }
});
console.log(`Min: ${min} Max: ${max}`);
