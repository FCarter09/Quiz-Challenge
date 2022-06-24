


var beginQuizEl = document.querySelector("#start-quiz");
var timer = 60;
var userScore = 0;
var userPoints = 20;


var startQuiz = function(){

    var beginQuizEl = document.querySelector("#start-quiz");
    alert("The quiz has begun, timer has started at 60 seconds!");
    questionOne();


}

var questionOne = function(){

    //delete intro screen
    var introScreen = document.querySelector("#intro-screen");
    introScreen.remove();
    console.log("removing intro screen");

    //selecting body tag
    var bodyTag = document.querySelector("body");
    
    // create questionOneEl and add to body
    var questionOneEl = document.createElement("div");
    questionOneEl.className = "question-one";
    questionOneEl.textContent = "Array in JavaScript can be used to store ___________.";
    bodyTag.appendChild(questionOneEl);

    //create answer choices and add to body
    var answerChoiceOne = document.createElement("button");
    answerChoiceOne.className = "btn-questionOne-answerOne";
    answerChoiceOne.textContent = "1. numbers and strings";
    bodyTag.appendChild(answerChoiceOne);

    var answerChoiceTwo = document.createElement("button");
    answerChoiceTwo.className = "btn-questionOne-answerTwo";
    answerChoiceTwo.textContent = "2. other arrays";
    bodyTag.appendChild(answerChoiceTwo);

    var answerChoiceThree = document.createElement("button");
    answerChoiceThree.className = "btn-questionOne-answerThree";
    answerChoiceThree.textContent = "3. booleans";
    bodyTag.appendChild(answerChoiceThree);

    var answerChoiceFour = document.createElement("button");
    answerChoiceFour.className = "btn-questionOne-answerFour";
    answerChoiceFour.textContent = "4. all of the above";
    bodyTag.appendChild(answerChoiceFour);

    // add event listener to buttons
    answerChoiceOne.addEventListener('click', function(event) {
        
        alert("Incorrect!");

        questionTwo();
    })

    answerChoiceTwo.addEventListener('click', function(event){

        alert("Incorrect!");

        questionTwo();
    })

    answerChoiceThree.addEventListener('click', function(event){

        alert("Incorrect!");


        questionTwo();
    })

    answerChoiceFour.addEventListener('click', function(event) {

        userScore = userScore;
        console.log(userScore + " is now " + userPoints + ".");
        alert("Correct! You've earned 20 points");

        questionTwo();
    })

    // execute next function to start next question

}


var questionTwo = function() {

  //delete questionOneEl
  var questionOneEl = document.querySelector("div");
  questionOneEl.remove();
  console.log("removing questionOneEl");

  // remove answer buttons for questionOneEl
  var answerChoiceOne = document.querySelector("button")
    answerChoiceOne.remove();
    console.log("removing answerChoiceOne");

  var answerChoiceTwo = document.querySelector("button")
    answerChoiceTwo.remove();
    console.log("removing answerChoiceTwo");  

    var answerChoiceThree = document.querySelector("button")
    answerChoiceThree.remove();
    console.log("removing answerChoiceThree"); 

    var answerChoiceFour = document.querySelector("button")
    answerChoiceFour.remove();
    console.log("removing answerChoiceFour"); 

    //selecting body tag
    var bodyTag = document.querySelector("body");
        
    // create questionTwoEl and add to body
    var questionTwoEl = document.createElement("div");
    questionTwoEl.className = "question-two";
    questionTwoEl.textContent = "String values must be enclosed within ___________ when being assigned to variables.";
    bodyTag.appendChild(questionTwoEl);

    //create answer choices and add to body
    var answerChoiceOne = document.createElement("button");
    answerChoiceOne.className = "btn-questionTwo-answerOne";
    answerChoiceOne.textContent = "1. commas";
    bodyTag.appendChild(answerChoiceOne);

    var answerChoiceTwo = document.createElement("button");
    answerChoiceTwo.className = "btn-questionTwo-answerTwo";
    answerChoiceTwo.textContent = "2. curly brackets";
    bodyTag.appendChild(answerChoiceTwo);


    var answerChoiceThree = document.createElement("button");
    answerChoiceThree.className = "btn-questionTwo-answerThree";
    answerChoiceThree.textContent = "3. quotes";
    bodyTag.appendChild(answerChoiceThree);

    var answerChoiceFour = document.createElement("button");
    answerChoiceFour.className = "btn-questionTwo-answerFour";
    answerChoiceFour.textContent = "4. parenthesis";
    bodyTag.appendChild(answerChoiceFour);   
        
    // add event listener to buttons
    answerChoiceOne.addEventListener('click', function(event) {
       
        alert("Incorrect!");
        

        questionThree();
    })

    answerChoiceTwo.addEventListener('click', function(event){

        alert("Incorrect!");


        questionThree();

    })

    answerChoiceThree.addEventListener('click', function(event){

        userScore = userPoints 
        console.log(userScore + " is now " + userPoints + ".");
        alert("Correct! You've earned 20 points");
        


        questionThree();

    })

    answerChoiceFour.addEventListener('click', function(event) {
        
        alert("Incorrect!");

        questionThree();
})

}

var questionThree = function(){

    var questionTwoEl = document.querySelector("div");
    questionTwoEl.remove();
    console.log("removing questionTwoEl");

    //remove answer buttons for questionTwoEl
    var answerChoiceOne = document.querySelector("button")
    answerChoiceOne.remove();
    console.log("removing answerChoiceOne");

    var answerChoiceTwo = document.querySelector("button")
    answerChoiceTwo.remove();
    console.log("removing answerChoiceTwo");  

    var answerChoiceThree = document.querySelector("button")
    answerChoiceThree.remove();
    console.log("removing answerChoiceThree"); 

    var answerChoiceFour = document.querySelector("button")
    answerChoiceFour.remove();
    console.log("removing answerChoiceFour"); 

    //selecting body tag
    var bodyTag = document.querySelector("body")
       
    // create questionThreeEl and add to body
    var questionThreeEl = document.createElement("div");
    questionThreeEl.className = "question-three";
    questionThreeEl.textContent = "The condition in an if/else statement is enclosed with ___________.";
    bodyTag.appendChild(questionThreeEl);
   
    //create answer choices and add to body
    var answerChoiceOne = document.createElement("button");
    answerChoiceOne.className = "btn-questionThree-answerOne";
    answerChoiceOne.textContent = "1. quotes";
    bodyTag.appendChild(answerChoiceOne);
   
    var answerChoiceTwo = document.createElement("button");
    answerChoiceTwo.className = "btn-questionThree-answerTwo";
    answerChoiceTwo.textContent = "2. curly brackets";
    bodyTag.appendChild(answerChoiceTwo);
   
   
    var answerChoiceThree = document.createElement("button");
    answerChoiceThree.className = "btn-questionThree-answerThree";
    answerChoiceThree.textContent = "3. parenthesis";
    bodyTag.appendChild(answerChoiceThree);
   
    var answerChoiceFour = document.createElement("button");
    answerChoiceFour.className = "btn-questionThree-answerFour";
    answerChoiceFour.textContent = "4. square brackets";
    bodyTag.appendChild(answerChoiceFour);  

    answerChoiceOne.addEventListener('click', function(event){

        alert("Incorrect!");

    })

    answerChoiceTwo.addEventListener('click', function(event){

        userScore = userPoints
        console.log(userScore + " is now " + userPoints + ".");
        alert("Correct! You've earned 20 points");


    })

    answerChoiceThree.addEventListener('click', function(event){

        alert("Incorrect!");

    })

    answerChoiceFour.addEventListener('click', function(event){

        alert("Incorrect!");


    })


}

beginQuizEl.addEventListener("click", startQuiz);