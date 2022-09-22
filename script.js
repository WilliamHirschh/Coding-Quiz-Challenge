var topHeader = document.querySelector("#topheader");
var highScores = document.querySelector("#high-scores");
var displayPage = document.querySelector("#startdisplaypage")
var codingParagraph = document.querySelector("#codingQuizChallenge")
var StartBtn = document.querySelector("#startGame");

var questionsPage1 = document.querySelector("#questions");
var questionsPage2 = document.querySelector(".questions");
var promptedQuestions = document.querySelector("#promptedQuestion");

var buttons = document.querySelector(".buttonChoice");
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


var time = document.getElementById("time");
var timeleft = 60;
var questionNum = 0;
var score = 0;
var questionCnt =  1;

function countdownTime() {
    var timeInt = setInterval(function () {

        timeleft--;
        time.textContent = "Time left " + timeleft;

        if (timeleft <= 0) {
            clearInterval(timeInt);
            time.textContent = "Your time is up!";

        }



    },1000);
}

StartBtn.addEventListener("click", function () {
    displayPage.style.display = "none";
    questionsPage1.style.display = "block";
    uestionsPage2.style.display = "block";
    questionNum = 0
    countdownTime();
});

//function startgame () {
   // displayPage.style.display = "none";
    //questionsPage1.style.display = "block";
    //questionNum = 0
    //countdownTime();
    //displayQuestion(questionNum);
//}

function displayQuestion (n) {
    promptedQuestions.textContent = setOfQuestions[n].question;
    button1.textContent = setOfQuestions[n].choices[0];
    button2.textContent = setOfQuestions[n].choices[1];
    button3.textContent = setOfQuestions[n].choices[2];
    button4.textContent = setOfQuestions[n].choices[3];
    questionNum = n;
}

function chkAnswer (event) {
    event.preventDefault();
    correcrOrWrong.style.display = "block";
    setTimeout(function() {
        correcrOrWrong.style.display = 'none';
    },1000)
}
