let newHeaderOne = document.getElementById('myTitle');
newHeaderOne.innerText = 'This is now the new header!';
newHeaderOne.style.backgroundColor = 'cyan';

let firstParagraph = document.getElementsByClassName('paragraph')[0];
console.log(firstParagraph);
firstParagraph.innerText = 'Changed this through JS, just like the header above.';
firstParagraph.style.color = 'cyan';
firstParagraph.style.backgroundColor = 'black';

let secondParagraph = document.querySelector('.second');
console.log(secondParagraph);
secondParagraph.innerText = 'This DOM thing';
secondParagraph.style.fontWeight = 'bold';
secondParagraph.style.backgroundColor = 'cyan';

let newText = document.getElementsByTagName('text')[0];
console.log(newText);
newText.innerText = 'Just got more interesting';
newText.style.fontSize = '50px';
newText.style.color = 'cyan';
newText.style.backgroundColor = 'black';

let lastDiv = document.getElementsByTagName('div')[2];
console.log(lastDiv);
let headerOne = lastDiv.firstElementChild;
console.log(headerOne);
headerOne.innerText = 'It said "This should be changed", so here we go:'
headerOne.style.fontSize = '20px';
headerOne.style.backgroundColor = 'cyan';

let headerThree = headerOne.nextElementSibling;
console.log(headerThree);
headerThree.innerText = 'I started understanding the DOM'
headerThree.style.fontSize = '50px'
headerThree.style.color = 'cyan';
headerThree.style.backgroundColor = 'black';