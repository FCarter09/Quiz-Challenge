
var beginQuizEl = document.querySelector("#start-quiz")
var viewHighScore = document.querySelector('.high-scores')
var input
var finalScore
var time = 60; 
var countDown


 
// start quiz on intro page
var startQuiz = function(){
    
    alert("The quiz has begun, timer has started at 60 seconds!");
    // timer();
    questionOne();


}





// add event listener to start quiz button
beginQuizEl.addEventListener("click", startQuiz);





// timer function
 var timer = function() {
   
    var timeRemaining = document.querySelector("#timeRemaining")

     // starts timer countdown starting from value of timeLeft
     countDown = setInterval(function() {
        time--;
        timeRemaining.textContent = time; // sets timer as text
        // console.log(time);

        if (time <= 0) {
        
            clearInterval(countDown); // stops at 0

            alert("Game over! The timer has run out. Please click Ok to save your score.");

            // div elements from previous pages
            var removeDiv = document.querySelector(".question-one");
            removeDiv.remove();
            console.log("removing div");

            conclusionPage()
         } 
        
    }, 1000);    //counts in milliseconds. 1000ms = 1second

   
}





// question one function
var questionOne = function(){

    // remove intro screen div elements
    var introScreen = document.querySelector(".intro-screen");
    introScreen.remove();
    console.log("removing intro screen");

    //selecting body tag
    var bodyTag = document.querySelector("body");
    
    // create questionOneEl div/elements and add to body
    var questionOneEl = document.createElement("div");
    questionOneEl.className = "question-one";
    var questionOneText = document.createElement("p")
    questionOneText.className = "question-text"
    questionOneText.textContent = "Array in JavaScript can be used to store ___________.";
    questionOneEl.appendChild(questionOneText)
    bodyTag.appendChild(questionOneEl);

    //create answer choices and add to questionOne div/body
    var answerChoiceOne = document.createElement("button");
    answerChoiceOne.classList.add("answer-button")
    answerChoiceOne.textContent = "1. numbers and strings";
    questionOneEl.appendChild(answerChoiceOne);

    var answerChoiceTwo = document.createElement("button");
    answerChoiceTwo.classList.add("answer-button")
    answerChoiceTwo.textContent = "2. other arrays";
    questionOneEl.appendChild(answerChoiceTwo);

    var answerChoiceThree = document.createElement("button");
    answerChoiceThree.classList.add("answer-button")
    answerChoiceThree.textContent = "3. booleans";
    questionOneEl.appendChild(answerChoiceThree);

    var answerChoiceFour = document.createElement("button");
    answerChoiceFour.classList.add("answer-button")
    answerChoiceFour.textContent = "4. all of the above";
    questionOneEl.appendChild(answerChoiceFour);


    // add event listener to buttons
    answerChoiceOne.addEventListener('click', function(event) {

        time -= 20

        alert(" Incorrect! User score is now "  + time + ".");

        // remove questionOne div elements
        var questionOneEl = document.querySelector(".question-one");
        questionOneEl.remove();
        console.log("removing questionOneEl");

        questionTwo()

       
    })

    answerChoiceTwo.addEventListener('click', function(event){

        time -= 20

        alert(" Incorrect! User score is now "  + time + ".");

        // remove questionOne div elements
        var questionOneEl = document.querySelector(".question-one");
        questionOneEl.remove();
        console.log("removing questionOneEl");

        questionTwo()

    })

    answerChoiceThree.addEventListener('click', function(event){

        time -= 20

        alert(" Incorrect! User score is now "  + time + ".");

        // remove questionOne div elements
        var questionOneEl = document.querySelector(".question-one");
        questionOneEl.remove();
        console.log("removing questionOneEl");

        questionTwo()
    })

    answerChoiceFour.addEventListener('click', function(event) {
        
        time += 20

        alert(" Correct! You've earned 20 points. User score is now "  + time + ".");

        console.log(" User Score is now " + time + ".");

        // remove questionOne div elements
        var questionOneEl = document.querySelector(".question-one");
        questionOneEl.remove();
        console.log("removing questionOneEl");

        questionTwo();
    })


     // if time is less or equal to 0, clear elements on questionOne so conclusionPage() can run in the timer()
    //  if (time <= 0) {


        // remove questionOne div elements
        // var questionOneEl = document.querySelector(".question-one");
        // questionOneEl.remove();
        // console.log("removing questionOneEl");

        // // remove answer buttons for questionOneEl
        // var answerChoiceOne = document.querySelector("button")
        // answerChoiceOne.remove();
        // console.log("removing answerChoiceOne");

        // var answerChoiceTwo = document.querySelector("button")
        // answerChoiceTwo.remove();
        // console.log("removing answerChoiceTwo");  

        // var answerChoiceThree = document.querySelector("button")
        // answerChoiceThree.remove();
        // console.log("removing answerChoiceThree"); 

        // var answerChoiceFour = document.querySelector("button")
        // answerChoiceFour.remove();
        // console.log("removing answerChoiceFour"); 

    //   } 

 }


  

//question two function
var questionTwo = function() {

  // remove answer buttons for questionOneEl
//   var answerChoiceOne = document.querySelector("button")
//     answerChoiceOne.remove();
//     console.log("removing answerChoiceOne");

//   var answerChoiceTwo = document.querySelector("button")
//     answerChoiceTwo.remove();
//     console.log("removing answerChoiceTwo");  

//     var answerChoiceThree = document.querySelector("button")
//     answerChoiceThree.remove();
//     console.log("removing answerChoiceThree"); 

//     var answerChoiceFour = document.querySelector("button")
//     answerChoiceFour.remove();
//     console.log("removing answerChoiceFour"); 

    

    //selecting body tag
    var bodyTag = document.querySelector("body");
        
    // create questionTwo div/elements and add to body
    var questionTwoEl = document.createElement("div");
    questionTwoEl.className = "question-two";
    var questionTwoText = document.createElement("p")
    questionTwoText.className = 'question-text'
    questionTwoText.textContent = "String values must be enclosed within ___________ when being assigned to variables.";
    questionTwoEl.appendChild(questionTwoText)
    bodyTag.appendChild(questionTwoEl);

    //create answer choices and add to questionTwo div/body
    var answerChoiceOne = document.createElement("button");
    answerChoiceOne.classList.add("answer-button")
    answerChoiceOne.textContent = "1. commas";
    questionTwoEl.appendChild(answerChoiceOne);

    var answerChoiceTwo = document.createElement("button");
    answerChoiceTwo.classList.add("answer-button")
    answerChoiceTwo.textContent = "2. curly brackets";
    questionTwoEl.appendChild(answerChoiceTwo);


    var answerChoiceThree = document.createElement("button");
    answerChoiceThree.classList.add("answer-button")
    answerChoiceThree.textContent = "3. quotes";
    questionTwoEl.appendChild(answerChoiceThree);

    var answerChoiceFour = document.createElement("button");
    answerChoiceFour.classList.add("answer-button")
    answerChoiceFour.textContent = "4. parenthesis";
    questionTwoEl.appendChild(answerChoiceFour);   
        
    // add event listener to buttons
    answerChoiceOne.addEventListener('click', function(event) {

        time -= 20

        alert(" Incorrect! User score is now "  + time + ".");

        // remove questionTwo div elements
        var questionTwoEl = document.querySelector(".question-two");
        questionTwoEl.remove();
        console.log("removing questionTwoEl");

        questionThree()
    })

    answerChoiceTwo.addEventListener('click', function(event){

        time -= 20

        alert(" Incorrect! User score is now "  + time + ".");

        // remove questionTwo div elements
        var questionTwoEl = document.querySelector(".question-two");
        questionTwoEl.remove();
        console.log("removing questionTwoEl");

        questionThree()

    })

    answerChoiceThree.addEventListener('click', function(event){

        time += 20

        alert(" Correct! You've earned 20 points. User score is now "  + time + ".");

        console.log( " User Score is now " + time + ".");

        // remove questionTwo div elements
        var questionTwoEl = document.querySelector(".question-two");
        questionTwoEl.remove();
        console.log("removing questionTwoEl");

        questionThree();

    })

    answerChoiceFour.addEventListener('click', function(event) {
        

        time -= 20

        alert(" Incorrect! User score is now "  + time + ".");

        // remove questionTwo div elements
        var questionTwoEl = document.querySelector(".question-two");
        questionTwoEl.remove();
        console.log("removing questionTwoEl");

        questionThree()
    })

    

    // if time is less or equal to 0, clear elements on questionTwo so conclusionPage() can run in the timer()
    // if (time <= 0) {

    //     // remove question two div elements
    //     var questionTwoEl = document.querySelector(".question-two");
    //     questionTwoEl.remove();
    //     console.log("removing questionTwoEl");
    
    // //     //remove answer buttons for questionTwoEl
    // //     // var answerChoiceOne = document.querySelector("button")
    // //     // answerChoiceOne.remove();
    // //     // console.log("removing answerChoiceOne");
    
    // //     // var answerChoiceTwo = document.querySelector("button")
    // //     // answerChoiceTwo.remove();
    // //     // console.log("removing answerChoiceTwo");  
    
    // //     // var answerChoiceThree = document.querySelector("button")
    // //     // answerChoiceThree.remove();
    // //     // console.log("removing answerChoiceThree"); 
    
    // //     // var answerChoiceFour = document.querySelector("button")
    // //     // answerChoiceFour.remove();
    // //     // console.log("removing answerChoiceFour"); 
        
    // }


}





// question three function
var questionThree = function(){

    //remove answer buttons for questionTwoEl
    // var answerChoiceOne = document.querySelector("button")
    // answerChoiceOne.remove();
    // console.log("removing answerChoiceOne");

    // var answerChoiceTwo = document.querySelector("button")
    // answerChoiceTwo.remove();
    // console.log("removing answerChoiceTwo");  

    // var answerChoiceThree = document.querySelector("button")
    // answerChoiceThree.remove();
    // console.log("removing answerChoiceThree"); 

    // var answerChoiceFour = document.querySelector("button")
    // answerChoiceFour.remove();
    // console.log("removing answerChoiceFour"); 


    //selecting body tag
    var bodyTag = document.querySelector("body")
       
    // create questionThree div/elements and add to body
    var questionThreeEl = document.createElement("div");
    questionThreeEl.className = "question-three";
    var questionThreeText = document.createElement("p");
    questionThreeText.className = "question-text"
    questionThreeText.textContent = "The condition in an if/else statement is enclosed with ___________.";
    questionThreeEl.appendChild(questionThreeText);
    bodyTag.appendChild(questionThreeEl);
   
    //create answer choices and add to body
    var answerChoiceOne = document.createElement("button");
    answerChoiceOne.classList.add("answer-button")
    answerChoiceOne.textContent = "1. quotes";
    questionThreeEl.appendChild(answerChoiceOne);
   
    var answerChoiceTwo = document.createElement("button");
    answerChoiceTwo.classList.add("answer-button")
    answerChoiceTwo.textContent = "2. curly brackets";
    questionThreeEl.appendChild(answerChoiceTwo);
   
   
    var answerChoiceThree = document.createElement("button");
    answerChoiceThree.classList.add("answer-button")
    answerChoiceThree.textContent = "3. parenthesis";
    questionThreeEl.appendChild(answerChoiceThree);
   
    var answerChoiceFour = document.createElement("button");
    answerChoiceFour.classList.add("answer-button")
    answerChoiceFour.textContent = "4. square brackets";
    questionThreeEl.appendChild(answerChoiceFour);  

    answerChoiceOne.addEventListener('click', function(event){

        time -= 20

        alert(" Incorrect! User score is now "  + time + ".");

        //remove questionThree div elements 
        var questionThreeEl = document.querySelector(".question-three");
        questionThreeEl.remove();
        console.log("removing questionThree");


        conclusionPage()

    })

    answerChoiceTwo.addEventListener('click', function(event){
        
         time += 20 


        alert(" Correct! You've earned 20 points. User score is now "  + time + ".");

        console.log("User score is now " + time + ".");

        //remove questionThree div elements 
        var questionThreeEl = document.querySelector(".question-three");
        questionThreeEl.remove();
        console.log("removing questionThree");

        
        conclusionPage();



    })

    answerChoiceThree.addEventListener('click', function(event){

        time -= 20

        alert(" Incorrect! User score is now "  + time + ".");

        //remove questionThree div elements 
        var questionThreeEl = document.querySelector(".question-three");
        questionThreeEl.remove();
        console.log("removing questionThree");


        conclusionPage()

    })

    answerChoiceFour.addEventListener ('click', function(event){

        time -= 20

        alert(" Incorrect! User score is now "  + time + ".");

        //remove questionThree div elements 
        var questionThreeEl = document.querySelector(".question-three");
        questionThreeEl.remove();
        console.log("removing questionThree");

       
        conclusionPage()


    })


    // if time is less or equal to 0, clear elements on questionThree so conclusionPage() can run in the timer()
    //  if (time <= 0) {   


    //     //remove questionThree div elements
    //     var questionThreeEl = document.querySelector(".question-three");
    //     questionThreeEl.remove();
    //     console.log("removing questionThreeEl");

    // //     //remove answer buttons for questionThreeEl
    // //     // var answerChoiceOne = document.querySelector("button")
    // //     // answerChoiceOne.remove();
    // //     // console.log("removing answerChoiceOne");

    // //     // var answerChoiceTwo = document.querySelector("button")
    // //     // answerChoiceTwo.remove();
    // //     // console.log("removing answerChoiceTwo");  

    // //     // var answerChoiceThree = document.querySelector("button")
    // //     // answerChoiceThree.remove();
    // //     // console.log("removing answerChoiceThree"); 

    // //     // var answerChoiceFour = document.querySelector("button")
    // //     // answerChoiceFour.remove();
    // //     // console.log("removing answerChoiceFour"); 

        


    // } 
}





// conclusion function
var conclusionPage = function() {


    // the users final score is the time remaining
    var finalScore = time

    // stops timer
    clearInterval(countDown)

    // clear time from page
    var endTimer = document.querySelector("#timeRemaining")
    endTimer.remove()

   
    //remove answer buttons for questionThreeEl
    // var answerChoiceOne = document.querySelector("button")
    // answerChoiceOne.remove();
    // console.log("removing answerChoiceOne");

    // var answerChoiceTwo = document.querySelector("button")
    // answerChoiceTwo.remove();
    // console.log("removing answerChoiceTwo");  

    // var answerChoiceThree = document.querySelector("button")
    // answerChoiceThree.remove();
    // console.log("removing answerChoiceThree"); 

    // var answerChoiceFour = document.querySelector("button")
    // answerChoiceFour.remove();
    // console.log("removing answerChoiceFour"); 

    //selecting body tag
    var bodyTag = document.querySelector("body")

    // create conclusion div
    var conclusionDiv = document.createElement('div')
    conclusionDiv.className = "conclusion-div"
    bodyTag.appendChild(conclusionDiv)
    

    // put timer back on page with finalScore as its value
    var headerEl = document.querySelector('header')
    var timeValue = document.querySelector('.time')
    headerEl.appendChild(timeValue)
    var spanTime = document.createElement('span')
    spanTime.textContent = finalScore
    spanTime.setAttribute("id",'timeRemaining')
    timeValue.appendChild(spanTime)

    // create elements for conclusion page
    var conclusion = document.createElement("h1");
    conclusion.className = "conclusion";
    conclusion.textContent = "All Done!";
    conclusionDiv.appendChild(conclusion);

    var message = document.createElement("p");
    message.className = "message";
    message.textContent = "Your final score is: " + finalScore;
    conclusionDiv.appendChild(message);

    var input = document.createElement("input")
    input.placeholder = "Enter Initials"
    input.className = "initialsInput"
    conclusionDiv.appendChild(input)

    var submitButton = document.createElement("button")
    submitButton.className = "submit-score-button"
    submitButton.textContent = "Submit"
    conclusionDiv.appendChild(submitButton)


    // add event listener to submit button
    submitButton.addEventListener("click", function() {
    // should save final score + initials in local storage. 
    
    console.log('This is working');
    
    // variable to get value of initialsInput
    var input = document.querySelector(".initialsInput").value
    


    // get data out of local storage
    var allUsersData = JSON.parse(localStorage.getItem("finalScores") || "[]");

    // create object with input and final score
    var userData = {
         initials: input,
         score: finalScore

    }

    // add user data to all users data
    allUsersData.push(userData)

    //sets item to local storage
    localStorage.setItem('finalScores', JSON.stringify(allUsersData))

    finalPage()

    })
}





// final page function
var finalPage = function() {

    // remove elements from previous page(conclusion page)
    var header = document.querySelector("header")
    header.remove();

    var conclusion = document.querySelector(".conclusion")
    conclusion.remove();

    var message = document.querySelector(".message")
    message.remove();

    // var initials = document.querySelector(".initials")
    // initials.remove();

    var initialInput = document.querySelector(".initialsInput")
    initialInput.remove();

    var submitButton = document.querySelector(".submit-score-button")
    submitButton.remove()


    //selecting body tag
    var bodyTag = document.querySelector("body")

     // create div container for 'go back' button, 'clear scores' button, and list items
     var liButtonDiv = document.createElement("div")
     liButtonDiv.className = "li-button-div"
     bodyTag.appendChild(liButtonDiv)

    // create elements for final page
    var highScores = document.createElement("h1");
    highScores.className = "high-scores";
    highScores.textContent = "High scores";
    liButtonDiv.appendChild(highScores);

    // pull initials and score from local storage 
    var allScores = JSON.parse(localStorage.getItem("finalScores") || "[]");
    console.log('all scores', allScores);

    // sort items in finalScores in descending order by their 'score' value
    var sortedScores = allScores.sort((a, b) => (a.score - b.score)).reverse()
    console.log("before:", sortedScores);

    // limit array(list) to just top 5 highest scores
    sortedScores = sortedScores.slice(0,5)
    console.log("after:", sortedScores);

    

    // put scores onto page, loop over all sorted scores
    for (var i = 0; i < sortedScores.length; i++) {
        
        // create list items and put inside liButtonDiv
        var listItem = document.createElement("li")
        listItem.className = "saved-score-item"
        listItem.textContent = (JSON.stringify(sortedScores[i])).replace('{"initials":"', '')// removes unneeded characters from sortedScores[i] string
        .replace('","score":', '-').replace('}', '')// removes unneeded characters from sortedScores[i] string, is connected to line above
        listItem.setAttribute("type", "1")
        liButtonDiv.appendChild(listItem)

    }

     // create go back button
     var goBackButton = document.createElement("button")
     goBackButton.className = "go-back-button"
     goBackButton.textContent = "Go back"
     liButtonDiv.appendChild(goBackButton)
 
     // create clear score button
     var clearScoresButton = document.createElement("button")
     clearScoresButton.className = "clear-scores-button"
     clearScoresButton.textContent = "Clear high scores"
     liButtonDiv.appendChild(clearScoresButton)


    // add event listener to 'go back' button
    goBackButton.addEventListener("click", function() {
            
        restartQuiz()

    })


    // add event listener to 'clear scores' button
    clearScoresButton.addEventListener('click', function() {

        // select all html that has class of saved-score-items
        var allListItems = document.querySelectorAll('.saved-score-item')
        
        // delete all list items from page
        for (var i = 0; i < allListItems.length; i++) {
    
            allListItems[i].remove()
        

        }

        // delete list items from local storage
        window.localStorage.removeItem('finalScores');

    })
}





// this function restarts quiz when called
var restartQuiz = function() {

    // clear finalPage content
    var highScores = document.querySelector("h1")
    highScores.remove()

    var liButtonDiv = document.querySelector(".li-button-div")
    liButtonDiv.remove()

     //selecting body tag
     var bodyTag = document.querySelector("body");

     // create Start Quiz page elements
     var header = document.createElement("header")
     bodyTag.appendChild(header)

     var viewHighScore = document.createElement('p')
     viewHighScore.className = 'high-scores'
     viewHighScore.textContent = 'View High Scores'
     header.appendChild(viewHighScore)

     var p = document.createElement('p')
     p.className = 'time'
     p.textContent = 'Time Remaining:'
     var span = document.createElement('span')
     span.textContent = ''
     span.setAttribute("id",'timeRemaining')
     p.appendChild(span)
     header.appendChild(p)

     var introScreen = document.createElement('div')
     introScreen.className = ('intro-screen')
     bodyTag.appendChild(introScreen)

     var title = document.createElement('h1')
     title.textContent = 'Coding Challenge Quiz'
     title.className = 'title'
     introScreen.appendChild(title)

     var directions = document.createElement('p')
     directions.className = 'directions'
     directions.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that the correct answers will add 20 seconds to your current score/time and incorrect answers will penalize your score/time by 20 seconds!"
     introScreen.appendChild(directions)

     var startQuizButton = document.createElement('button')
     startQuizButton.textContent = 'Start Quiz'
     startQuizButton.className = 'btn'
     startQuizButton.setAttribute('id', 'start-quiz')
     startQuizButton.setAttribute('type', 'click')
     introScreen.appendChild(startQuizButton)

     // addEventListener for 'View High Scores" on restartQuiz() page
     viewHighScore.addEventListener("click", function(){
        
       viewHighScores()

     })

     // add event listener to start quiz button
    startQuizButton.addEventListener("click", function(){

        // reset timer to 60 seconds
       
        alert("The quiz has begun, timer has started at 60 seconds!");
        time = 60
        timer();
        questionOne();



    });

}





// add eventListener for 'View High Scores'
var viewHighScores = function(){

    // stop timer
    clearInterval(countDown)


    //selecting body tag
    var bodyTag = document.querySelector("body")
    bodyTag.remove()

    // create new elements for 'View High Scores' page
    var bodyTag = document.createElement("body")
    document.documentElement.appendChild(bodyTag)

     var highScores = document.createElement("h1");
     highScores.className = "high-scores";
     highScores.textContent = "High scores";
     bodyTag.appendChild(highScores);
 
     // create div container for 'go back' button, 'clear scores' button, and list items
     var liButtonDiv = document.createElement("div")
     liButtonDiv.className = "li-button-div"
     bodyTag.appendChild(liButtonDiv)
     
     // pull initials and score from local storage 
     var allScores = JSON.parse(localStorage.getItem("finalScores") || "[]");
     console.log('all scores', allScores);
 
     // sort items in finalScores in descending order by their 'score' value
     var sortedScores = allScores.sort((a, b) => (a.score - b.score)).reverse()
     console.log("before:", sortedScores);
 
     // limit array(list) to just top 5 highest scores
     sortedScores = sortedScores.slice(0,5)
     console.log("after:", sortedScores);
 
     
 
     // put scores onto page, loop over all sorted scores
     for (var i = 0; i < sortedScores.length; i++) {
         
         // create list items and put inside liButtonDiv
         var listItem = document.createElement("li")
         listItem.className = "saved-score-item"
         listItem.textContent = (JSON.stringify(sortedScores[i])).replace('{"initials":"', '')// removes unneeded characters from sortedScores[i] string
         .replace('","score":', '-').replace('}', '')// removes unneeded characters from sortedScores[i] string, is connected to line above
         listItem.setAttribute("type", "1")
         liButtonDiv.appendChild(listItem)
 
     }

      // create go back button
      var goBackButton = document.createElement("button")
      goBackButton.className = "go-back-button"
      goBackButton.textContent = "Go back"
      liButtonDiv.appendChild(goBackButton)
  
      // create clear score button
      var clearScoresButton = document.createElement("button")
      clearScoresButton.className = "clear-scores-button"
      clearScoresButton.textContent = "Clear high scores"
      liButtonDiv.appendChild(clearScoresButton)
 
 
//      // add event listener to 'go back' button
     goBackButton.addEventListener("click", function() {
             
         restartQuiz()
 
     })
 
 
     // add event listener to 'clear scores' button on 'View High Scores' page
     clearScoresButton.addEventListener('click', function() {
 
        // select all html that has class of saved-score-items
        var allListItem = document.querySelectorAll('.saved-score-item')
        
        // delete all list items from page
        for (var i = 0; i < allListItem.length; i++) {
    
            allListItem[i].remove()
        

        }

        // delete list items from local storage
        window.localStorage.removeItem('finalScores');

    })
    
}

// addEventListener for 'View High Scores" on restartQuiz() page
viewHighScore.addEventListener("click", function(){
        
    viewHighScores()

})


