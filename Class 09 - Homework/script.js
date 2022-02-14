$(document).ready(function() {

    let myBtn = document.getElementById('myBtn');
    let input = myBtn.previousElementSibling;

    function printText () {
        let header = document.createElement("h1");
        header.innerText = input.value;
        document.body.appendChild(header);
        input.value = '';
    }

    myBtn.addEventListener('click', printText);

})