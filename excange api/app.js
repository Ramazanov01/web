document.getElementById("change").addEventListener("click",change);

function change () {

    const xhr = new XMLHttpRequest();

    const url = `https://open.er-api.com/v6/latest/EUR`;

    xhr.open("GET",url);

    xhr.onload = function(){

        if(this.status) {
            const response = JSON.parse(xhr.responseText)
            const amount = response.rates.TRY;
            const amount1 = document.getElementById("amount").value;
            const tl = amount * Number(amount1);
            document.getElementById("tl").value = tl.toFixed(2)
        }
    }

    xhr.send();
}