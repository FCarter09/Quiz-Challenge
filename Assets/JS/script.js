


var beginQuizEl = document.querySelector("#start-quiz");
var time = 60;

 
// start quiz on intro page
var startQuiz = function(){

    

    var beginQuizEl = document.querySelector("#start-quiz");
    alert("The quiz has begun, timer has started at 60 seconds!");
    timer();
    questionOne();


}

// add event listener to start quiz button
beginQuizEl.addEventListener("click", startQuiz);

// timer function
var timer = function() {

    var timeRemaining = document.querySelector("#timeRemaining")

     // starts timer countdown starting from value of timeLeft
    var countDown = setInterval(function() {
        time--;
        timeRemaining.textContent = time;
        console.log(time);

        if (time <= 0) {
            clearInterval(countDown);   // stops at 0
            // timerElement.textContent = "Make final choice and game will end!";
        }
    }, 1000);    //counts in milliseconds. 1000ms = 1second
}

// question one function
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

        time -= 20

        questionTwo();
    })

    answerChoiceTwo.addEventListener('click', function(event){

        alert("Incorrect!");

        time -= 20

        questionTwo();
    })

    answerChoiceThree.addEventListener('click', function(event){

        alert("Incorrect!");

        time -= 20


        questionTwo();
    })

    answerChoiceFour.addEventListener('click', function(event) {
        
        time += 20

        alert("Correct! You've earned 20 points. User score is now" + time + ".");

        console.log(" User Score is now " + time + ".");

        questionTwo();
    })

    // execute next function to start next question

}

//question two function
var questionTwo = function() {

    // delete question one

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

        time -= 20
        

        questionThree();
    })

    answerChoiceTwo.addEventListener('click', function(event){

        alert("Incorrect!");

        time -= 20


        questionThree();

    })

    answerChoiceThree.addEventListener('click', function(event){
        
        time += 20

        alert("Correct! You've earned 20 points. User score is now" + time + ".");

        console.log( " User Score is now " + time + ".");

        questionThree();

    })

    answerChoiceFour.addEventListener('click', function(event) {
        
        alert("Incorrect!");

        time -= 20

        questionThree();
})

}

// question three function
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

        time -= 20

        conclusionPage();

    })

    answerChoiceTwo.addEventListener('click', function(event){
        
        time += 20

        alert("Correct! You've earned 20 points. User score is now" + time + ".");

        console.log("User score is now " + time + ".");
        
        conclusionPage();


    })

    answerChoiceThree.addEventListener('click', function(event){

        alert("Incorrect!");

        time -= 20
        
        conclusionPage();

    })

    answerChoiceFour.addEventListener('click', function(event){

        alert("Incorrect!");

        time -= 20
       
        conclusionPage();


    })

}

// conclusion function
var conclusionPage = function() {

    var finalScore = time

    var questionThreeEl = document.querySelector("div");
    questionThreeEl.remove();
    console.log("removing questionTwoEl");

    //remove answer buttons for questionThreeEl
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

     var conclusion = document.createElement("h1");
    conclusion.className = "conclusion";
    conclusion.textContent = "All Done!";
    bodyTag.appendChild(conclusion);

    var message = document.createElement("p");
    message.className = "message";
    message.textContent = "Your final score is: " + finalScore;
    bodyTag.appendChild(message);

    var initials = document.createElement("p")
    initials.className = "initials"
    initials.textContent = "Enter initials:"
    bodyTag.appendChild(initials)

    var input = document.createElement("input")
    input.className = "initialsInput"
    bodyTag.appendChild(input)

    var submitButton = document.createElement("button")
    submitButton.className = "submit-score-button"
    submitButton.textContent = "Submit"
    bodyTag.appendChild(submitButton)

    // add event listener to submit button
    submitButton.addEventListener("click", function() {
    // should save final score + initials in local storage. 
    
    console.log('This is working');

    var input = document.querySelector(".initialsInput").value
    // var initialsInput = "Initials"

    //sets item to local storage
    localStorage.setItem(input, JSON.stringify(finalScore))



    })


}

