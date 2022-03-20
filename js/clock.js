/* const clock = document.querySelector("#clock");


function GetClock() {
    const date = new Date();
    clock.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

GetClock();
setInterval(GetClock, 1000); */


// 3/20/2022: Review

const clock = document.querySelector("#clock");   // Select clock

function GetClock() {
    const date = new Date(); // Create date
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds= String(date.getSeconds()).padStart(2, "0");
    clock.innerHTML = `${hours}:${minutes}:${seconds}`; // 00:00:00
}

GetClock(); // Start
setInterval(GetClock, 1000); // After 1 Second start