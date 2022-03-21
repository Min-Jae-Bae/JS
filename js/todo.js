const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); // Get your element select in toDoForm (you input value);
const toDoList = document.getElementById("todo-list");

let toDos = []; // creaete let array

const TODOS_KEY = "todos";
function toDoSave() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // JSON.stringify : make string
}



function buttonClick(event) { // click event
    const li = event.target.parentElement;
    li.remove();
}


function createToDo(newTodo) {
    const li = document.createElement("li");  // Create li elemnent
    const span = document.createElement("span");
    span.innerText = newTodo.text;   // span add in text
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", buttonClick); // eventlistenr add click
    li.appendChild(span);   // span appen of li
    li.appendChild(button);
    toDoList.appendChild(li);

}


function handleToDoSubmit(event) { /// submit event
    event.preventDefault(); // No start any event
    const newTodo = toDoInput.value;  // To store Input value in variable
    toDoInput.value = "";   // Input value empty
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    createToDo(newTodoObj);
    toDoSave();
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY)

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos); //
    toDos = parsedToDos; // empty to do copy
    parsedToDos.forEach(createToDo); // start item fucmtion

}