let AScore = 0;
let BScore = 0;
let CScore = 0;
let DScore = 0;

let questionCount = 0;

/*Store HTML elements using the DOM*/
let result = document.getElementById("result");

//restart code
let restart = document.getElementById("restart");

//question code
let q1a1 = document.getElementById("q1a1");
let q1a2 = document.getElementById("q1a2");
let q1a3 = document.getElementById("q1a3");
let q1a4 = document.getElementById("q1a4");

let q2a1 = document.getElementById("q2a1");
let q2a2 = document.getElementById("q2a2");
let q2a3 = document.getElementById("q2a3");
let q2a4 = document.getElementById("q2a4");

let q3a1 = document.getElementById("q3a1");
let q3a2 = document.getElementById("q3a2");
let q3a3 = document.getElementById("q3a3");
let q3a4 = document.getElementById("q3a4");

let q4a1 = document.getElementById("q4a1");
let q4a2 = document.getElementById("q4a2");
let q4a3 = document.getElementById("q4a3");
let q4a4 = document.getElementById("q4a4");

let q5a1 = document.getElementById("q5a1");
let q5a2 = document.getElementById("q5a2");
let q5a3 = document.getElementById("q5a3");
let q5a4 = document.getElementById("q5a4");


//listen for click on answer button and call function if clicked
q1a1.addEventListener("click", A);
q1a2.addEventListener("click", B);
q1a3.addEventListener("click", C);
q1a4.addEventListener("click", D);

q2a1.addEventListener("click", A);
q2a2.addEventListener("click", B);
q2a3.addEventListener("click", C);
q2a4.addEventListener("click", D);

q3a1.addEventListener("click", A);
q3a2.addEventListener("click", B);
q3a3.addEventListener("click", C);
q3a4.addEventListener("click", D);

q4a1.addEventListener("click", A);
q4a2.addEventListener("click", B);
q4a3.addEventListener("click", C);
q4a4.addEventListener("click", D);

q5a1.addEventListener("click", A);
q5a2.addEventListener("click", B);
q5a3.addEventListener("click", C);
q5a4.addEventListener("click", D);



//restart code
restart.addEventListener("click", restartTest);

// Track A score and check if quiz is complete
function A() {
AScore +=1;
questionCount +=1;

console.log("questionCount = " + questionCount + " AScore = " + AScore);

if (questionCount == 5) {
  console.log("The quiz is done!")
  updateResult();
}

}

//Track B score and check if quiz is complete
function B() {
BScore +=1;
questionCount +=1;

console.log("questionCount = " + questionCount + " BScore = " + BScore);

if (questionCount == 5) {
  console.log("The quiz is done!")
  updateResult();
}

}

// Track C score and check if quiz is complete
function C() {
    CScore +=1;
    questionCount +=1;
    
    console.log("questionCount = " + questionCount + " CScore = " + CScore);
    
    if (questionCount == 5) {
      console.log("The quiz is done!")
      updateResult();
    }
    
    }

    // Track D score and check if quiz is complete
function D() {
    DScore +=1;
    questionCount +=1;
    
    console.log("questionCount = " + questionCount + " DScore = " + DScore);
    
    if (questionCount == 5) {
      console.log("The quiz is done!")
      updateResult();
    }
    
    }


//Determining personality code

function updateResult() {
      if (AScore >= 4) {
        result.innerHTML = "You are a Border Collie!";
      console.log("You are a Border Collie!");
    }else if (BScore >= 4) {
        result.innerHTML = "You are an Afghan Hound!";
      console.log("You are an Afghan Hound!");
    }else if (CScore >= 4) {
        result.innerHTML = "You are a Pug!";
      console.log("You are a Pug!");
    }else if (Score >= 4) {
        result.innerHTML = "You aren't actually a dog at all. You are my cat Benny!";
      console.log("You aren't actually a dog at all. You are my cat Benny!");
    }
}

//restart button code
function restartTest() {
  result.innerHTML = "You are..."
  dayScore = 0;
  nightScore = 0;
  questionCount = 0;
  console.log("questionCount = " + questionCount + "dayScore = " + dayScore + "nightScore" + nightScore)
}