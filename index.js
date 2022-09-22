var topHeader = docuemnt.querySelector("#topheader");
var highScores = document.querySelector("#high-scores");
var time = document.querySelector("#time");
var displayPage = document.querySelector("#start-display-page")
var codingParagraph = document.querySelector("#codingQuizChallenge")
var StartBtn = document.querySelector("#startQuiz");

var questionsPage1 = document.querySelector("#questions");
var questionsPage2 = document.querySelector(".questions");
var promptedQuestions = document.querySelector("#promptedQuestion");

var buttons = document.querySelector(".buttonChoice");
var button1 = document.querySelector("#button1");
var button2 = document.querySelector("#button2");
var button3 = document.querySelector("#button3");
var button4 = document.querySelector("#button4");
var correcrOrWronf = document.querySelector("#correctOrWrong");

var submittionPage = document.querySelector("#submitScores");
var finalScore = document.querySelector("#finalScore");
var submitInitals = document.querySelector("#initials");
var submitInitialsBtn = document.querySelector("#submitInitialsBtn");


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