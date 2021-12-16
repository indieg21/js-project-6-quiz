let answerList = ["New York City", "Paris", "Five"];

let answer1 = document.querySelectorAll(".answer1");
let answer2 = document.querySelectorAll(".answer2");
let answer3 = document.querySelectorAll(".answer3");

let result1 = document.querySelector(".result1");
let result2 = document.querySelector(".result2");
let result3 = document.querySelector(".result3");

function checkAnswer1() {
  let answer = undefined;
  console.log(answer1);
  answer1.forEach((answerElement) => {
    console.log(answerElement);

    if (answerElement.checked) {
      answer = answerElement.value;
    }
  });

  // let element = document.createElement("h3");
  if (answer === answerList[0]) {
    result1.innerHTML = `
            <h3>You answer is correct : ${answer}</h3>
    `;
  } else {
    result1.innerHTML = `
    <h3> You have selected the worng answer:
    The correct answer is ${answerList[0]} </h3>`;
  }
}

function checkAnswer2() {
  let answer = undefined;
  answer2.forEach((answerElement) => {
    if (answerElement.checked) {
      answer = answerElement.value;
    }
  });

  if (answer === answerList[1]) {
    result2.innerHTML = `<h3>You answer is correct : ${answer}</h3>`;
  } else {
    result2.innerHTML = `
    <h3>You have selected the worng answer and 
    the correct answer is ${answerList[1]}</h3>`;
  }
}

function checkAnswer3() {
  let answer = undefined;
  answer3.forEach((answerElement) => {
    if (answerElement.checked) {
      answer = answerElement.value;
    }
  });

  if (answer === answerList[2]) {
    result3.innerHTML = `
    <h3>You answer is correct : ${answer}</h3>
    `;
  } else {
    result3.innerHTML = `
    <h3>You have selected the worng answer and
    The correct answer is ${answerList[2]}</h3>   
`;
  }
}
