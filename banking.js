// get input value from input field 
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldText = inputField.value;
    const inputAmount  = parseFloat(inputFieldText);
    // clear input field 
    inputField.value = '';
    return inputAmount;
}
// update total field 
function updateTotalField(inputFieldId, amount){
    const inputElement = document.getElementById(inputFieldId);
    const inputElementText = inputElement.innerText;
    const previousElementAmount = parseFloat(inputElementText);

    const totalAmount = previousElementAmount + amount;
    inputElement.innerText = totalAmount;
}
// get current balance 
function getCurrentBalance(){
    const totalBalance = document.getElementById('balance-total');
    const totalBalanceText = totalBalance.innerText;
    const previousBalance = parseFloat(totalBalanceText);

    return previousBalance;
}
// update balance 
function updateBalance(amount, isAdd){
    const totalBalance = document.getElementById('balance-total');
    const previousBalance = getCurrentBalance();

    if(isAdd == true){
        const totalUpdateBalance = previousBalance + amount;
        totalBalance.innerText = totalUpdateBalance;
    } else{
        const totalUpdateBalance = previousBalance - amount;
        totalBalance.innerText = totalUpdateBalance;
    }
}
// deposite button event handler
document.getElementById('deposite-button').addEventListener('click', function(){
    const depositeInput = getInputValue('deposite-input');
     if(depositeInput > 0){
        updateTotalField('deposite-total', depositeInput);
        updateBalance(depositeInput, true);
     }
    
});
// withdraw button event handler 
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if(withdrawInput > 0 && withdrawInput <= currentBalance){
        updateTotalField('withdraw-total', withdrawInput);
        updateBalance(withdrawInput, false);
    } else{
        alert('Please deposite your account!!');
    }
});























// // get value from input field 
// function getInuptValue(inputId) {
//     const inputValue = document.getElementById(inputId);
//     const inputValueText = inputValue.value;
//     const inputAmount = parseFloat(inputValueText);
//     // clear deposite input field 
//     inputValue.value = '';
//     // return input value 
//     return inputAmount;
// }
// // update field total 
// function updateInputTotal(inputFieldId, newInputAmount){
//     const totalElement = document.getElementById(inputFieldId)
//     const totalText = totalElement.innerText;
//     const previousTotal = parseFloat(totalText);

//     const totalUpdateAmout = previousTotal + newInputAmount;
//     totalElement.innerText = totalUpdateAmout;   
// }
// // get current balance ///---> just called and return 
// function getCurrentBalnce(){
//     const totalBalance = document.getElementById('balance-total');
//     const totalBalanceText = totalBalance.innerText;
//     const previousTotalBalance = parseFloat(totalBalanceText);
//     return previousTotalBalance;
// }
// // update balance 
// function updateBalance(newInputAmount, isAdd){
//     const totalBalance = document.getElementById('balance-total');
//     const previousTotalBalance = getCurrentBalnce();
//     if(isAdd == true){
//         const totalBalanceAmount = previousTotalBalance + newInputAmount;    
//         totalBalance.innerText = totalBalanceAmount;
//     } else{
//         const totalBalanceAmount = previousTotalBalance - newInputAmount;    
//         totalBalance.innerText = totalBalanceAmount;
//     }
// }
// // deposite and update balance 
// document.getElementById('deposite-button').addEventListener('click', function () {
//     // debugger;
//     const inputAmount = getInuptValue('deposite-input'); 
//     if(inputAmount > 0){
//         updateInputTotal('deposite-total', inputAmount);
//         updateBalance(inputAmount,true);
//     }
// });
// // withdraw and update balance 
// document.getElementById('withdraw-button').addEventListener('click', function () {
//     const withdrawInput = getInuptValue('withdraw-input');
//     const getCurrentBalance = getCurrentBalnce();
//     if(withdrawInput > 0 && withdrawInput <= getCurrentBalance){
//         updateInputTotal('withdraw-total', withdrawInput);
//         updateBalance(withdrawInput, false);
//     }
//     if(withdrawInput > getCurrentBalance){
//         alert("Please your account is low found!!");
//     }
// });
