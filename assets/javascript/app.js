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

// Variable will keep track of the index of the currently displayed question
var count = 0;

var time = 0;

var number = 6;

// Variable used for the setInterval/clearInterval
var intervalId;

$("#random-button").on("click", run);

//$("#random-button").click(startTrivia);

// FUNCTIONS
//============================================================================================

// Function sets an interval that runs the decrement function once a second
function run() {
    displayQuestion();
    intervalId = setInterval(decrement, 1000);
}

// Function to determine the countdown decrement
function decrement() {
    number--;
    console.log(number);
    $("#display").html("<h1>" + number + "</h1>");
    if (number === 0) {
        reset();
        //nextQuestion();
    }
}

// Function to stop question countdown at 0 (doesn't go into the negative)
//function stop() {
//    clearInterval(intervalId);
//}

// Function to restart the question countdown
function reset() {
    clearInterval(intervalId);
    nextQuestion();
    number = 6;
    $("#display").html("<h1>" + number + "</h1>");
    intervalId = setInterval(decrement, 1000);
    if (count === questions.length) {
        //count = 0;
        //console.log("game should stop here");
        stopTrivia();
    }
}

// Display question Function
function displayQuestion() {
    $("#question").html(questions[count]);
}

// Generate Next Question Function
function nextQuestion() {
    count++;
    console.log("count is " + count + ".");
    $("#question").html("<img src = 'assets/images/loading.gif' width='100px'>");
    setTimeout(displayQuestion, 1000);
    //if (count === questions.length) {
    //    count = 0;
    //    stopTrivia();
    //}
}
    // If there are still more questions, render the next one.
    //if (questionIndex <= (questions.length -1)) {
    //    $("#question").text(questions[questionIndex].question);
    //}

    // If there arent any more questions, render game over.
    //else {
    //    console.log("GAME OVER SCREEN");
    //}


// Start Game Function
//function startTrivia() {
//    showQuestion = setInterval(nextQuestion, 5000);
//    timeCount();
//}

// Stop Game Function
function stopTrivia() {
    clearInterval(intervalId);
    $("#question").html("DONE");
}

//function timeCount() {
//    time++;
//    var converted = timeConverter(time);
//    console.log(converted);
//    $("#display").text(converted);
 
//}

// Time Converter Function
//function timeConverter(t) {

//    var minutes = Math.floor(t / 60);
//    var seconds = t - (minutes * 60);

//    if (seconds < 10) {
//      seconds = "0" + seconds;
//    }

//    if (minutes === 0) {
//      minutes = "00";
//    }
//    else if (minutes < 10) {
//      minutes = "0" + minutes;
//    }

//    return minutes + ":" + seconds;
//}


// MAIN PROCESS
//============================================================================================

$(document).ready(function() {

    //displayQuestion();
    //nextQuestion();
    //startTrivia();
    //timeCount();
    $("#random-button").on("click", run);
    //run();

});