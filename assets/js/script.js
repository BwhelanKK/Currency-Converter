//Ensuring that the DOM has been loaded
//Add event listener for the button
document.addEventListener('DOMContentLoaded', function () {


    let convert = toConvert();
    let exchange = selectCurrency();
    let final = calculateCurrency();

    document.getElementById('amount-entered').addEventListener('keyup', toConvert);
    document.getElementById('convertTo').addEventListener('change', selectCurrency);

});

// //Capture amount entered
function toConvert() {
    let amount = document.getElementById('amount-entered').value;
    return amount;
}

//Capture the currency selected
function selectCurrency() {
    let rate = document.getElementById('convertTo');
    return rate;
}

//Calculate new rate
function calculateCurrency() {
    let amount = document.getElementById('amount-entered').value;
    let rate = document.getElementById('convertTo');

    let conversion = amount * rate;
    return conversion;
}
function displayText() {
    var text = document.getElementById("textField");
    text.style.display = "block";
}


