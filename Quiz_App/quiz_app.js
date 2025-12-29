function dispApp(){
    document.querySelector(".app").style.display = "flex";
    document.querySelector(".start").style.display = "none";
    initQA();
}

questions =
[
    "Which animal is the heaviest animal in the world?",
    "Which is the tallest building in the world?",
    "who is the richest person in the world?",
    "Which cricket player is famously known as 'Thala?'"
];
options =
[
    {
        opt1: "Giraffe",
        opt2: "Elephant",
        opt3: "Blue Whale",
        opt4: "Killer Whale"
    },
    {
        opt1: "Empire State Building",
        opt2: "Burj Khalifa",
        opt3: "Petronas Towers",
        opt4: "Taj Mahal"
    },
    {
        opt1: "Jeff Bezos",
        opt2: "Warren Buffet",
        opt3: "Bill Gates",
        opt4: "Elon Musk"
    },
    {
        opt1: "Virat Kohli",
        opt2: "Rohit Sharma",
        opt3: "MS Dhoni",
        opt4: "AB de Villiers"
    }
];

const ansKey = ["Blue Whale", "Burj Khalifa", "Elon Musk", "MS Dhoni"];
let score = 0;

let i = 0;
let id;
let remainingTime = 10;

function initQA(){
    dispQuesAns();
    id = setInterval(dispQuesAns, 10000);
    setInterval(()=>{
        if(remainingTime <= 0){
            resetTimer();
        }
        remainingTime--;
        dispTimer();
    },1000)
}

questionsDisp = document.querySelector(".questions-disp");
optionsButton = document.querySelectorAll("#answers button");

function dispQuesAns(){
    if (i===questions.length){
        clearInterval(id);
        dispResult(score);
        return;
    }

    questionsDisp.innerHTML = questions[i];
    optionsButton[0].innerHTML = options[i].opt1;
    optionsButton[1].innerHTML = options[i].opt2;
    optionsButton[2].innerHTML = options[i].opt3;
    optionsButton[3].innerHTML = options[i].opt4;
    dispTimer();

    i++;
}

optionsButton.forEach((opt)=>{
    opt.addEventListener("click",()=>{
        resetInterval();
        resetTimer();
        checkResult(opt);
        dispQuesAns();
    });
})

function checkResult(opt){
    if (opt.innerHTML === ansKey[i-1]){
        score=score+1;
        console.log(score);
    }
}

function dispResult(score){
    document.querySelector(".app").style.display = "none";
    document.querySelector(".header").innerHTML = `score is: ${score} out of 4!`;
}

function resetInterval(){
    clearInterval(id);
    id = setInterval(dispQuesAns, 5000);
}

function dispTimer(){
    document.querySelector('.timer').innerHTML = `Time Remaining: ${remainingTime}`;
}

function resetTimer(){
    remainingTime = 10;
}