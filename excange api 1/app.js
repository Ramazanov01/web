const amount = document.getElementById("amount");
const firstSelect = document.getElementById("firstCurrency");
const secondSelect = document.getElementById("secondCurrency");
const currency = new Currency("USD","TRY");
const ui = new UI(firstSelect,secondSelect);

eventListeners();

function eventListeners(){

    amount.addEventListener("input",excangeCurrency);
    firstSelect.onchange = function(){
        currency.changeFirstcurrency(firstSelect.options[firstSelect.selectedIndex].textContent);
        ui.changeFirst();

    };
    secondSelect.onchange = function(){
        currency.changeSecondcurrency(secondSelect.options[secondSelect.selectedIndex].textContent);
        ui.changeSecond();
    };
}

function excangeCurrency(){
    currency.changeAmount(amount.value);
    currency.excange()
    .then(result => ui.display(result))
    .catch(err => console.log(err));
}