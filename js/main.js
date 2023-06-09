document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const DepostieAmount = parseFloat(newDepositAmountString);
    depositField.value ='';
    const depositeTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositeTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    const total = DepostieAmount + previousDepositTotal;
    depositeTotalElement.innerText = total;

    //get the main balance 
    const mainbalancefiled = document.getElementById('balance-total');
    const newmainbalancefiledstring = mainbalancefiled.innerText;
    const newmainbalancefiled = parseFloat(newmainbalancefiledstring);
    const newbalance = newmainbalancefiled + DepostieAmount;
    mainbalancefiled.innerText = newbalance;
})

document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newwithdrawAmountString = withdrawField.value;
    const newwithdrawAmount = parseFloat(newwithdrawAmountString);
    withdrawField.value = '';
    const previouswithdraw = document.getElementById('withdraw-total');
    const previouswithdrawstring = previouswithdraw.innerText;
    const previouswithdrawtotal = parseFloat(previouswithdrawstring);
    const totalwithdraw = previouswithdrawtotal + newwithdrawAmount;
    previouswithdraw.innerText = totalwithdraw;

    const mainbalancefiled = document.getElementById('balance-total');
    const newmainbalancefiledstring = mainbalancefiled.innerText;
    const newmainbalancefiled = parseFloat(newmainbalancefiledstring);
    const newbalance = newmainbalancefiled - newwithdrawAmount;
    mainbalancefiled.innerText = newbalance;


})