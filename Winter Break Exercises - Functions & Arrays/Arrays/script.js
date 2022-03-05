// ARRAYS EXERCISES

// Task 0: Create an array
// Create a function that takes a number and creates an array with all numbers till that number.

function firstFunction () {
    let firstArray = [];
    // for (initialization; condition; increment/decrement)
    for (let i = 1; i <= 100; i++) {
        firstArray.push(i);
    }
    console.log(firstArray);
}

firstFunction();


// Task 1: Return the First Element in an Array
// Create a function that takes an array and returns the first element.

function secondFunction () {
    let secondArray = ['Vlatko', 'Mario', 'Jana', 'Monika'];
    console.log(secondArray[0]);
}

secondFunction();

// Task 2: Reverse an Array
// Write a function to reverse an array.

function thirdFunction () {
    let thirdArray = ['Vlatko', 'Mario', 'Jana', 'Monika'];
    let reversedArray = [];
    for (let i = thirdArray.length - 1; i >= 0; i--) {
        reversedArray.push(thirdArray[i]);
    }
    return reversedArray;
    // console.log(thirdArray.reverse()); - quicker way with a JS method.
}

console.log(thirdFunction ());

// Task 3: Find the Index
// Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return -1.

function findIndex(number) {
    let fourthArray = [1, 2, 3, 4, 5];
    let newValue;
    for (let i = 0; i < fourthArray.length; i++) {
        if (fourthArray[i] === number) {
            newValue = i;
        }
    }
    if (newValue) {
        return newValue;
    } else {
        return -1;
    }
}

console.log(findIndex(5));

// Task 4: Check if an Array Contains a Given Number
// Write a function to check if an array contains a particular number.

function checkForNumber(numbers, input) {
    let isInList = false;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === input) {
            isInList = true;
        }
    }

    if (isInList) {
        return `The number ${input} is in the list.`;
    } else {
        return 'There is no such number.';
    }
}

let numbersArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
let inputNumber = 5;

console.log(checkForNumber(numbersArray, inputNumber));

// Task 5: Negate the Array of Numbers
// Given an array of numbers, negate all elements contained within.

function negatingFunction () {
    let numbersArray = [2, 4, 6, 8, 10];
    let negatedArray = [];
    // for (i = 0; i < numbersArray.length; i++) {
    //     negatedArray.push(numbersArray[i] * -1);
    // } - THIS IS THE SAME AS THE FOR-OF LOOP BELOW

    for (let number of numbersArray) {
        negatedArray.push(number * -1);
    }
    return negatedArray;
}

console.log(negatingFunction());

// Task 6: Difference of Max and Min Numbers in Array
// Create a function that takes an array and returns the difference between the biggest and smallest numbers.

function differenceMinMax () {
    let numbersArray = [1, 3, 4, 5, 50];
    let min = numbersArray[0];
    let max = numbersArray[0];
    for (let number of numbersArray) {
        if (number > max) {
            max = number;
        } else if (number < min) {
            min = number;
        }
    }
    return max - min;
}

console.log(differenceMinMax());

// Task 7: Multiply by Length
// Create a function to multiply all values in an array by the amount of values in that array.

function multiplyingFunction () {
    let numbersArray = [1, 2, 3, 4, 5];
    let arrayLength = numbersArray.length
    let newArray = [];
    for (let number of numbersArray) {
        let newNumber = number * arrayLength
        newArray.push(newNumber);
    }
    // for (i = 0; i < arrayLength; i++) {
    //     newArray.push(numbersArray[i] * arrayLength)
    // } - THIS IS THE SAME AS THE FOR-OF LOOP ABOVE!
    return newArray;
}

console.log(multiplyingFunction());

// Task 8: Hurdle Jump
// Create a function that takes an array of hurdle heights and a jumper's jump height, and determine whether or not the hurdler can clear all the hurdles.
// A hurdler can clear a hurdle if their jump height is greater than or equal to the hurdle height.

function hurdleJump (jumpHeight) {
    let hurdleHeights = [100, 110, 120, 130, 140];
    for (let height of hurdleHeights) {
        if (jumpHeight >= height) {
            console.log(`The jumper can jump over the ${height} centimeter height`);
        } else {
            console.log(`The jumper can't jump over the ${height} centimeter height.`);
        }
    }
}

hurdleJump(115);

// Task 9: Generate a Countdown of Numbers in an Array
// Create a function that takes a number as an argument and returns an array of numbers counting down from this number to zero.

function countdownFunction (number) {
    let countdownArray = [];
    for (i = number; i >= 0; i--) {
        countdownArray.push(i);
    }
    return countdownArray;
}

console.log(countdownFunction(50));

// Task 10: Odd Up, Even Down
// Create a function that goes through the array, incrementing (+1) for each odd number and decrementing (-1) for each even number.

function incrementDecrement () {
    let numbersArray = [1, 2, 3, 4, 5];
    let newArray = [];
    for (let number of numbersArray) {
        if (number % 2 == 0) {
            newArray.push(number = number - 1);
        } else {
            newArray.push(number = number + 1);
        }
    }
    return newArray;
}

console.log(incrementDecrement());


