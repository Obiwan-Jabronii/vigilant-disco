var questionsArr = [
  {
    question: "What does HTML stand for?",
    A:"Hey thats my leg!",
    B:"Hyper Test Make-Up Lozenge",
    C:"Hyper Text Mark-Up Language",
  
  },
  {
    question: "How is a comment marked on an HTML page?",
    A:">>",
    B:"//",
    C:"++",
   
  },
  {
    question: "What are the primary programming languages for the front end of most applications?",
    A:"HTML, CSS, JavaScript",
    B:"Python, C++, Java",
    C:"HTTP, C++, JavaScript",
    
  },
  {
    question: "What side of development deals with the user interface?",
    A:"Front End Development",
    B:"Back End Development",
    C:"Dead End Development",
  
  },
  {
    question: "What is the answer to life, the universe and everything?",
    A:"Be good to one another,and leave the world a better place than when you came into it.",
    B:"African or European Swallow?",
    C:"42",
  
  },
];

var quizAnswers = ['Hyper Text Mark-Up Language', '//', 'HTML, CSS, JavaScript','Front End Development', '42'];
var points = 0;
var currentQuestionIndex = 0
var i = 0
var containerEl = document.getElementById("questions")
var choicesEl = document.getElementById("choices")
var scoreEl = document.getElementById("score");
var timerEl = document.getElementById("timer");
var endScreenEl = document.querySelector(".end-screen")

var nextQuestionEl = document.querySelector(".next-question")
var nextBtnEl = document.querySelector(".next-btn")
var titleEl = document.getElementById("title")

//  gets the questions from the questions array
var getQuestion = function() {

  if(currentQuestionIndex === questionsArr.length) {

    endGame()
  } else {

  var currentQuestionObj = questionsArr[currentQuestionIndex]

  var questionEl = document.createElement("div")
  questionEl.innerHTML = "<h2 class='question'>" + currentQuestionObj.question + "</h2>";
  questionEl.className ="question";
  document.getElementById("questions").appendChild(questionEl); 
  
  let answersBtnA = document.createElement("button")
  answersBtnA.innerHTML = currentQuestionObj.A ;
  answersBtnA.className ="answer";
  containerEl.appendChild(answersBtnA);
  answersBtnA.setAttribute("id", "answer-a");

  let answersBtnB = document.createElement("button")
  answersBtnB.innerHTML = currentQuestionObj.B ;
  answersBtnB.className ="answer";
  containerEl.appendChild(answersBtnB); 
  answersBtnB.setAttribute("id", "answer-b");

  let answersBtnC = document.createElement("button")
  answersBtnC.innerHTML = currentQuestionObj.C;
  answersBtnC.className ="answer";
  containerEl.appendChild(answersBtnC);
  answersBtnC.setAttribute("id", "answer-c")

  //increase the current question index by one for the next question
  currentQuestionIndex++;
  console.log(currentQuestionIndex)
  }
};

getQuestion();

//  button handler for the answer buttons 
var answerButtonHandler = function(event) {
 event.preventDefault();
  var targetEl = event.target;
  var userAnswer = targetEl.textContent

    if (quizAnswers.includes(userAnswer)) {
      console.log("correct!")
      targetEl.textContent = "Correct"
      points++
      console.log(points)
      targetEl.style.backgroundColor = "green"

    } else {
      console.log("incorrect!")
      targetEl.textContent = "Incorrect!"

    }
    containerEl.innerHTML = ""
    getQuestion()
};
console.log(currentQuestionIndex)
 var nextButtonHandler = function(event) {
   targetEl = event.target;
   currentQuestionIndex++;
   console.log(currentQuestionIndex);
   targetEl.style.display = "none";
   titleEl.textContent = currentQuestionObj.question;
   console.log(currentQuestionObj.question)
   return 
 }

var endGame = function() {
  var score = document.createElement("div")
  score.innerHTML = "<h1 class= 'score'> Your score is " + points +"!</h1>"
  endScreenEl.appendChild(score)
  userInput()
 }
var userInput = function() {
 var initials = document.createElement("div")
 initials.innerHTML = "<h2>Please enter your initials<input type='text'id = 'initials'></h2>";
 endScreenEl.appendChild(initials)
}


var highScore = function(){
 var UserScore = {
   user: userInput.value,
   score: points
 }

 localStorage.setItem("high-score", JSON.stringify(UserScore))

}
// Timer function 
//  var clock = 1000
//  var countDown = setInterval(function () {
//    clock--;
//    console.log(clock);
//    if (clock === 0) {
//      window.alert("Times Up!");
//      timerEl.textContent = "Time left: " + clock;
//      return;
//    }
//  }, 1000);
//  Event listener for the answer buttons 
containerEl.addEventListener("click", answerButtonHandler);
//  Event listener for the next button
nextQuestionEl.addEventListener("click", nextButtonHandler);

endScreenEl.addEventListener("submit", highScore)
