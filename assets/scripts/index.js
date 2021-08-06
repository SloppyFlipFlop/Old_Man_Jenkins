console.log(input.length)

// Qustion One
const rowtValue = 128
const colVaule = 8

let finalRowValue;
let finalColVaule;

const rowRange = [0, 128]
const colRange = [0, 8]

console.log(rowRange[1] / 2)



console.log(
    input.forEach((spot) => {
        const spotArray = spot.split("")
        // Breaks up the array to small array that i can use later to find the dig spot eaiser.
        const rowLetters = spotArray.filter((letter) => {
            return letter.includes('F') ||
                letter.includes('B');
        })

    // Remember that rowLetters and ccolLetters are 2D arrays. SO make for loop that will go though each one and find the dig spot of each of them.

        const colLetters = spotArray.filter((letter) => {
            return letter.includes('L') ||
                letter.includes('R');
        })

        // Finds the row the dig spot is at.
        for (let i = 0; i < rowLetters.length; i++) {
            if (rowLetters[i] === 'F') {
                // Updates the range that the dig site can be
                rowRange[1] = Math.floor(rowRange[1] / 2)
                return rowRange;
            } else if (rowLetters[i] === 'B') {
                // Updates the range that the dig site can be
                rowRange[0] = Math.ceil(rowRange[0] / 2)
                return rowRange;
            }
        }
    }))

    console.log(rowRange)