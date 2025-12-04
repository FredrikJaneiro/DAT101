"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//creating two variables that holds the results of the original expression and the modified expression
const originalExpression = 2 + 3 * 2 - 4 * 6;
const modifiedExpression = 2 + (3 * ((2 - 4) * 6));

//printing out the results
printOut(`The result of the modified expression is: 2 + (3 * ((2 - 4) * 6)) = ${modifiedExpression}`);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// constants
const MM_PER_M = 1000;
const MM_PER_CM = 10;
const MM_PER_INCH = 25.4;

//Values
const meters = 25;
const centimeters = 34;

//Converting all to MM
const totalMm = (meters * MM_PER_M) + (centimeters * MM_PER_CM);

//Converting all to inches
const totalInches = totalMm / MM_PER_INCH;

//Round to two decimal places
const totalInchesRounded = totalInches.toFixed(2);

//Output
printOut(`${meters} meters and ${centimeters} centimeters = ${totalInchesRounded} inches.`);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Constants
const MinutesPerHour = 60;
const HoursPerDay = 24;
const SecondsPerMinute = 60;

//Values
const days = 3;
const hours = 12;
const minutes = 14;
const seconds = 45;

//convert 
const totalminutes = 
(days * HoursPerDay * MinutesPerHour) +
(hours * MinutesPerHour) +
minutes +
(seconds / SecondsPerMinute);

//Output
printOut(`${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds = ${totalminutes} total minutes.`);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//total_days
const total_minutes = 6322.52;
const total_days = (total_minutes / 1440);
const remaining_minutes = total_minutes % 1440;
const total_hours = (remaining_minutes / 60);
const total_minutes_final = (remaining_minutes % 60);
const total_seconds = Math.round(0.52 * 60); // 31 seconds (rounded)

//Output
printOut(`6322.52 minutes = ${Math.floor(total_days)} days, ${Math.floor(total_hours)} hours, ${Math.floor(total_minutes_final)} minutes and ${total_seconds} seconds.`);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Dollar US to NOK

//Values to convert
let usd = 54;
let nok = 477;

//Conversion rates
let usd_to_nok_rate = nok / usd;
let nok_to_usd_rate = usd / nok;

//Conversions
let usd_to_nok = usd * usd_to_nok_rate;
let nok_to_usd = nok * nok_to_usd_rate;

//Output
printOut(`${usd} USD = ${usd_to_nok.toFixed(2)} NOK`);
printOut(`${nok} NOK is = ${nok_to_usd.toFixed(2)} USD`);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

//Variable with text
let text = "There is much between heaven and earth that we do not understand.";

//Number of characters in the text
let numCharacters = text.length;

//Character at position 19 
let charAt19 = text.charAt(19);

//characters from position 35, and 8 characters forward
let substring = text.substr(35, 8);

//Index where "earth" starts
let indexOfEarth = text.indexOf("earth");

//Output
printOut("There is much between heaven and earth that we do not understand.");
printOut(`The number of characters in the text is: ${numCharacters}`);
printOut(`The character at position 19 is: '${charAt19}'`);
printOut(`The substring from position 35 with length 8 is: '${substring}'`);
printOut(`The word "earth" starts at index: ${indexOfEarth}`);
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Expressions true or false with different functions

//Is 5 greater than 3?
let isFiveGreaterThanThree = 5 > 3;
printOut(`Is 5 greater than 3? ${isFiveGreaterThanThree ? "1. True" : "1. False"}`);

//Is 7 less than or equal to 7?
let is7lessOrEqualTo7 = 7 <= 7;
printOut(`Is 7 less than or equal to 7? ${is7lessOrEqualTo7 ? "2. True" : "2. False"}`);

//Is "a" greater than "b"?
let iSaGreaterThanB = "a" > "b";
printOut(`Is "a" greater than "b"? ${iSaGreaterThanB ? "3. True" : "3. False"}`);

//Is 1 less than "a"?
let Is1lessThanA = 1 < "a";
printOut(`Is 1 less than "a"? ${Is1lessThanA ? "4. True" : "4. False"}`);

//Is 2500 less than "ABCD"?
let Is2500lessThanABCD = 2500 << "ABCD"; //Number is not greater than NaN, which is true
printOut(`Is 2500 less than "ABCD"? ${Is2500lessThanABCD ? "5. True" : "5. False"}`);

//Is "Arne" not equal to "Thomas"?
let ArneIsNotEqualToThomas = "Arne" != "Thomas";
printOut(`Is "Arne" not equal to "Thomas"? ${ArneIsNotEqualToThomas ? "6. True" : "6. False"}`);

//(2 equals 5) is this statement true?
let eq25 = 2 === 5; //false
printOut(`(2 === 5) === true is ${eq25 === true}`);

//("abcd" is greater than "bcd") is this statement false?
let IsAbcdGreaterThanBcd = "abcd" > "bcd"; //false
printOut(`("Abcd" > "bcd") === false is ${IsAbcdGreaterThanBcd === false}`);
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

//From text "254" to a number
let text1 = "254";
let num1 = Number(text1);
printOut(`"${text1}" -> ${num1}`);

//From text "57.32" to a number
let text2 = "57.32";
let num2 = Number(text2);
printOut(`"${text2}" -> ${num2}`);

//From text "25 kroner" to a number
let text3 = "25 kroner";
//Parseint stops at the first non-numeric character
let num3 = parseInt(text3);
printOut(`"${text3}" -> ${num3}`);
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

//Generate a random integer between 1 and 360
let r = Math.floor(Math.random() * 360) + 1;
printOut("r integer between 1 and 360: " + r);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

//total number of days
let totalDays = 131;

//Weeks and remaining days
let weeks = Math.floor(totalDays / 7);
let remainingDays = totalDays % 7;

//Output
printOut(`${totalDays} days = ${weeks} weeks and ${remainingDays} days.`);
printOut(newLine);
