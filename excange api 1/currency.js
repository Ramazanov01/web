class Currency{

    constructor(firstCurrency,secondCurrency){

        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.url = "https://open.er-api.com/v6/latest/";
        this.amount = null;
    }
    excange(){

        return new Promise ((resolve,reject) => {

            fetch(this.url + this.firstCurrency)
        .then(response => response.json())
        .then(data => {
            const parity = data.rates[this.secondCurrency];
            const amount2 = Number(this.amount);
            let total = parity * amount2;
            resolve(total);
            
        })
        .catch(err => reject(err));

        })
    }
    changeAmount(newamount){
        this.amount = newamount;
    }
    changeFirstcurrency(newfirstcurrency){
        this.firstCurrency = newfirstcurrency;
    }
    changeSecondcurrency(newSecondcurrency){
        this.secondCurrency = newSecondcurrency;
    }
}