//Ensuring that the DOM has been loaded
//Add event listener for the button
document.addEventListener('DOMContentLoaded', function () {


    document.getElementById('amount-entered').addEventListener('input', toConvert);
    document.getElementById('convertTo').addEventListener('input', selectCurrency);
    document.getElementById('convert').addEventListener('click', calculateCurrency);

});

// //Capture amount entered
function toConvert() {
    let amount1 = document.getElementById('amount-entered').value;
    return amount1;
}
//Capture the currency selected
function selectCurrency() {
    let amount2 = document.getElementById('convertTo').value;
    return amount2;

}

//Calculate new rate
function calculateCurrency() {
    let amount1 = toConvert();
    let amount2 = selectCurrency();

    let getResult = amount1 * amount2;
    getResult.toFixed(2);

    document.getElementById('converted-amount').value = getResult;
}


