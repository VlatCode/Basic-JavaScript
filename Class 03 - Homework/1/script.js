// NUMBER
function firstFunction (num1, num2) {
    let result = num1 + num2;
    console.log(typeof(result));
}

firstFunction (2, 2);

// BOOLEAN
function secondFunction (num1, num2) {
    let result = num1 > num2;
    console.log(typeof(result));
}

secondFunction(10, 9);

// STRING
function thirdFunction (input1, input2) {
    let result = input1 + input2;
    console.log(typeof(result));
}

thirdFunction('I love', 'coding');

// UNDEFINED
function fourthFunction () {
    console.log(typeof(result));
}

fourthFunction();

// OBJECT
function fifthFunction () {
    let myCar = {
        name: 'BMW',
        model: 'X7',
        year: 2021
      };
    console.log(typeof(myCar));
}

fifthFunction();
