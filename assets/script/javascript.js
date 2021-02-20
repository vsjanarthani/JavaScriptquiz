// Initializing DOM Elements & variables
const startQuizEl = document.querySelector('.start');
const questionEl = document.getElementById('question-display');
const optionOneEl = document.getElementById('Button1');
const optionTwoEl = document.getElementById('Button2');
const optionThreeEl = document.getElementById('Button3');
const optionFourEl = document.getElementById('Button4');

var shuffledQues, currentIndex;

// creating an array of questions, answers and options
var questions = [
    {
        slNo: 1,
        question: "Commonly used date types DO Not Include:",
        button1: "1. strings",
        button2: "2. booleans",
        button3: "3. alerts",
        button4: "4. numbers",
    },
    {
        slNo: 2,
        question: "The condition in an if/else statement is enclosed with_______.",
        button1: "1. quotes",
        button2: "2. curly brackets",
        button3: "3. parenthesis",
        button4: "4. square brackets",
    },
    {
        slNo: 3,
        question: "Arrays in JavaScript can be used to store______.",
        button1: "1. numbers and strings",
        button2: "2. other arrays",
        button3: "3. booleans",
        button4: "4. all of the above",
    },
    {
        slNo: 4,
        question: "String values must be enclosed within _____ when being assigned to variables.",
        button1: "1. commas",
        button2: "2. curly brackets",
        button3: "3. quotes",
        button4: "4. parenthesis",
    },
    {
        slNo: 5,
        question: "What is the scope of a variable that is declared using ‘let’ keyword inside a function:",
        button1: "1. global scope",
        button2: "2. function scope",
        button2: "3. no scope",
        button4: "4. block scope", 
    },
    {
        slNo: 6,
        question: "A very useful tool used during developing and debugging for printing content to the debugger is:",
        button1: "1. javascript",  
        button2: "2. terminal/bash",
        button3: "3. for loops",
        button4: "4. console.log",  
    }   
]

// Start Quiz function
startQuizEl.addEventListener('click', function() {
    var displayEl = document.getElementById("form");
    displayEl.classList.add("active");
    shuffledQues = questions.sort(() => Math.random() - .5);
    currentIndex = 0;
    nextQuiz();
});

// Function to set next question
function nextQuiz() {
    displayQuiz(shuffledQues[currentIndex]);
}

// function to display next question
function displayQuiz(question) {
    questionEl.innerText = question.question;
    optionOneEl.textContent = question.button1;
    optionTwoEl.textContent = question.button2;
    optionThreeEl.textContent = question.button3;
    optionFourEl.textContent = question.button4;    
}
        
 
