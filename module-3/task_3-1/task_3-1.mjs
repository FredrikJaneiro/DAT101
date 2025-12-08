"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Task 1, 2 and 3");
//Part 1
let wakeUpTime = 7;
printOut("Wake up time = " + wakeUpTime);
if (wakeUpTime === 7) 
  printOut("I can take the bus to school.");

//Part 2
let wakeUpTime2 = 6;
printOut("Wake up time = " + wakeUpTime2);
if (wakeUpTime2 === 7) {
  printOut("I can take the bus to school.");
} else {
  printOut("I have to take the car to school.");
}

//Part 3
let wakeUpTime3 = 8;
printOut("Wake up time = " + wakeUpTime3);
if (wakeUpTime3 === 7) {
  printOut("I can take the bus to school.");
} else if (wakeUpTime3 === 8) {
  printOut("I can take the train to school.");
} else {
  printOut("I have to take the car to school.");
}
printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Part 4 and 5

//Verdi
let value = -1;
printOut("Task 4 Value = " + value);

//Positive or Negative or Zero
if (value > 0) {
  printOut("The value is positive.");
} else if (value < 0) {
  printOut("The value is negative.");
} else {
  printOut("The value is zero.");
}
printOut(newLine);

printOut("--- Part 6, 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//random pic size
let photoSize = Math.floor(Math.random() * 8) + 1; // Random size between 1 and 8
printOut("Task 6 Photo size = " + photoSize + "MB");

//if the photo size is 6MB or larger, print "Image is too large" 
//Else if the photo size is 4MB or larger, print "Thank you"
//Else if the photo size is less than 4MB, print "Image size is too small"
if (photoSize >= 6) {
  printOut("Image is too large");
} else if (photoSize >= 4) {
  printOut("Thank you");
} else if (photoSize < 4) {
  printOut("Image size is too small");
}
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const MonthList = ["January", "February", "March", "April", "May", "June", 
                   "July", "August", "September", "October", "November", "December"];

const noOfMonths = MonthList.length;
const Month_Name = Math.floor(Math.random() * noOfMonths); //Random month index
printOut("Month is = " + MonthList[Month_Name]);
printOut(newLine);
//if the month contains the letter "r", you have to take vitamin D
if (MonthList[Month_Name].includes("r")) {
  printOut("You have to take vitamin D");
} else {
  printOut("You do not need to take vitamin D");
}

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//how many days in the month
const MonthList2 = ["January", "February", "March", "April", "May", "June", 
                   "July", "August", "September", "October", "November", "December"];
const MonthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//Number of days in a random month
const randomMonthIndex = Math.floor(Math.random() * MonthList.length);
printOut("Month: " + MonthList[randomMonthIndex] + ", Days: " + MonthDays[randomMonthIndex]);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const monthname = MonthList[randomMonthIndex];
if (monthname === "March" || monthname === "May") {
  printOut("The Art gallery is closed in " + monthname + ".");
} else if (monthname === "April") {
  printOut("The Art gallery has temporary premises in April");
} else {
  printOut("The Art gallery is open in " + monthname + ", Welcome!");
}
printOut(newLine);
