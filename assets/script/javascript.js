// Initializing DOM Elements & variables
const startQuizEl = document.querySelector('.start');
const questionEl = document.getElementById('question-display');
const optionOneEl = document.getElementById('Button1');
const optionTwoEl = document.getElementById('Button2');
const optionThreeEl = document.getElementById('Button3');
const optionFourEl = document.getElementById('Button4');
var timeValueEl = document.getElementById('timervalue');
var divEl = document.querySelector('.user-answer');
var h2El = document.querySelector('.show-result');

var shuffledQues, currentIndex;
var score;


// creating an array of questions, answers and options
var questions = [
    {
        slNo: 1,
        question: "Commonly used date types DO Not Include:",
        button1: "1. strings",
        button2: "2. booleans",
        button3: "3. alerts",
        button4: "4. numbers",
        answer: "3. alerts",
    },
    {
        slNo: 2,
        question: "The condition in an if/else statement is enclosed with_______.",
        button1: "1. quotes",
        button2: "2. curly brackets",
        button3: "3. parenthesis",
        button4: "4. square brackets",
        answer: "2. curly brackets",
    },
    {
        slNo: 3,
        question: "Arrays in JavaScript can be used to store______.",
        button1: "1. numbers and strings",
        button2: "2. other arrays",
        button3: "3. booleans",
        button4: "4. all of the above",
        answer: "4. all of the above",
    },
    {
        slNo: 4,
        question: "String values must be enclosed within _____ when being assigned to variables.",
        button1: "1. commas",
        button2: "2. curly brackets",
        button3: "3. quotes",
        button4: "4. parenthesis",
        answer: "3. quotes",
    },
    {
        slNo: 5,
        question: "What is the scope of a variable that is declared using ‘let’ keyword inside a function:",
        button1: "1. global scope",
        button2: "2. function scope",
        button3: "3. no scope",
        button4: "4. block scope", 
        answer: "4. block scope", 
    },
    {
        slNo: 6,
        question: "A very useful tool used during developing and debugging for printing content to the debugger is:",
        button1: "1. javascript",  
        button2: "2. terminal/bash",
        button3: "3. for loops",
        button4: "4. console.log",  
        answer: "4. console.log",
    }   
]

// Start Quiz function
startQuizEl.addEventListener('click', function() {
    var displayEl = document.getElementById("form");
    displayEl.classList.add("active");
    shuffledQues = questions.sort(() => Math.random() - .5);
    currentIndex = 0;
    startTimer();
    nextQuiz();
   
});

// function to display timer
var timeLeft = 60;
var timer;
function startTimer() {
timer = setInterval(() => {
    if (timeLeft <= 0) {
        console.log("time ran out");
        return;
    } else {
        timeLeft--;
        timeValueEl.textContent = timeLeft;
    }
}, 1000); 
}    

// Function to set next question
function nextQuiz() {
    displayQuiz(shuffledQues[currentIndex]);
    verifyAns();  
}

// function to display next question
function displayQuiz(question) {
    questionEl.innerText = question.question;
    optionOneEl.textContent = question.button1;
    optionTwoEl.textContent = question.button2;
    optionThreeEl.textContent = question.button3;
    optionFourEl.textContent = question.button4;    
}

// Function to verify answer
function verifyAns() {
    document.getElementById('answer-display').addEventListener('click', event => {
        if (event.target.classList == "choice") {
            userAns = event.target.textContent;
            // Verifying if user answer is equal to answer in the array with the index of current index
            if (userAns === questions[currentIndex].answer) {
                divEl.classList.add("show");
                h2El.textContent = "Correct!"
                console.log("this is the correct answer", userAns);
            } else {
                divEl.classList.add("show");
                h2El.textContent = "Wrong!"
                timeLeft = timeLeft - 10;
                console.log("This is wrong answer", userAns);
            }
        }
        currentIndex++;
        nextQuiz();
    });
}

