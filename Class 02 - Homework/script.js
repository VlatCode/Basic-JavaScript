let input = prompt("Enter your birth year:");
console.log(input);
let fridayCash = parseInt(input);
let year = (input - 4) % 12;

if(year === 0) {
    console.log('Your animal is a Rat');
}
else if(year === 1) {
    console.log('Your animal is a Ox');
}
else if(year === 2) {
    console.log('Your animal is a Tiger');
}
else if(year === 3) {
    console.log('Your animal is a Rabbit');
}
else if(year === 4) {
    console.log('Your animal is a Dragon');
}
else if(year === 5) {
    console.log('Your animal is a Snake');
}
else if(year === 6) {
    console.log('Your animal is a Horse');
}
else if(year === 7) {
    console.log('Your animal is a Goat');
}
else if(year === 8) {
    console.log('Your animal is a Monkey');
}
else if(year === 9) {
    console.log('Your animal is a Rooster');
}
else if(year === 10) {
    console.log('Your animal is a Dog');
}
else if (year === 11) {
    console.log('Your animal is a Pig');
}


