"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function printToday() {
    const today = new Date();
    const formatted = today.toLocaleDateString("no-NB", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });
    printOut(`Today's date is: ${formatted}`);
}
printToday();
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Function from Task 1 
function getToday() {
    const today = new Date();
    const formatted = today.toLocaleDateString("no-NB", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });
    printOut(`Today's date is: ${formatted}`);
    return today;
}
//Function that calculates days untIL 2XKO release
function daysUntilRelease () {
    const ReleaseDate = new Date(2025, 4, 14);
    const diff = ReleaseDate - getToday();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    return days;
}
//Months are 0 indexed in JavaScript Date object
//Use the functions together
const daysLeft = daysUntilRelease();
printOut(`Days until 2XKO release: ${daysLeft} days on XBOX and PC!`);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//function that calculates circle info
function circleInfo(radius) {
    const diameter = radius * 2;
    const circumference = 2 * Math.PI * radius;
    const area = Math.PI * radius * radius;
    printOut(`Diameter is: ${diameter}`);
    printOut(`Circumference is: ${circumference.toFixed(2)}`);
    printOut(`Area is: ${area.toFixed(2)}`);
}
circleInfo(5);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Function that calculates rectangle info
function rectangleInfo(rect) {
    const width = rect.width;
    const height = rect.height;

    const circumference = 2 * (width + height);
    const area = width * height;
    printOut(`Rectangle width: ${width}, height: ${height}`);
    printOut(`Circumference is: ${circumference}`);
    printOut(`Area is: ${area}`);
    printOut(newLine);
} 
rectangleInfo({width: 4, height: 3});

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Function that converts between Celsius, Fahrenheit and Kelvin
function convert (temp, tyoe) {
    let celsius, fahrenheit, kelvin;

    if (tyoe === "C") {
        celsius = temp;
        fahrenheit = (temp * 9/5) + 32;
        kelvin = temp + 273.15;
        printOut(`Convert ${temp} Celsius`);
    }

    else if (tyoe === "F") {
        fahrenheit = temp;
        celsius = Math.round(temp - 273.15);
        fahrenheit = Math.round(celsius + 273.15);
        printOut(`Convert ${temp} Fahrenheit`);
    }
    
    else if (tyoe === "K") {
        kelvin = temp;
        celsius = Math.round(temp - 273.15);
        fahrenheit = Math.round((celsius * 9/5) + 32);
        printOut(`Convert ${temp} Kelvin`);
    }

    printOut(`Celsius = ${celsius}`);
    printOut(`Fahrenheit = ${fahrenheit}`);
    printOut(`Kelvin = ${kelvin}`);
    printOut(newLine);
}
//calling functions in the correct order
convert(25, "C");
convert(77, "F");
convert(300, "K");
printOut(newLine); 

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Function that calculates net price (without tax)
function calculateNetPrice(gross, group) {
    let taxGroup = group.toLowerCase();
    let vat;

    if (taxGroup === "normal") vat = 25;
    else if (taxGroup === "food") vat = 15;
    else if (taxGroup === "hotel" || taxGroup === "transport" || taxGroup === "cinema") vat = 10;
    else return NaN;

    return (100 * gross) / (vat + 100);
}

//Examples
let net1 = calculateNetPrice(100, "normal");
printOut(`100 is  ${net1.toFixed(2)} without tax`);
let net2 = calculateNetPrice(150, "food");
printOut(`150 is  ${net2.toFixed(2)} without tax`);
let net3 = calculateNetPrice(50, "hotel");
printOut(`50 is  ${net3.toFixed(2)} without tax`);
let net4 = calculateNetPrice(0, "textile"); //Unknown group
if (isNaN(net4)) {
    printOut("Textile is an unknown tax group");
}
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Function that calculates speed, distance, or time
function CalculatingTriangle(speed, distance, time) {
    //Count missing values
    let missing = 0;
    if (speed === null) missing++;
    if (distance === null) missing++;
    if (time === null) missing++;

    //If more than one value is missing, return NaN
    if (missing > 1) return NaN;

    //Calculate the missing value
    if (speed === null) {
        return distance / time;
    } else if (distance === null) {
        return speed * time;
    } else if (time === null) {
        return distance / speed;
    }
    return NaN; //All values provided
}

//Calculating
let time1 = CalculatingTriangle(75,50,null);
printOut("Speed = 75 km/h");
printOut(`Distance = 50 km`);
printOut(`Calculated time = ${time1.toFixed(2)} h`);
printOut(newLine);

let time2 = CalculatingTriangle(60,120,null);
printOut("Speed = 60 km/h");
printOut("Distance = 120 km");
printOut(`Calculated time = ${time2.toFixed(2)} h`);
printOut(newLine);

let time3 = CalculatingTriangle(70,105, null);
printOut("Speed = 70 km/h");
printOut("Distance = 105 km");
printOut(`Calculated time = ${time3.toFixed(2)} h`);
printOut(newLine);

let time4 = CalculatingTriangle(null,50, null);
printOut("Speed = undefined km/h");
printOut("Distance = 50 km");
printOut("Calculated time = NaN h");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function expandText(text, maxSize, char, putBefore) {
    if (text.length >= maxSize) {
        return text;
    }
    const missing = maxSize - text.length;
    const filler = char.repeat(missing); 
    return putBefore ? filler + text : text + filler;
}

const MAX_LEN = 40; 
const base = "This is a text";
const SPACE = "\u00A0" //non breaking space 

const left = expandText(base, MAX_LEN, SPACE, false);
printOut(`"${left}"`);

const right = expandText(base, MAX_LEN, SPACE, true);
printOut(`"${right}"`);
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//function that tests the mathematical expression for a given number of lines
function testMath(lines) {

    let currentNumber = 1;

    for (let line = 1; line <= lines; line++) {
        const leftCount = line + 1;
        const rightCount = line;

        let leftNums = [];
        let rightNums = [];

        let leftSum = 0;
        let rightSum = 0;

        //left side
        for (let i = 0; i < leftCount; i++) {
            leftNums.push(currentNumber);
            leftSum += currentNumber;
            currentNumber++;
        }
        //Right side
        for (let i = 0; i < rightCount; i++) {
            rightNums.push(currentNumber);
            rightSum += currentNumber;
            currentNumber++;
        }
        //check quality
        if (leftSum !== rightSum) {
            printOut(`${leftNums.join(" ")} = ${rightNums.join(" ")}`);
        printOut(`Failed at line ${line}: ${leftSum} != ${rightSum}`);
        return;
        }
        //print out the first 7 lines
        if (line <= 7) {
            const leftStr = leftNums.join(" ");
            const rightStr = rightNums.join(" ");

        //spacing
        const space = "\u00A0"
        const LEFT_COL = 25;
        const RIGHT_COL = 25;

        const paddedLeft = leftStr.padEnd(LEFT_COL, space);
        const paddedRight = rightStr.padStart(RIGHT_COL, space);
        printOut(`${paddedLeft} = ${paddedRight}`);
        }
    }
    printOut("Mathematics is fun!");
}
testMath(200);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function factorial(n) {
    //case, if n is 1 or 0, return to 1
    if (n === 1 || n === 0) {
        return 1;
    } else { 
        return n * factorial(n - 1);
    }
}
//test the factorial function
let num = 9 //you can change number to test
let result = factorial(num);

//result
printOut(`factorial(${num}) is ${result}`);
printOut(newLine);
