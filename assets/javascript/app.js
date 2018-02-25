// VARIABLES
//============================================================================================

var questions = [
    {text: "Ryan is 5 nine.", choiceA: "AAAAAAAAAA", choiceB: "BBBBBBBBBB", choiceC: "CCCCCCCCCCCC", choiceD: "DDDDDDDDDDD", answer: "t"},
    {text: "Ryan is 36.", choiceA: "aaaaaaaaaaaa", choiceB: "bbbbbbbbbbbbb", choiceC: "cccccccccccc", choiceD: "ddddddddddddd", sanswer: "f"},
    {text: "Ryan has red hair.", choiceA: "1111111111111", choiceB: "222222222222", choiceC: "333333333333", choiceD: "4444444444444", answer: "t"},
    {text: "Riley Rose is a lil gurl", choiceA: "---------------", choiceB: "+++++++++++++++", choiceC: "//////////////", choiceD: "===============", answer: "t"},
    {text: "Astros are the best MLB team", choiceA: "wwwwwwwwwwww", choiceB: "xxxxxxxxxxxxx", choiceC: "yyyyyyyyyyyyyy", choiceD: "zzzzzzzzzzzzz", answer: "t"},
];
var selectedQuestion = "";
// Variable to hold the index of current question.
var questionIndex = 0;

// Variable to keep track of the index of the currently displayed question
var count = 0;

var time = 0;
var userChoice = "";

// Variable: time per question
var number = 6;

// Variable used for the setInterval/clearInterval
var intervalId;


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
    $("#question").html(questions[count].text);
    $("#a").html(questions[count].choiceA);
    $("#b").html(questions[count].choiceB);
    $("#c").html(questions[count].choiceC);
    $("#d").html(questions[count].choiceD);
    //$("#answer-choices").html 
}



// Generate Next Question/loading Function
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


// MAIN PROCESS
//============================================================================================

$(document).ready(function() {

    //displayQuestion();
    //nextQuestion();
    //startTrivia();
    //timeCount();
    $("#random-button").on("click", run);
    //run();
    // Buttons on-click function 
    $(".btn-default").on("click", function() {
        userChoice = $(this).attr("value");
        console.log("user picked " + userChoice + ".");
    })

});