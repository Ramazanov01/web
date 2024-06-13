function Translate1(word,language){
    this.word=word;
    this.language=language;
    
    this.xhr = new XMLHttpRequest;

}

Translate1.prototype.Translateword = function(callback){

    const endpoint = `https://api.mymemory.translated.net/get?q=${this.word}&langpair=tr|${this.language}`

    this.xhr.open("GET",endpoint,true);

    this.xhr.onload = () => {
        if(this.xhr.status === 200){
            const json = JSON.parse(this.xhr.responseText);
            const text = json.responseData.translatedText;
            callback(null,text);
        }else {
            callback("bir hata oluşdu",null);  
        }

    }
    this.xhr.send();
}

Translate1.prototype.changeParameters = function(newword,newlanguage) {
    this.word = newword;
    this.language = newlanguage;
}