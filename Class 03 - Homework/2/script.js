// Converting human years to dog years
function firstConversion () {
    let humanAge = prompt('Enter your age');
    const dogYears = humanAge / 7;
    console.log(dogYears);
}

firstConversion();

// Converting dog years to human years
function secondConversion () {
    let dogAge = prompt("Enter your dog's age");
    let humanYears = dogAge * 7;
    console.log(humanYears);
}
secondConversion();