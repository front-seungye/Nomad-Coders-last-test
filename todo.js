const todoForm = document.querySelector("#todo-form");
const todoInuput = todoForm.querySelector("input");
const todoList = document.querySelector("#TodoList");
const allitemclear = document.querySelector(".all-clear")
let todoarray = [];


function saveToDos(){
    localStorage.setItem("ToDos",JSON.stringify(todoarray))
}

function TodoAllclear(){
    localStorage.removeItem("ToDos");
    const li = todoList.querySelectorAll("li:not(li:first-child)")
    li.forEach(item => item.remove())
}

function delteToDo(event){
    //console.log(event.target.parentElement.parentElement)
    const li = event.target.parentElement.parentElement;
    li.remove();
    todoarray = todoarray.filter(a => a.id !== parseInt(li.id));
    saveToDos();
}

function printToDos(Todoitem){
    const li = document.createElement("li");
    li.id = Todoitem.id;
    li.innerText = Todoitem.text
    
    const button = document.createElement("button");
    button.innerHTML = "<i class='xi-trash'></i>"
    button.addEventListener("click",delteToDo);
    li.appendChild(button);
    todoList.appendChild(li);
}

function ToDoSubmit(event){
    event.preventDefault();
    const newToDo = todoInuput.value;
    todoInuput.value = "";
    if(newToDo !== ""){
        const newTodoObj = {
            text : newToDo,
            id : Date.now(),
        } 
        todoarray.push(newTodoObj);
        printToDos(newTodoObj)
        saveToDos();
    }

}

todoForm.addEventListener("submit",ToDoSubmit);
allitemclear.addEventListener("click", TodoAllclear)

const savedToDos = localStorage.getItem("ToDos");

if(savedToDos !==null){
    const parsedToDos = JSON.parse(savedToDos);
    todoarray =parsedToDos;
    parsedToDos.forEach(item => printToDos(item))
}