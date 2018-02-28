// VARIABLES 
//============================================================================================

var questions = [
    {text: "1. Which Survivor earned the nickname 'Robfather'?", choices: ["A. Robert DeCanio", "B. Rob Mariano", "C. Rob Cesternino", "D. Robb Zbacnik"], answer: "B"},
    
    {text: "2. In Survivor Pearl Islands the season's villain, Jon Dalton, was known by what nickname?", 
    choices: ["A. Jon Boy", "B. Johnny Fairplay", "C. The General", "D. Johnny Rotten"], 
    answer: "B"},
    
    {text: "3. In Survivor Outback, Michael Skupin air-lifted out b/c he: ", 
    choices: ["A. was burned by the fire", "B. was stung by a jellyfish", "C. broke his ankle", "D. was cut by a knife"], 
    answer: "A"},
    
    {text: "4. Which Survivor winner has never won an individual immunity challenge?", 
    choices:["A. Sophie Clarke", "B. Kim Spradlin", "C. Bob Crowley", "D. Sandra Diaz-Twine"], 
    answer: "D"},
    
    {text: "5. Which contestant is the only person to have been voted out first TWICE??", 
    choices:["A. Marissa Calihan", "B. Carolina Eastwood", "C. Francesca Hogi", " D. Semhar Tadesse"], 
    answer: "C"},

    {text: "6. Which Survivor villain was quoted saying 'I am your friend, but if you f*** with me, you're dead?'", 
    choices:["A. Jerri Manthey", "B. Courtney Yates", "C. Abi-Maria Gomes", " D. Sandra Diaz-Twine"], 
    answer: "C"},

    {text: "7. Which season of Survivor is the only season to last longer than 39 days?", 
    choices:["A. Survivor: Australia", "B. Survivor: Borneo", "C. Survivor: Guatemala", " D. Survivor: Samoa"], 
    answer: "A"},

    {text: "8. Who won Survivor: San Juan Del Sur?", 
    choices:["A. Nadiya Andersen", "B. Baylor Wilson", "C. Missy Payne", " D. Natalie Anderson"], 
    answer: "D"},

    {text: "9. Which contestant holds the record for most days played on Survivor?", 
    choices:["A. Parvati", "B. Ozzy", "C. Amanda Kimmel", " D. Boston Rob"], 
    answer: "B"},

    {text: "10. Colby Donaldson, Terry Dietz, and Ozzy all hold the record for most immunity challenges won on a single season?",choices:["A. 4", "B. 5", "C. 6", " D. 7"], 
    answer: "B"},
    
    {text: "11. In season 34 - Game Changers, Tai found/played how many hidden immunity idols?", choices: ["A. 0", "B. 4", "C. 3", "D. 2"], answer: "C"},
    
    {text: "12. Who did Tony beat in the final Tribal Council in season 28 - Survivor Cagayan?", 
    choices: ["A. Woo", "B. Kass", "C. Spencer", "D. Tasha"], 
    answer: "A"},
    
    {text: "13. Beating out Gervase and Monica Culpepper, who was the sole Survivor of season 27 - Blood vs. Water?", 
    choices: ["A. Tina Wesson", "B. Vytas", "C. Aras", "D. Tyson"], 
    answer: "D"},
    
    {text: "14. Survivor: Micronesia - Fans vs. Favorites was won by?", 
    choices:["A. Sandra Diaz-Twine", "B. Richard Hatch", "C. Parvati", "D. Cochran"], 
    answer: "C"},
    
    {text: "15. Who holds the record for oldest sole survivor at 57 years old?", 
    choices:["A. Bob Crowley-Gabon", "B. Kim Johnson-Africa", "C. Tom Westman-Palau", " D. Jan Gentry-Thailand"], 
    answer: "A"},

    {text: "16. Who holds the record for most times sent to Exile Island?", 
    choices:["A. Danielle-Panama", "B. Jeremy-San Juan Del", "C. Jessica Kiper-Gabon", " D. Terry Dietz-Panama"], 
    answer: "C"},

    {text: "17. Who is the oldest player ever to compete on Survivor?", 
    choices:["A. Rudy-Borneo/All-Stars", "B. Joe Del Campo-Kaoh Rong", "C. Jimmy Johnson-Nicaragua", " D. Tarzan-One World"], 
    answer: "A"},

    {text: "18. Big Tom from Survivor-Africa holds the record for most weight lost. How much did he lose?", 
    choices:["A. 48 lbs.", "B. 60 lbs.", "C. 71 lbs.", " D. 80 lbs."], 
    answer: "D"},

    {text: "19. What season is considered the most brutal with 3 medical evacuations?", 
    choices:["A. Blood vs. Water", "B. Kaoh Rong", "C. Austalian Outback", " D. China"], 
    answer: "B"},

    {text: "20. Which of theses contestant has competed on Survivor on 4 seperate seasons?", 
    choices:["A. Coach", "B. Penner", "C. Cirie", " D. Amanda Kimmel"], 
    answer: "C"},
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
var number = 15;

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
    $("#display").html("<h1>" + number + "</h1>");
    if (number === 0) {
        unansweredAnswers++;
        reset();
    }
}

// Function to restart the question countdown
function reset() {
    clearInterval(intervalId);
    nextQuestion();
    number = 15;
    $("#display").html("<h1>" + number + "</h1>");
    intervalId = setInterval(decrement, 1000);
    if (count === questions.length) {
        stopTrivia();
    }
}

// Display question Function
function displayQuestion() {
    $("#question").html(questions[count].text);
    // Code to dynamically display answer choices
    $("#recap-heading").html("Trivia Recap");
    $(".answer-choices").html("<br><br><h4>" + questions[count].choices[0] + "</h4><br><h4>" + questions[count].choices[1] + "</h4><br><h4>" + questions[count].choices[2] + "</h4><br><h4>" + questions[count].choices[3] + "</h4>");
    if (count === questions.length) {
        stopTrivia();
    }
}



// Generate Next Question/loading Function
function nextQuestion() {
    count++;
    $("#question").html("<img src = 'assets/images/loading.gif' width='100px'>");
    setTimeout(displayQuestion, 1000);
}

function compareAnswers() {
    if (userChoice === questions[count].answer) {
        $(".answer-choices").html("<img src= 'assets/images/Probst-win.gif' height='auto' width='300px'><br><br>").append("<h3>CORRECT</h3>");
        correctAnswers++;
        reset();
    }
    else {
        $(".answer-choices").html("<img src= 'assets/images/Probst-wow.gif' height='auto' width='300px'><br><br>").append("<h3>WRONG<h/3>");
        //$(".answer-choices").html("<h3>You chose poorly!</h3><br><h4>" + questions[count].answer + " was the correct answer!</h4>");
        incorrectAnswers++;
        reset();
    }
}

// Stop Game Function
function stopTrivia() {
    clearInterval(intervalId);
    $("#question").html("<h1>Trivia Totals</h1><h3> 20 total questions:</h3><h3>" + correctAnswers + " correct.</h3><h3>" + incorrectAnswers + " incorrect.</h3><h3>" + unansweredAnswers + " unanswered.</h3><br><button class='restart'>Restart</button>");
    $(".answer-choices").html("<img src= 'assets/images/Tribe-has-spoken.gif' height='auto' width='300px'><br><br>").append("<h3>NO MORE QUESTIONS<h/3>");
    return;
    //$(".restart").on("click", restartGame);
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