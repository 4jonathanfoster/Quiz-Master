console.log('quiz')


var startButtonHtml = document.querySelector("#startButtonHtml");

var quizContainerHtml = document.querySelector("#quizContainerHtml");
var quizQuestionHtml = document.querySelector("#quizQuestionHtml");
var quizAnswerHtml = document.querySelector("#quizAnswerHtml");
var oneHtml = document.querySelector("#oneHtml");
var twoHtml = document.querySelector("#twoHtml");
var threeHtml = document.querySelector("#threeHtml");
var fourHtml = document.querySelector("#fourHtml");
var timerCountHtml = document.querySelector("#timerCount")
var scoreBox = document.querySelector("#scorebox")
var nameInput = document.querySelector("#nameInput")
var scoreButton = document.querySelector("#scoreButton")
var scoreContainer = document.querySelector("#scoreContainer")
var finalscore = document.querySelector("#final-score")
var timeLeft = 60;
var Finish = document.querySelector("#Finish")

var questionOne = {
    question: 'An Object as what?',
    answer1: 'Length and Width',
    answer2: 'State and Behavior',
    answer3: 'Weight and Mass',
    answer4: 'Color and Style'
}
var questionTwo = {
    question: 'Each item of an array is an?',
    answer1: 'Object',
    answer2: 'String',
    answer3: 'Chain',
    answer4: 'Element'
}
var questionThree = {
    question: 'The Document Object Model (DOM) is a programming interface for ?',
    answer1: 'HTML and XML',
    answer2: 'CSS and C++',
    answer3: 'Bootstrap and Jquery',
    answer4: 'API and FBI'
}
var questionFour = {
    question: 'Variables are typically used to store?',
    answer1: 'Goods',
    answer2: 'Network',
    answer3: 'Information',
    answer4: 'DOM'
}



var questionAnswerArray = [questionOne, questionTwo, questionThree, questionFour];
var scorekeeperArray = [];


startButtonHtml.addEventListener("click", function() {
    quizQuestionHtml.innerHTML = questionAnswerArray[0].question;
    oneHtml.innerHTML = questionAnswerArray[0].answer1;
    twoHtml.innerHTML = questionAnswerArray[0].answer2;
    threeHtml.innerHTML = questionAnswerArray[0].answer3;
    fourHtml.innerHTML = questionAnswerArray[0].answer4;
});
var userScore = 100;

var i = 0;

function getLocal(scorekeeperArray) {
    if (localStorage.getItem("final score") === null) {
        return scorekeeperArray;
    } else {
        return JSON.parse(localStorage.getItem("final score"));
    }
}

function sortScore(scorekeeperArray) {
    scorekeeperArray = scorekeeperArray.sort(function(a, b) { return a.scorebox - b.scorebox });
    scorekeeperArray = scorekeeperArray.reverse();
    return scorekeeperArray;
}

quizAnswerHtml.addEventListener("click", function(event) {
    var targetHtmlElement = event.target;

    if (((targetHtmlElement.matches("#twoHtml")) && (twoHtml.innerHTML == questionAnswerArray[0].answer2)) ||
        ((targetHtmlElement.matches("#fourHtml")) && (fourHtml.innerHTML == questionAnswerArray[1].answer4)) ||
        ((targetHtmlElement.matches("#oneHtml")) && (oneHtml.innerHTML == questionAnswerArray[2].answer1)) ||
        ((targetHtmlElement.matches("#threeHtml")) && (threeHtml.innerHTML == questionAnswerArray[3].answer3))) {

        var correctAnswerMsg = document.createElement("div");
        correctAnswerMsg.innerHTML = "you got question " + (i + 1) + " correct! ✔️";
        document.getElementById('quizContainerHtml').appendChild(correctAnswerMsg);

        setTimeout(function() {
            correctAnswerMsg.innerHTML = '';
        }, 1000);

    } else {

        var wrongAnswerMsg = document.createElement("div");
        wrongAnswerMsg.textContent = "Wrong! the correct answer " + i + " was " + questionAnswerArray[i].answer2;
        document.getElementById('quizContainerHtml').appendChild(wrongAnswerMsg);
        timeLeft = timeLeft - 10;
        setTimeout(function() {
            wrongAnswerMsg.innerHTML = '';
        }, 1000);

        console.log(userScore + "score after user gets it wrong");


    }

    i++;

    if (questionAnswerArray.length == i) {

        Finish.innerHTML = "Congrats your Finished!"
        clearInterval(timeInterval);

        scoreButton.addEventListener("click", function() {
            scorekeeperArray = getLocal(scorekeeperArray);
            var scoreContainer = {
                name: nameInput.value,
                score: timeLeft
            }
            scorekeeperArray.push(scoreContainer);
            scorekeeperArray = sortScore(scorekeeperArray);

            for (var i = 0; i < scorekeeperArray.length; i++) {
                var user = scorekeeperArray[i];

                var newScore = document.createElement("li");
                newScore.textContent = "score: " + user.score + " nameInput: " + user.name;
                finalscore.appendChild(newScore);
            }
            localStorage.setItem("final score", JSON.stringify(scorekeeperArray))
        })
    }
    quizQuestionHtml.innerHTML = questionAnswerArray[i].question;
    oneHtml.innerHTML = questionAnswerArray[i].answer1;
    twoHtml.innerHTML = questionAnswerArray[i].answer2;
    threeHtml.innerHTML = questionAnswerArray[i].answer3;
    fourHtml.innerHTML = questionAnswerArray[i].answer4;

});


var timeInterval = setInterval(function() {
        timeLeft--;
        timerCountHtml.textContent = timeLeft;

        if (timeLeft == 0) {
            clearInterval(timeInterval);

        }
    },
    1000);