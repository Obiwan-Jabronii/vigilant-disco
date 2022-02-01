var questionsArr = [
  {
    question: "What does HTML stand for?",
    A:"Hey thats my leg!",
    B:"Hyper Test Make-Up Lozenge",
    C:"Hyper Text Mark-Up Language",
    answer: "Hyper Text Mark-Up Language",
  },
  {
    question: "How is a comment marked on an HTML page?",
    A:">>",
    B:"//",
    C:"++",
    answer: "//",
  },
  {
    question: "What are the primary programming languages for the front end of most applications?",
    A:"HTML, CSS, JavaScript",
    B:"Python, C++, Java",
    C:"HTTP, C++, JavaScript",
    answer: "HTML, CSS, JavaScrpt",
  },
  {
    question: "",
    A:"Hey thats my leg!",
    B:"Hyper Test Make-Up Lozenge",
    C:"Hyper Text Mark-Up Language",
    answer: "4",
  },
  {
    question: "question 3",
    A:"Hey thats my leg!",
    B:"Hyper Test Make-Up Lozenge",
    C:"Hyper Text Mark-Up Language",
    answer: "4",
  },
];
var points = 0;
var currentQuestionIndex = 0
var i = 0
var containerEl = document.getElementById("questions")
var choicesEl = document.getElementById("choices")
var scoreEl = document.getElementById("score");
var timerEl = document.getElementById("timer");
var currentQuestionObj = questionsArr[currentQuestionIndex]
var nextQuestionEl = document.querySelector(".next-question")
var nextBtnEl = document.querySelector(".next-btn")
var titleEl = document.getElementById("title")
//  gets the questions from the questions array
var getQuestion = function() {

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

    };
getQuestion();
//  button handler for the answer buttons 
var answerButtonHandler = function(event) {
 event.preventDefault();
  var targetEl = event.target;

  if (targetEl.matches("#answer-a")) {
    console.log("Button 1 was selected");
    if (targetEl.textContent === currentQuestionObj.answer) {
      console.log("correct!")
      targetEl.textContent = "Correct"
      points++
      console.log(points)
      targetEl.style.backgroundColor = "green"
      containerEl.innerHTML = ""
      getQuestion()
      return
    } else {
      console.log("incorrect!")
      targetEl.textContent = "Incorrect!"
      containerEl.innerHTML = ""
      getQuestion()
      return
    }
  } else if (targetEl.matches("#answer-b")) {
    console.log("Button 2 was selected");
    if (targetEl.textContent === currentQuestionObj.answer) {
      console.log("correct!")
      targetEl.textContent = "Correct"
      points++
      console.log(points)
      targetEl.style.backgroundColor = "green"
      containerEl.innerHTML = ""
      getQuestion()
      return
    } else {
      console.log("incorrect!")
      targetEl.textContent = "Incorrect!"
      containerEl.innerHTML = ""
      getQuestion()
      return
    }
  } else if (targetEl.matches("#answer-c")) {
    console.log("Button 3 was selected")
    if (targetEl.textContent === currentQuestionObj.answer) {
      console.log("correct!")
      targetEl.textContent = "Correct"
      points++
      console.log(points)
      targetEl.style.backgroundColor = "green"
      containerEl.innerHTML = ""
      getQuestion()
      return
    } else {
      console.log("incorrect!")
      targetEl.textContent = "Incorrect!"
      containerEl.innerHTML = ""
      getQuestion()
      return
    }
  }
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
 // Score at the top of the screen 
 scoreEl.textContent = "Current Score: " + points;
//  Event listener for the answer buttons 
containerEl.addEventListener("click", answerButtonHandler);
//  Event listener for the next button
nextQuestionEl.addEventListener("click", nextButtonHandler);

  var highScores = []