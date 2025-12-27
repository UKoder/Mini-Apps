const timer = document.querySelector(".timer");
const startbtn = document.querySelector(".start-btn");
const stopbtn = document.querySelector(".stop-btn");
const resetbtn = document.querySelector(".reset-btn");
let isRunning = false;
let startTime = 0;
let elapsedTime = 0;
let id = null;

function start(){

    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        id = setInterval(update,10);
        isRunning = true;
    }
}

function stop(){
    if(isRunning){
        clearInterval(id);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset(){
    clearInterval(id);
    isRunning = false;
    startTime = 0;
    elapsedTime = 0;
    timer.innerHTML = "00:00:00:00";
}

function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    let hours = String(Math.floor(elapsedTime / (1000*60*60))).padStart(2,"0");
    let minutes = String(Math.floor((elapsedTime / (1000*60)) % 60)).padStart(2,"0");
    let seconds = String(Math.floor((elapsedTime / 1000) % 60)).padStart(2,"0");
    let milliseconds = String(Math.floor((elapsedTime % 1000)/10)).padStart(2,"0");

    timer.innerHTML = (`${hours}:${minutes}:${seconds}:${milliseconds}`);
}
