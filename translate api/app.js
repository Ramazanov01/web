addEventListener();

function addEventListener(){
    document.getElementById("translate-form").addEventListener("submit",Translateword);
    document.getElementById("language").onchange = function(){
        // ara yüz işlemleri
        ui.changeUI();

    }

}

const Translate2 = new Translate1(document.getElementById("word").value,document.getElementById("language").value);
const ui = new UI();

function Translateword(e){

    Translate2.changeParameters(document.getElementById("word").value,document.getElementById("language").value);
    Translate2.Translateword(function(err,resp){

        if(err) {
            console.log(err);
        }
        else {
            ui.displayTranslate(resp);
        }

    });
    e.preventDefault();
}