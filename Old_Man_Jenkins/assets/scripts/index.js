// Qustion One
let max = 1028;
let min = 0;
let spotArray = [];
let runProgram = input.forEach((spot) => {

  

  let rowRangeMin = 0;
  let rowRangeMax = 127;

  let digSpot = 0;

  // 51
  // 38
  let colRangeMin = 0;
  let colRangeMax = 7;

  // Will look at each spot and check if it's a certain letter, for something to happen to it.
  for (letter of spot) {
    if (letter === "F") {
      rowRangeMax = Math.floor((rowRangeMin + rowRangeMax) / 2);
    }
    if (letter === "B") {
      rowRangeMin = Math.ceil((rowRangeMin + rowRangeMax) / 2);
    }

    if (letter === "L") {
      colRangeMin = Math.floor((colRangeMin + colRangeMax) / 2);
    }
    if (letter === "R") {
      colRangeMax = Math.ceil((colRangeMin + colRangeMax) / 2);
    }
    
  }
  digSpot = (4 * rowRangeMin) + colRangeMin
  
  spotArray.push(digSpot)


  // finds the biggest number in the spotArray to get the answer to question one.
  let highest = 0;
  for(let i = 0; i < spotArray.length; i++) {
    if(spotArray[i] > highest) {
      
      highest = spotArray[i]
    }
  }
  console.log(highest)

  // console.log(spotArray.forEach((number) =>{
  //   let total = 0;
  //   if(number > spotArray[]){
  //     highest += current;
  //   }
  //   return total;
  // }, 0))

    
});

console.table(spotArray)