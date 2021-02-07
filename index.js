var ages = [3, 9, 23, 64, 2, 8, 28, 93];
ages.push(33);

var firstAge = (ages[0]);
var lastAge = (ages[ages.length -1]);

console.log(lastAge - firstAge);

console.log(ages); //33 was added and new value for line 7 is 30

let sum = 0;
for (i = 0; i < ages.length; i++) {
    sum += ages[i];
} let averageAge = sum / ages.length;
console.log(averageAge);

//this loops through array and sums the length of each name and divides that total by the length of total array to get average name length 
var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
var totalLength = 0;
for (i = 0; i < names.length; i++) {
    let currentName = names[i];
    totalLength += currentName.length; 
}
var averageNameLength = totalLength / names.length
console.log(averageNameLength);

//below loops through names and concatenates names with space
let printNames = names[0];
for (i = 1; i < names.length; i++) {
    let currentName = names[i];
    printNames = printNames + ' ' + currentName;
}
console.log(printNames);

//arrayName[arrayName.length - 1]; //access last element in array
//arrayName[0]; //access first element in array

//below creates new array by iterating through previous and pushing new elements to new array
var nameLengths = [];
for (i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}
console.log(nameLengths);

// loop iterates through array and caculates sum of all elements in array
var newSum = 0;
for (i = 0; i < nameLengths.length; i++) {
    newSum += nameLengths[i];
}
console.log(newSum);

//FUNCTI0NS
// takes a string and number as arguments and repeats string for number of times specified
function repeatWord (word , n) {
    let out = '';
    for (i = 0; i < n; i++) {
        out += word;
    } 
    return out;
}
console.log(repeatWord('Hello', 3));

//OR

function repeatAgain ( word, n ) {
    return word.repeat(n);
}
console.log(repeatAgain( 'Abigail', 6 ));

function createFullName (firstName, lastName) {
    return firstName + ' ' + lastName;
}
console.log(createFullName ('Abby', 'Taylor'));

// this adds all elements in array and compares total to the number 100; returns true if greater than
var numbers = [100, 1];

function greaterThan () {
    let total = 0;
    for (number of numbers) {
        total += number;
    }
    return total > 100;
}
console.log(greaterThan());

// this takes an array of numbers and returns the average of all elements in the array
var thisArray = [2, 4, 6];

function averageArray () {
    let total = 0;
    for (elt of thisArray) {
        total += elt;
    }
    let average = total / thisArray.length;
    return average;
}
console.log(averageArray());

// function that averages two arrays and compares the return values
var arrayOne = [2, 4, 6];
var arrayTwo = [1, 2, 3];

function compareArrayAverages() {
    let totalOne = 0;
    for (elt of arrayOne) {
        totalOne += elt;
    }
    let totalTwo = 0;
    for (elt of arrayTwo) {
        totalTwo += elt;
    }
    let average = totalOne / arrayOne.length;
    let averageTwo = totalTwo / arrayTwo.length;
    if (average > averageTwo) {
        return true;
    }
}
console.log(compareArrayAverages());

var isHotOutside = false;
var moneyInPocket = 20;

function willBuyDrink () {
    return (isHotOutside && (moneyInPocket >= 10.50));
}
console.log(willBuyDrink());

//Last question: my own question. I wanted to solve one I could not figure out on the quiz. 
//Write a function that takes two arguments, an array of strings and a string. 
//The function should return the index in the array that the string is located at. 
//If the string is not found in the array return -1

var quizArray = ['one', 'two', 'three'];
var quizString = 'two';

function returnIndex(arr, str) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === str) {
            return i;
        }
    }
    return -1;
}
console.log(returnIndex (quizArray, quizString));

