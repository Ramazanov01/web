function UI(){

}

UI.prototype.addFilmToUI = function(newfilm){

    /* <!-- <tr>
    <td><img src="" class="img-fluid img-thumbnail"></td>
    <td></td>
    <td></td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
  </tr> -->  */
  const filmlist = document.getElementById("films");
  filmlist.innerHTML += `
        <tr>
        <td><img src="${newfilm.url}" class="img-fluid img-thumbnail"></td>
        <td>${newfilm.title}</td>
        <td>${newfilm.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>
  `
}

UI.prototype.ClearInputs = function(element1,element2,element3){

    element1.value = "";
    element2.value = "";
    element3.value = "";
}

UI.prototype.DisplayMessage = function(message,type){

    const cardbody = document.querySelectorAll(".card-body")[0];
    // alert message 
    const div = document.createElement("div");
    div.className = `alert alert-${type}`;
    div.textContent = message;
    cardbody.appendChild(div);
    setTimeout(function(){
        div.remove();
    },1000);

}

UI.prototype.loadAllFilms = function(films){

    const filmlist = document.getElementById("films");

    films.forEach(film => {

        filmlist.innerHTML += `
            <tr>
            <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
            <td>${film.title}</td>
            <td>${film.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
            </tr>
        `;  
    });

}

UI.prototype.deleteFilmFromUI = function(element) {

    element.parentElement.parentElement.remove();
}

UI.prototype.clearAllFilmsFromUI = function(){

    const filmlist = document.getElementById("films");
    filmlist.innerHTML = "";
}