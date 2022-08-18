// Depsit and With Draw Amount

function depostiAndWithdrawInnerText (amount){
    const getAmount = document.getElementById(amount);
    const outPutValue = getAmount.innerText;
    const outValue =  parseFloat(outPutValue);

    return outValue;
}

function depostiAndWithdrawValue (amount){
    const getAmount = document.getElementById(amount);
    const outPutValue = getAmount.value;
    getAmount.value = '';
    return parseFloat(outPutValue);
}

document.getElementById('depositHandler').addEventListener('click', function(){
    const getdiposittext = document.getElementById('depositTotalAmount');
    const setDepositText = depostiAndWithdrawInnerText ('depositTotalAmount');
    const setDepositValue = depostiAndWithdrawValue ('depositAmount');
    const totalAmount = document.getElementById('totalAmount');
    const getTotalAmount = totalAmount.innerText;
    const numberValue = parseFloat(getTotalAmount);
    if(isNaN(setDepositValue) && setDepositValue <= 0){
        return;
    }


    const finalDipositOutput = setDepositText + setDepositValue;
    getdiposittext.innerText = finalDipositOutput;
    const finalOutput = setDepositValue + numberValue;
    totalAmount.innerText = finalOutput;
});

document.getElementById('withDrawHandler').addEventListener('click', function(){
    const getdiposittext = document.getElementById('withDrawTotalAmount');
    const setWithDrawText = depostiAndWithdrawInnerText ('withDrawTotalAmount');
    const setWithDrawValue = depostiAndWithdrawValue ('withDrawAmount');
    const totalAmount = document.getElementById('totalAmount');
    const getTotalAmount = totalAmount.innerText;
    const numberValue = parseFloat(getTotalAmount);
    if(isNaN(setWithDrawValue) && setWithDrawValue <= 0){
        return;
    }

    const finalWithDrawOutput = setWithDrawText + setWithDrawValue;
    getdiposittext.innerText = finalWithDrawOutput;
    const finalOutput = numberValue - setWithDrawValue;
    totalAmount.innerText = finalOutput;
})