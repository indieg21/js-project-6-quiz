let correctAnswer = ["New York City", "Paris", "Five"]; // all correct answers are stored in sequence order in an array

let answer1 = document.querySelectorAll(".answer1"); // here is each input box selected.
let answer2 = document.querySelectorAll(".answer2");
let answer3 = document.querySelectorAll(".answer3");

let quiz = document.querySelector(".quiz"); // selecting the form field
let displayResult = document.querySelector(".displayResult"); // div to display the result answer

quiz.addEventListener("submit", (e) => { // this is form submission
  e.preventDefault();
  console.log(quiz);
  let userSelection = [ // Array to store all answers. This is how to find the correct answers
    quiz.question1.value, //radio button values. Each selected radio buttons are here
    quiz.question2.value,
    quiz.question3.value,
  ];

  let result = ""; // empty variable to add the results
  userSelection.forEach((answer, index) => { //looping through the array of selected answers
    if (answer === correctAnswer[index]) { // check through each answers true or false for results
      result += `<h3>You answer is correct for question ${ 
        index + 1
      } : ${answer}</h3>`; // if the answer is correct the correct answer will be displayed
    } else {
      result += `<h3>You have selected the worng answer and 
    the correct answer for question ${index + 1} is : ${
        correctAnswer[index]
      }</h3>`; // if the answer is incorrect the correct answer will be displayed
    }
  });
  displayResult.innerHTML = result; // to reset the page after submit and getting answer results 
  let btn = document.createElement("button");
  btn.textContent = "Reset";
  btn.onclick = resetQuiz;
  displayResult.appendChild(btn);
});

function resetQuiz() {
  location.reload(); // fucntion to reload same page. Javascript built in fucntion
}
