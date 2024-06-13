class UI {

    constructor(firstselect,secondselect){
        this.firstselect = firstselect;
        this.secondselect = secondselect;

        this.outputFirst = document.getElementById("outputFirst");
        this.outputSecond = document.getElementById("outputSecond");
        this.outputResult = document.getElementById("outputResult");
    }
    changeFirst(){
        this.outputFirst.textContent = this.firstselect.options[this.firstselect.selectedIndex].textContent;
    }
    changeSecond(){
        this.outputSecond.textContent = this.secondselect.options[this.secondselect.selectedIndex].textContent;
    }
    display(result){
        this.outputResult.value = result;
    }
}