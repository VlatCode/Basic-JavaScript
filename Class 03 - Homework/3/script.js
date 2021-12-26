function cashWithdraw () {
    let accountBalance = 1000;
    let withdrawAmount = prompt('Please enter the amount you wish to withdraw');
    if (withdrawAmount <= 1000) {
        console.log('Please pick up your money!');
    } else if (withdrawAmount >= 1000) {
        console.log('You do not have enough money!');
    }

    let moneyLeft = accountBalance - withdrawAmount;
    if (withdrawAmount < accountBalance) {
    console.log('You withdrew ' + withdrawAmount + ' dollars.' + ' Your current balance is ' + moneyLeft + ' dollars.');
    }
}

cashWithdraw ();