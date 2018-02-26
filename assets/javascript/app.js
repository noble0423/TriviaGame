// VARIABLES
//============================================================================================

var questions = [
    {text: "1. The equator passes through ?", choices: ["A. Ethiopia", "B. Kenya", "C. Nigeria", "D. Sudan"], answer: "b"},
    
    {text: "2. International date line passes through ?", 
    choices: ["A. Baffin bay", "B. Bering strait", "C. Denmark strait", "D. Hudson bay"], 
    answer: "b"},
    
    {text: "3. The highest average salinity amongst the following seas is reported from ?", 
    choices: ["A. Dead Sea", "B. Red Sea", "C. Black Sea", "D. Mediterranean Sea"], 
    answer: "a"},
    
    {text: "4. Great barrier reef is situated along the coast of ?", 
    choices:["A. USA", "B. UK", "C. UK", "D. Australia"], 
    answer: "d"},
    
    {text: "5. Which one of the following is a Land-locked country?", 
    choices:["A. Cambodia", "B. Thailand", "C. Laos", " D. Vietnam"], 
    answer: "c"},
];
var selectedQuestion = "";
// Variable to hold the index of current question.
var questionIndex = 0;

// Variable to keep track of the index of the currently displayed question
var count = 0;

var time = 0;
var userChoice = "";
var correctAnswers = 0;
var incorrectAnswers = 0;
var unansweredAnswers = 0;

// Variable: time per question
var number = 10;

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
        unansweredAnswers++;
        console.log("questions unanswered " + unansweredAnswers);
        reset();
    }
}

// Function to restart the question countdown
function reset() {
    clearInterval(intervalId);
    nextQuestion();
    number = 10;
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
    // Code to dynamically display answer choices
    $(".answer-choices").html("<br><p>" + questions[count].choices[0] + "</p><br><p>" + questions[count].choices[1] + "</p><br><p>" + questions[count].choices[2] + "</p><br><p>" + questions[count].choices[3] + "</p>");
}



// Generate Next Question/loading Function
function nextQuestion() {
    count++;
    console.log("count is " + count + ".");
    $("#question").html("<img src = 'assets/images/loading.gif' width='100px'>");
    setTimeout(displayQuestion, 1000);
}

// Stop Game Function
function stopTrivia() {
    clearInterval(intervalId);
    $("#question").html("<h1>Out of 20 total questions, you answered:</h1><br><p>" + correctAnswers + " questions correctly.</p><p>" + incorrectAnswers + " questions incorrectly.</p><br><p>You failed to answer " + unansweredAnswers + " questions.</p>");
}

function compareAnswers() {
    if (userChoice === questions[count].answer) {
        console.log("correct");
        correctAnswers++;
        console.log("questions answered correctly " + correctAnswers);
        reset();
    }
    else {
        console.log("incorrect");
        incorrectAnswers++;
        console.log("questions answered incorrectly " + incorrectAnswers);
        reset();
    }
}


// MAIN PROCESS
//============================================================================================

$(document).ready(function() {

    $("#random-button").on("click", run);
    // Buttons on-click function 
    $(".btn-default").on("click", function() {
        userChoice = $(this).attr("value");
        console.log("user picked " + userChoice + ".");
        compareAnswers();

    });
    

});