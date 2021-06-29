console.log('quiz')


var startButtonHtml = document.querySelector("#startButtonHtml");

var quizContainerHtml = document.querySelector("#quizContainerHtml");
var quizQuestionHtml = document.querySelector("#quizQuestionHtml");
var quizAnswerHtml = document.querySelector("#quizAnswerHtml");
var oneHtml = document.querySelector("#oneHtml");
var twoHtml = document.querySelector("#twoHtml");
var threeHtml = document.querySelector("#threeHtml");
var fourHtml = document.querySelector("#fourHtml");
var timerCount = document.querySelector("#timerCount")


//  var  = "";
//  var = 0;
//  var  = 0;
//  var  = 0;
//  var isWin = false;
//  var timer;
var timeLeft = 60;
var userScore = 100




var questionOne = {
    question: 'What is an object?',
    answer1: 'A',
    answer2: 'B', //correct
    answer3: 'C',
    answer4: 'D'
}
var questionTwo = {
    question: 'what is an Array?',
    answer1: 'AA',
    answer2: 'BB',
    answer3: 'CC',
    answer4: 'DD' //correct
}
var questionThree = {
    question: 'what is the DOM?',
    answer1: 'AAA', // correct
    answer2: 'BBB',
    answer3: 'CCC',
    answer4: 'DDD'
}
var questionFour = {
    question: 'what is a variable?',
    answer1: 'AAAA',
    answer2: 'BBBB',
    answer3: 'CCCC', //correct
    answer4: 'DDDD'
}


// WHEN I click the start button
var questionAnswerArray = [questionOne, questionTwo, questionThree, questionFour];



startButtonHtml.addEventListener("click", function() {
    quizQuestionHtml.innerHTML = questionAnswerArray[0].question;
    oneHtml.innerHTML = questionAnswerArray[0].answer1;
    twoHtml.innerHTML = questionAnswerArray[0].answer2;
    threeHtml.innerHTML = questionAnswerArray[0].answer3;
    fourHtml.innerHTML = questionAnswerArray[0].answer4;
    countdown()
    console.log(countdown())
});
var userScore = 100;
var timeleft = 60;
var i = 0;



//var correctAnswerArray = [questionAnswerArray[0].answer2, questionAnswerArray[1].answer4, questionAnswerArray[2].answer1, questionAnswerArray[3].answer3];
// need a button 

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

        setTimeout(function() {
            wrongAnswerMsg.innerHTML = '';
        }, 1000);

        console.log(userScore + "score after user gets it wrong");


    }

    i++
    quizQuestionHtml.innerHTML = questionAnswerArray[i].question;
    oneHtml.innerHTML = questionAnswerArray[i].answer1;
    twoHtml.innerHTML = questionAnswerArray[i].answer2;
    threeHtml.innerHTML = questionAnswerArray[i].answer3;
    fourHtml.innerHTML = questionAnswerArray[i].answer4;



    if (quizQuestionHtml.innerHTML = questionAnswerArray[3].question) {
        var scoreBox = document.createElement("div");
        console.log(scoreBox)
        scoreBox.innerHTML = "congrats you finished! your score is " + userScore + "%";
        console.log('sdsdsds', document.querySelector('#scoreContainer'));
        document.querySelector('#scoreContainer').appendChild(scoreBox);


    } else {
        timeLeft = (timeLeft - 15);
        timerCountHtml.innerHTML = '0';
        clearInterval(timeInterval);
    };

});

// // need a click eventt listener
function countdown() {


    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function() {
        // As long as the `timeLeft` is greater than 1
        if (timeLeft > 1) {
            // Set the `textContent` of `timerEl` to show the remaining seconds
            timerCount.textContent = timeLeft + ' seconds remaining';
            // Decrement `timeLeft` by 1
            timeLeft--;
        } else if (timeLeft === 1) {
            // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
            timerCount.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else {
            // Once `timeLeft` gets to 0, set `timerEl` to an empty string
            timerCount.textContent = '';
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
            // Call the `displayMessage()` function

        }
    }, 1000);
}
// THEN a timer startsa countdown(60 sec) and I am presented with a question
// timer functionto start on that click event listener
//show a questionfrom our array of question/answer object
// WHEN I answer a question
// user clicks, a pop up shows correct or not  
// THEN I am presented with another question
//user clicks, a pop up shows correct or not  
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score




// // Arrays used to create blanks and letters on screen
// var lettersInChosenWord = [];
// var blanksLetters = [];

// // Array of words the user will guess
// var words = ["variable","array", "modulus", "object", "function", "string", "boolean"];

// // The init function is called when the page loads 
// function init() {
//   getWins();
//   getlosses();
// }

// // The startGame function is called when the start button is clicked
// function startGame() {
//   isWin = false;
//   timerCount = 10;
//   // Prevents start button from being clicked when round is in progress
//   startButton.disabled = true;
//   renderBlanks()
//   startTimer()
// }

// // The winGame function is called when the win condition is met
// function winGame() {
//   wordBlank.textContent = "YOU WON!!!🏆 ";
//   winCounter++
//   startButton.disabled = false;
//   setWins()
// }

// // The loseGame function is called when timer reaches 0
// function loseGame() {
//   wordBlank.textContent = "GAME OVER";
//   loseCounter++
//   startButton.disabled = false;
//   setLosses()
// }

// // The setTimer function starts and stops the timer and triggers winGame() and loseGame()
// function startTimer() {
//   // Sets timer
//   timer = setInterval(function() {
//     timerCount--;
//     timerElement.textContent = timerCount;
//     if (timerCount >= 0) {
//       // Tests if win condition is met
//       if (isWin && timerCount > 0) {
//         // Clears interval and stops timer
//         clearInterval(timer);
//         winGame();
//       }
//     }
//     // Tests if time has run out
//     if (timerCount === 0) {
//       // Clears interval
//       clearInterval(timer);
//       loseGame();
//     }
//   }, 1000);
// }

// // Creates blanks on screen
// function renderBlanks() {
//   // Randomly picks word from words array
//   chosenWord = words[Math.floor(Math.random() * words.length)];
//   lettersInChosenWord = chosenWord.split("");
//   numBlanks = lettersInChosenWord.length;
//   blanksLetters = []
//   // Uses loop to push blanks to blankLetters array
//   for (var i = 0; i < numBlanks; i++) {
//     blanksLetters.push("_");
//   }
//   // Converts blankLetters array into a string and renders it on the screen
//   wordBlank.textContent = blanksLetters.join(" ")
// }

// // Updates win count on screen and sets win count to client storage
// function setWins() {
//   win.textContent = winCounter;
//   localStorage.setItem("winCount", winCounter);
// }

// // Updates lose count on screen and sets lose count to client storage
// function setLosses() {
//   lose.textContent = loseCounter;
//   localStorage.setItem("loseCount", loseCounter);
// }

// // These functions are used by init
// function getWins() {
//   // Get stored value from client storage, if it exists
//   var storedWins = localStorage.getItem("winCount");
//   // If stored value doesn't exist, set counter to 0
//   if (storedWins === null) {
//     winCounter = 0;
//   } else {
//     // If a value is retrieved from client storage set the winCounter to that value
//     winCounter = storedWins;
//   }
//   //Render win count to page
//   win.textContent = winCounter;
// }

// function getlosses() {
//   var storedLosses = localStorage.getItem("loseCount");
//   if (storedLosses === null) {
//     loseCounter = 0;
//   } else {
//     loseCounter = storedLosses;
//   }
//   lose.textContent = loseCounter;
// }

// function checkWin() {
//   // If the word equals the blankLetters array when converted to string, set isWin to true
//   if (chosenWord === blanksLetters.join("")) {
//     // This value is used in the timer function to test if win condition is met
//     isWin = true;
//   }
// }

// // Tests if guessed letter is in word and renders it to the screen.
// function checkLetters(letter) {
//   var letterInWord = false;
//   for (var i = 0; i < numBlanks; i++) {
//     if (chosenWord[i] === letter) {
//       letterInWord = true;
//     }
//   }
//   if (letterInWord) {
//     for (var j = 0; j < numBlanks; j++) {
//       if (chosenWord[j] === letter) {
//         blanksLetters[j] = letter;
//       }
//     }
//     wordBlank.textContent = blanksLetters.join(" ");
//   }
// }

// // Attach event listener to document to listen for key event
// document.addEventListener("keydown", function(event) {
//   // If the count is zero, exit function
//   if (timerCount === 0) {
//     return;
//   }
//   // Convert all keys to lower case
//   var key = event.key.toLowerCase();
//   var alphabetNumericCharacters = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");
//   // Test if key pushed is letter
//   if (alphabetNumericCharacters.includes(key)) {
//     var letterGuessed = event.key;
//     checkLetters(letterGuessed)
//     checkWin();
//   }
// });

// // Attach event listener to start button to call startGame function on click
// startButton.addEventListener("click", startGame);

// // Calls init() so that it fires when page opened
// init();

// // Bonus: Add reset button
// var resetButton = document.querySelector(".reset-button");

// function resetGame() {
//   // Resets win and loss counts
//   winCounter = 0;
//   loseCounter = 0;
//   // Renders win and loss counts and sets them into client storage
//   setWins()
//   setLosses()
// }
// // Attaches event listener to button
// resetButton.addEventListener("click", resetGame)