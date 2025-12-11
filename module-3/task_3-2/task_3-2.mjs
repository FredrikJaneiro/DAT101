"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Counting up from 1 to 10
let countup = "";
for (let i = 1; i <= 10; i++) {
  countup += i + "";
  if (i < 10) {
    countup += ", ";
  }
} printOut(countup);
printOut(newLine);
//Counting down from 10 to 1
let countdown = ""; 
for (let i = 10; i >= 1; i--) {
  countdown += i;
    if (i > 1) {
  countdown += ", "; 
}
}
printOut(countdown); 
printOut(newLine);
    

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//The number the computer should find
let secretNumber = 45;
//Start guessing
let guess = Math.floor(Math.random() * 60) + 1; //Random number between 1 and 60
//Keep guessing until the number is found
while (guess !== secretNumber) {
  guess = Math.floor(Math.random() * 60) + 1; //New random guess
}
//Print out the found number
printOut(`The number is: ${guess}`);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Secret number between 1 and 1,000,000
let secretNumber2 = 145738;
//Counters and timers
let guessCount2 = 0;
let startTime2 = Date.now();
//Start guessing
let guess2 = Math.floor(Math.random() * 1000000) + 1; //Random number between 1 and 1,000,000
//Keep guessing until the number is found
while (guess2 !== secretNumber2) {
    guess2 = Math.floor(Math.random() * 1000000) + 1;
    guessCount2++; 
}
    //Stop time
let endTime2 = Date.now();
let timeUsed2 = endTime2 - startTime2; //Time used in milliseconds
//Output results
printOut(`The number is: ${guess2}`);
printOut(`Number of guesses: ${guessCount2}`);
printOut(`Time used: ${timeUsed2} milliseconds`);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//All prime numbers between 2 and 199
let primes = "";
for (let number = 3; number < 200; number++) {
  let divisor = 2;
  let isPrime = true;
  //Number has a divisor?
  while (divisor <= Math.sqrt(number)) {
    if (number % divisor === 0) {
      isPrime = false;
      break;
    }
    divisor++;
  }
  //If prime, add to the list
  if (isPrime) {
    primes += number + ", ";
  }
}
//Remove the last comma and space
primes = primes.slice(0, -2);
//Print out the prime numbers
printOut(`${primes}`);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//7 rows
for (let row = 1; row <= 7; row++) {
  let line = "";
  //9 columns
  for (let col = 1; col <= 9; col++) {
      line += `K${col}R${row} `;
    }
    printOut(line);
  }
  printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//5 random student scores between 1 and 236
for (let i = 1; i <= 1; i++) {
  let points = Math.floor(Math.random() * 236) + 1;
  //Percentage calculation
  let Percentage = Math.round((points / 236) * 100);
  //Grade determination
  let grade = "";

  if (Percentage >= 89) grade = "A";
  else if (Percentage >= 76) grade = "B";
  else if (Percentage >= 63) grade = "C";
  else if (Percentage >= 50) grade = "D";
  else if (Percentage >= 36) grade = "E";
  else grade = "F";
  printOut(`The student got ${points} points having ${Percentage}%, Grade: ${grade}`);
}
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//3 pairs
//Make a variable that holds the amount of throws
let throws = 0;
  //increment the throw counter
  let dice = [];
//loop breaks when the pattern is found
while (true) {
  //Generate random dice rolls
  throws ++;
  //create an array to hold the dice values
  dice = [];
  let count = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0}
  //Loop rolls the dice 6 times
  for (let i = 0; i < 6; i++) {
  //random number between 1 and 6
    let roll = Math.floor(Math.random() * 6) + 1;
    dice.push(roll);
    count[roll]++;
  }
  //Check for three pairs
  let pairs = 0;
  for (let i = 1; i <= 6; i++) {
    if (count[i] === 2) {
      pairs++;
    }
  }

  //If three pairs are found, break the loop
  if (pairs === 3) {
    break;
  }
}
printOut(dice.join(", "));
printOut("3 pairs!");
printOut(`Number of throws: ${throws}!`);
printOut(newLine);

//Full straight
throws = 0;
while (true) {
  throws++;
  dice = [];
  //Track which numbers have been rolled, true means the number is found
  let found = {1: false, 2: false, 3: false, 4: false, 5: false, 6: false};
  //Roll the dice 6 times
  for (let i = 0; i < 6; i++) {
    let roll = Math.floor(Math.random() * 6) + 1;
    dice.push(roll);
    //Mark this number as found
    found[roll] = true;
  }
  //Assume it is a full straight until proven otherwise
  let isFullStraight = true;
//loop through found to check if all numbers were rolled
  for (let i = 1; i <= 6; i++) {
    if (!found[i]) isFullStraight = false;
  }

  if (isFullStraight) {
  printOut(dice.join(", "));
  printOut("Full straight!");
  printOut(`Number of throws: ${throws}!`);
  break;
}
}
printOut(newLine);

//Tower (4 of a kind + pair)
throws = 0;
while (true) {
  throws++;
  dice = [];
  let count = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0};
  //Roll the dice 6 times
  for (let i = 0; i < 6; i++) {
    let roll = Math.floor(Math.random() * 6) + 1;
    dice.push(roll);
    count[roll]++;
  }
  //Check for tower
  let hasFourOfAKind = false;
  let hasPair = false;
  for (let i = 1; i <= 6; i++) {
    if (count[i] === 4) hasFourOfAKind = true;
    if (count[i] === 2) hasPair = true;
  }

  //Pattern is found if both conditions are met
  if (hasFourOfAKind && hasPair) {
    printOut(dice.join(", "));
    printOut("Tower!");
    printOut(`Number of throws: ${throws}!`);
    break;
  }
}
printOut(newLine);

//Yahtzee (6 of a kind)
throws = 0;
while (true) {
  throws++;
  dice = [];
  let count = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0};
  //Roll the dice 6 times
  for (let i = 0; i < 6; i++) {
    let roll = Math.floor(Math.random() * 6) + 1;
    dice.push(roll);
    count[roll]++;
  }
  //Check for Yahtzee
  let hasYahtzee = false;
  for (let i = 1; i <= 6; i++) {
    if (count[i] === 6) hasYahtzee = true;
  }

  if (hasYahtzee) {
    printOut(dice.join(", "));
    printOut("Yahtzee!");
    printOut(`Number of throws: ${throws}!`);
    break;
  }
}
printOut(newLine);