/* const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function loginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    painGreetings();

}

function painGreetings() {
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", loginSubmit);
} else {
    painGreetings();
}

loginForm.addEventListener("submit", loginSubmit); */

/* 03/22/2022: Review 30 minutes */

const loginForm = document.querySelector("#login-form");  // login-form select
const loginInput = document.querySelector("#login-form input") // # select
const greeting = document.querySelector("#greeting"); //# select

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function loginSubmit(event) {
    event.preventDefault(); // Control any event
    loginForm.classList.add(HIDDEN_CLASSNAME);  // Add login class (hidden) 
    localStorage.setItem(USERNAME_KEY, loginInput.value); // Input data for DB
    painGreetings();
}

function painGreetings() {
    const username = localStorage.getItem(USERNAME_KEY);  // get the username
    greeting.innerText = `Hello ${username}`; // print user
    greeting.classList.remove(HIDDEN_CLASSNAME); // remove hidden
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME); // you type the data
    loginForm.addEventListener("submit", loginSubmit); // Submit the data
} else {
    painGreetings();
}



loginForm.addEventListener("submit", loginSubmit); // Create submit event listener