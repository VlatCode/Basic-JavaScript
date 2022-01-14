// CREATE A DYNAMIC TABLE
// Write a Javascript function that will dynamically create a table
// User should input the number of Colums and Rows
// In every table cell print which row and column it is (ex. Row-3 Column-1)
// Don't forget to use google! :)

let inputOne = document.getElementById('firstInput');
let inputTwo = document.getElementById('secondInput');
let myTable = document.getElementById('tableContainer');
let myBtn = document.getElementById('myBtn');

var tbl = document.createElement('table');
tbl.style.width = '100%';
tbl.style.border = '1px solid black';

function displayRows (rowNumber, columnNumber) {
    for (var i = 0; i < rowNumber; i++) {
        var tr = document.createElement('tr');
            
        for (var j = 0; j < columnNumber; j++) {
            var td = document.createElement('td');

            td.appendChild(document.createTextNode(`Row-${[i]} Column-${[j]}`));
            tr.appendChild(td);
            tbl.appendChild(tr);
            td.style.border = '1px solid black';
            tr.style.border = '1px solid black';
        }
    }
    myTable.appendChild(tbl);
}

myBtn.addEventListener('click', function() {
    let inputRow = inputOne.value;
    let inputColumn = inputTwo.value;
    displayRows(inputRow, inputColumn);

    inputOne.value = '';
    inputTwo.value = '';
});
