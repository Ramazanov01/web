const form = document.querySelector("#film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const secondcardbody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");

const ui = new UI();
const storage = new Storage();

eventListeners();

function eventListeners(){

    form.addEventListener("submit",addfilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films = storage.getItemFromStorage();
        ui.loadAllFilms(films);
    })
    secondcardbody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllfilms);
   
}

function clearAllfilms(e){

    if(confirm("Eminmisiniz...")){
        ui.clearAllFilmsFromUI();
        storage.clearAllFilmsFromStorage();
    }
}

function addfilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if(title === "" || director ==="" || url === ""){
        // hata
        ui.DisplayMessage("Tüm alanlari Doldurun...","danger");
    }

    else {
        // new film
        const newfilm = new Film(title,director,url);
        ui.addFilmToUI(newfilm);
        storage.addFilmToStorage(newfilm);
    }


    ui.ClearInputs(titleElement,directorElement,urlElement);

    e.preventDefault();
}

function deleteFilm(e){
    
    if(e.target.id === "delete-film"){

        ui.deleteFilmFromUI(e.target);
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        ui.DisplayMessage("Başariyla Silindi...","success");
    }
}