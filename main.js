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
function randomWeight() { 
    return (Math.round((Math.random() * 1000)) / 100)
}



///==========================
// make price/value between 0.00 and 10.00
function randomValue() {
    return (Math.round((Math.random() * 1000)) / 100);
}


///==========================
// format value
var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  

///==========================
// make random fish
function randChoice(array) {
    return array[Math.floor(array.length * Math.random())]
  }

  function randomFishName() {
    const fishName = randChoice(adjArray1) + randChoice(adjArray2) + randChoice(nameArray);
    return fishName
}
 

///=========================
// make random fish object

function randomFish() {
    return {
        name: randomFishName(),
        weight: randomWeight(),
        value: formatter.format(randomValue())
    }
}



// time convert

function timeConvert(n) {
    const num = n;
    const hours = (num / 60);
    const rhours = Math.floor(hours);
    const minutes = (hours - rhours) * 60;
    const rminutes = Math.round(minutes);
    return rhours + " hour(s) and " + rminutes + " minute(s).";
    }
    

///==========================
// infinite loop // could need while loop


    const n = prompt('What would you like to do?')