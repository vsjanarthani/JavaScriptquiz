// Initializing DOM Elements
var startQuizEl = document.querySelector('.start');

// Event listener
startQuizEl.addEventListener('click', function() {
    var displayEl = document.getElementById("form");
    displayEl.classList.add("active");
});

