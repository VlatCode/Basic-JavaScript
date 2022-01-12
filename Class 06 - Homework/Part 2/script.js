let numbersArray = [2, 4, 6, 8, 10];

let myList = document.getElementById('list');

for (let number of numbersArray) {
    myList.innerHTML += `<li>${number}</li>`;
}

let sum = 0
for (i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i];
}

myList.innerHTML += `The sum of the numbers above equals to ${sum}.`;
myList.innerHTML += ` The result came from the following mathematical equation: ${numbersArray[0]} + ${numbersArray[1]} + ${numbersArray[2]} + ${numbersArray[3]} + ${numbersArray[4]}.`