/*const raining = false;
const cold = true;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");

// next block 

const temperature = 20;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!"); */

/* out put - "Short sleeves won't cut it!" "Now you're ready to go outside!" */

//If citizen is over 18 console.log will print
const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
} 

//if temp is above 40 or below -40 console.log will print 
const temperature = 41;

if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}

// if not raining - leave your umbrella at home
const raining = false;

if (!raining) {
  console.log("Leave your umbrella at home!");
}