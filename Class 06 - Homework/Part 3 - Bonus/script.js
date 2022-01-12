// Ask the user for the name of the recipe
// Ask the user how many ingredients do we need for the recipe
// Ask the user for the name of every ingredient
// Print the name of the recipe in the HTML as heading element, ex: h1-h6
// Print all ingredients as an unordered list in the HTML
// Extra: Use a table if you want to be fancy :)

let recipeName = prompt('What is the name of your recipe?');
// Lasagna Recipe
console.log(recipeName);

let ingredientsNumber = prompt('How many ingredients do we need for the recipe?'); 
// 6
console.log(ingredientsNumber);

let ingredient1 = prompt('What is the first ingredient?'); 
// Boiled water
console.log(ingredient1);
let ingredient2 = prompt('What is the second ingredient?'); 
// Olive oil
console.log(ingredient2);
let ingredient3 = prompt('What is the third ingredient?'); 
// Lasagnas
console.log(ingredient3);
let ingredient4 = prompt('What is the fourth ingredient?');
// Minced meat
console.log(ingredient4);
let ingredient5 = prompt('What is the fifth ingredient?');
// Cheese
console.log(ingredient5);
let ingredient6 = prompt('What is the sixth ingredient?');
// Tomato Juice
console.log(ingredient6);

let recipe = document.getElementsByTagName('body')[0];
recipe.innerHTML = `<h1>${recipeName}</h1>`;

let allIngredients = document.getElementsByTagName('h1')[0];
allIngredients.innerHTML += `<ul>For this recipe, we will need ${ingredientsNumber} ingredients:</ul>`;

let ingredientsList = document.getElementsByTagName('ul')[0];
ingredientsList.innerHTML += `<li>${ingredient1}</li>`;
ingredientsList.innerHTML += `<li>${ingredient2}</li>`;
ingredientsList.innerHTML += `<li>${ingredient3}</li>`;
ingredientsList.innerHTML += `<li>${ingredient4}</li>`;
ingredientsList.innerHTML += `<li>${ingredient5}</li>`;
ingredientsList.innerHTML += `<li>${ingredient6}</li>`;

// Fail :/

// ingredientsList.innerHTML += 
// `<table style="width: 500px; border: 1px solid black">
//     <thead>
//         <tr>
//             <th colspan="2"></th>
//         </tr>
//     </thead>
//     <tbody>
//         <tr>
//             <td>
//                 <li>${ingredient1}</li>
//                 <li>${ingredient2}</li>
//                 <li>${ingredient3}</li>
//             </td>
//             <td>
//                 <li>${ingredient4}</li>
//                 <li>${ingredient5}</li>
//                 <li>${ingredient6}</li>
//             </td>
//         </tr>
//     </tbody>
// </table>`