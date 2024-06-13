function Storage (){

}

Storage.prototype.addFilmToStorage = function(newfilm){
    
    let films = this.getItemFromStorage();
    
    films.push(newfilm);

    localStorage.setItem("films",JSON.stringify(films));

}

Storage.prototype.getItemFromStorage = function(){

    let films;

    if (localStorage.getItem("films") === null){
        films = [];
    }
    else {
        films = JSON.parse(localStorage.getItem("films"));
    }

    return films;
}

Storage.prototype.deleteFilmFromStorage = function(filmtitle){

    let films = this.getItemFromStorage();

    films.forEach(function(film,index){

        if (film.title === filmtitle){

            films.splice(index,1);
        }
        
    });

    localStorage.setItem("films",JSON.stringify(films));
}

Storage.prototype.clearAllFilmsFromStorage = function(){

    localStorage.removeItem("films");
}