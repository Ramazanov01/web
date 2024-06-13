const from = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todolist =document.querySelector(".list-group");
const firstcardbody = document.querySelectorAll(".card-body")[0];
const secondcardbody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners();

function eventListeners(){

    form.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded",loadAllTodosToUI);
    secondcardbody.addEventListener("click",deleteTodo);
    filter.addEventListener("keyup",filterTodos);
    clearButton.addEventListener("click",clearAllTodos);
}

function clearAllTodos(e){

    if(confirm("Tümünü silmek istediginize eminmisiniz...?")) {

        todolist.innerHTML = "";
        localStorage.removeItem("todos");
    }
}

function filterTodos(e){

    const filtervalue = e.target.value.toLowerCase();
    const listitems = document.querySelectorAll(".list-group-item");
    listitems.forEach(function(listitem){
        const text = listitem.textContent.toLocaleLowerCase();
        if(text.indexOf(filtervalue) === -1){
            listitem.setAttribute("style","display : none !important");
        }
        else {
            listitem.setAttribute("style","display : block");
        }
    })
}

function deleteTodo(e){

    if(e.target.className === "fa fa-remove"){

        e.target.parentElement.parentElement.remove();
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
        showAlert("success","Todo Başariyla Silindi");
    }
}

function deleteTodoFromStorage(deleteTodo){

    let todos = gettodosfromstorage();
    todos.forEach(function(todo,index){
        if(todo === deleteTodo){
            todos.splice(index,1);
        }
        localStorage.setItem("todos",JSON.stringify(todos));
    })


}

function loadAllTodosToUI(){

    let todos = gettodosfromstorage();
    todos.forEach(function(todo){

        addTodoToUI(todo);
        
    });
}

function addTodo(e){

    const newtodo = todoInput.value.trim();
    let a = 0;

    if(newtodo === ""){
        showAlert("danger","Lütfen bir todo girin...");
        a = 1;
    }
    else {
        let todos = gettodosfromstorage();
        todos.forEach(function(todo){
            if (todo === newtodo){
                a = 1;
                showAlert("warning","Ayni todo  listede mevcut yeni todo girin...");
                todoInput.value = "";
            }
        });
        localStorage.setItem("todos",JSON.stringify(todos));
    }
     if(a === 0){
        addTodoToUI(newtodo);
        addTodoToStorage(newtodo);
        showAlert("success","Todo başariyla eklendi...");
    }

    e.preventDefault();
}

function gettodosfromstorage(){

    let todos;

    if (localStorage.getItem("todos") === null){
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}

function addTodoToStorage(newtodo){

    let todos = gettodosfromstorage();
    todos.push(newtodo);

    localStorage.setItem("todos",JSON.stringify(todos));

    
}

function showAlert(type,text){

    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = text;
    console.log(alert);
    firstcardbody.appendChild(alert);

    setTimeout(function(){
        alert.remove();
    },1000);
  

}

function addTodoToUI(newtodo){

    /* <li class="list-group-item d-flex justify-content-between">
                            Todo 1
                            <a href = "#" class ="delete-item">
                                <i class = "fa fa-remove"></i>
                            </a>

                        </li> */
    // list oluşdurma

    const listitem = document.createElement("li");
    listitem.className = "list-group-item d-flex justify-content-between";

    // link oluşdurma 

    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>"

    listitem.appendChild(document.createTextNode(newtodo));
    listitem.appendChild(link);

    // todo liste listitem ekleme 

    todolist.appendChild(listitem);
    todoInput.value = "";
}