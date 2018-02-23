// VARIABLES
//============================================================================================

var questions = [
    "How tall am I?",
    "How old am I?",
    "What color is my hair?",
    "What is my dog's name?",
    "Who is the best MLB team?"
];
var selectedQuestion = "";
// Variable to hold the index of current question.
var questionIndex = 0;
// Variable used for the setInterval/clearInterval
var showQuestion;
// Variable will keep track of the index of the currently displayed question
var count = 0;

//$("#random-button").click(startTrivia);

// FUNCTIONS
//============================================================================================

// Display question Function
function displayQuestion() {
    $("#question").html(questions[count]);
}

// Generate Next Question Function
function nextQuestion() {
    count++;
    $("#question").html("<img src = 'assets/images/loading.gif' width='100px'>");
    setTimeout(displayQuestion, 1000);
    if (count === questions.length) {
        count = 0;
        stopTrivia();
    }

    // If there are still more questions, render the next one.
    //if (questionIndex <= (questions.length -1)) {
    //    $("#question").text(questions[questionIndex].question);
    //}

    // If there arent any more questions, render game over.
    //else {
    //    console.log("GAME OVER SCREEN");
    //}
}

// Start Game Function
function startTrivia() {
    showQuestion = setInterval(nextQuestion, 5000);
}

// Stop Game Function
function stopTrivia() {
    clearInterval(showQuestion);

}


// MAIN PROCESS
//============================================================================================

$(document).ready(function() {

    //displayQuestion();
    //nextQuestion();
    startTrivia();

});