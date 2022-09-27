var topHeader = document.querySelector("#topheader");
var highScores = document.querySelector("#high-scores");
var displayPage = document.querySelector("#startdisplaypage")
var codingParagraph = document.querySelector("#codingQuizChallenge")
var StartBtn = document.querySelector("#startGame");
var choicesEl = document.querySelector(".choices");
var choicesElAll = document.querySelectorAll(".buttonChoice");

var questionsPage1 = document.querySelector("#questions");
var questionsPage2 = document.querySelector(".questions");
var promptedQuestions = document.querySelector("#promptedQuestion");
var allDone = document.querySelector("#allDone");
var enterInitals = document.querySelector("#enterInt");
var HS = document.querySelector("#HS");


//var buttons = document.querySelector(".buttonChoice");
var button1 = document.querySelector("#button1");
var button2 = document.querySelector("#button2");
var button3 = document.querySelector("#button3");
var button4 = document.querySelector("#button4");
var correcrOrWrong = document.querySelector("#correctOrWrong");

var submittionPage = document.querySelector("#submitScores");
var finalScore = document.querySelector("#finalScore");
var submitInitals = document.querySelector("#initials");
var submitInitialsBtn = document.querySelector("#submitInitialsBtn");

var highScorePage = document.querySelector("#highscore");
var scoreHistory = document.querySelector("#scoreHistory");
var checkScore = document.querySelector("#checkScore");
var backBtn = document.querySelector("#back");
var clearBtn = document.querySelector("#clear");



var setOfQuestions = [

    {
        question: "Question 1: String value must be enclosed within _____ when being assigned to variables.",
        choices: ["a. commas", "b. curly brackets", "c. quotes", "d. parenthesis"],
        answer: "c"
    },
    {
        question: "Question 2: commonly used data types DONT include:",
        choices: ["a. strings", "b. booleans", "c. alerts", "d. numbers"],
        answer: "c"
    },
    {
        question: "Question 3: How do you create a function in JavaScript",
        choices: ["a. function = myFunction()", "b. function myFunction()", "c. function:myFunction()", "d. createMyFunction()"],
        answer: "b"
    },
    {
        question: "Question 4: How do you call a function named myFunction",
        choices: ["a. call myFunction()", "b. call function myFunction()", "c. myFunction()", "d. myFunction"],
        answer: "c"
    },
    {
        question: "Question 5: To see if two variables are qual in an if / else statement you would use _____",
        choices: ["a. =", "b. ==", "c. 'equals", "d. !="],
        answer: "b"
    },
    {
        question: "Question 6: The first index of an array is _____",
        choices: ["a. 0", "b. 1", "c. 8", "d. any"],
        answer: "a"
    },
    {
        question: "Question 7: How to write an IF statement in JavaScript",
        choices: ["a. if i == 5 then", "b. if i = 5 then", "c. if(i == 5)", "d. if i =5"],
        answer: "c"
    },
    {
        question: "Question 8: Which event occurs when the user clicks on an HTML element",
        choices: ["a. onlcick", "b. onchange", "c. onmouseover", "d. onmouseclick"],
        answer: "a"
    }
];

choicesEl.style.display = "none";
promptedQuestions.style.display ="none";
finalScore.style.display = "none";
submitInitals.style.display = "none";
allDone.style.display = "none";
enterInitals.style.display = "none";
HS.style.display = "none";
var time = document.getElementById("time");
var timeleft = 60;
var questionNum = 0;
var score = 0;
var questionCnt =  0;

function countdownTime() {
    var timeInt = setInterval(function () {

        timeleft--;
        time.textContent = "Time left " + timeleft;

        if (timeleft <= 0) {
            clearInterval(timeInt);
            time.textContent = "Your time is up!";
            gameEnd();
        }



    },1000);
}

StartBtn.addEventListener("click", function () {
    displayPage.style.display = "none";
     questionsPage1.style.display = "block";
    questionsPage2.style.display = "block";
     choicesEl.style.display = "block";
    promptedQuestions.style.display = "block";
    finalScore.style.display = "none";
    submitInitals.style.display = "block";
    questionNum = 0
    countdownTime();
    displayQuestion(questionNum);
});

function displayQuestion (n) {
    promptedQuestions.textContent = setOfQuestions[n].question;
    button1.textContent = setOfQuestions[n].choices[0];
    button2.textContent = setOfQuestions[n].choices[1];
    button3.textContent = setOfQuestions[n].choices[2];
    button4.textContent = setOfQuestions[n].choices[3];
    questionNum = n;
    
}

function chkIfCorrect(event) {
    correcrOrWrong.style.display = "block";
    setTimeout(function() {
        correcrOrWrong.style.display = 'none';
    },1000)

    if (setOfQuestions[questionNum].answer == event.target.value) {
        correcrOrWrong.textContent = "Correct";
        score++;
    } else {
        timeleft = timeleft - 10;
        correcrOrWrong.textContent = "Wrong, The correct answer is " + setOfQuestions[questionNum].answer;}
     if (questionNum < setOfQuestions.length -1) {
        displayQuestion(questionNum +1);
    } else {
        gameEnd();
    }
questionCnt++;
};

function gameEnd () {
    submitInitals.style.display = "block";
    allDone.style.display = "block";
    finalScore.style.display = "block";
    enterInitals.style.display = "block";
    HS.style.display = "none";
    questionsPage1.style.display = "none";
    questionsPage2.style.display = "none";
    submitScores.style.display = "block";
    finalScore.textContent = "congrats your final score is: " + score;
    time.style.display = "none";
}; 
// function grabScores () {
//     var lst = localStorage.getItem("listOfScores");
//     if (lst !== ""){
//         newlst = JSON.parse(lst);
//         return newlst;
//     } else {
//         newlst = [];
//     }
//     return newlst;
// }; 

function grabScores () {
    var lst = JSON.parse(localStorage.getItem("scores")) || [];
    return lst;
};
function displayScore (initials, score) {
    scoreHistory.style.display = "block";
    scoreHistory.innerHTML = "";
 
    var sortScores = sort();
    var five = sortScores.slice(0,5);
    for (var i =0; i < five.length; i++);
    var item = five[i];
    var li = document.createElement("li");
    li.textContent = initials + " " + score;
    li.setAttribute("index", i);
    scoreHistory.appendChild(li);
};
function sort () {
    var unsorted = grabScores();
    if (grabScores == ""){
        return;
    } else {
        unsorted.sort(function(a,b) {
            return b.score - a.score;
        })
        return unsorted;
    }
};
function addToLocal (n) {
    var addToList = grabScores();
    addToList.push(n);
    localStorage.setItem("Scores", JSON.stringify(addToList));
};
function saveTheScore (){
    var scoreforlocal ={
        Initial: submitInitals.value,
        score: score
    }
    addToLocal(scoreforlocal);
    displayScore(submitInitals.value, score);
};



StartBtn.addEventListener("click", chkIfCorrect);
choicesEl.onclick = chkIfCorrect;
submitInitialsBtn.addEventListener("click", function(event) {
    event.preventDefault();
    questionsPage1.style.display = "none";
    questionsPage2.style.display = "none";
    displayPage.style.display = "none";
    submitScores.style.display = "none";
 
    saveTheScore();
});
checkScore.addEventListener("click", function(event){
event.preventDefault();
highScorePage.style.display = "block";
questionsPage1.style.display = "none";
questionsPage2.style.display = "none";
displayPage.style.display = "none";
submitScores.style.display = "none";
scoreHistory.style.display = "block";
displayScore (initials, score);

displayScore();
});
backBtn.addEventListener("click", function(event){
    event.preventDefault();
    localStorage.clear();
})