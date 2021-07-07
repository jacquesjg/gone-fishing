///==========================
// prompt-sync
const prompt = require('prompt-sync')();


///==========================
// three fish atrribute arrays comprised of two attribute arrays and name array
const adjArray1 = ['red', 'yellow', 'blue', 'orange', 'red', 'violet', 'indigo', 'silver', 'gold', 'shiny']

const adjArray2 = ['-finned', '-backed', '-tinted', ' saltwater', '-gilled', '-colored', '-toothless', '-european', '-american', ' tropical']

const nameArray = [' trout', ' bass', ' pike', ' perch', ' salmon', ' catfish', ' herring', ' carp', ' swordfish', ' tuna']


///==========================
// make weight between 0.00 and 10.00
let weight = (Math.round((Math.random() * 1000)) / 100);


///==========================
// make price/value between 0.00 and 10.00
let value = (Math.round((Math.random() * 1000)) / 100);


///==========================
// make random fish
function randChoice(array) {
    return array[Math.floor(array.length * Math.random())]
  }

console.log(randChoice(adjArray1) + randChoice(adjArray2) + randChoice(nameArray));

///==========================
// infinite loop

for (;;) {
    const n = prompt('What would you like to do?');

}