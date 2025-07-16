let innerLayout = document.querySelector(".inner-layout");
let Btn = document.querySelector(".btn");
let secondDisplay = document.querySelector(".second-display");
let height = document.querySelector("#height");
let weight = document.querySelector("#weight");
let calc = document.querySelector(".calculate");
let thirdDisplay = document.querySelector(".third-display");
let texts = document.querySelector(".texts");
let content = document.querySelector(".content");
let checkAgain = document.querySelector(".check-again");

secondDisplay.style.display = "none";
thirdDisplay.style.display = "none";

//open another display
Btn.addEventListener("click", () => {
  innerLayout.style.display = "none";
  secondDisplay.style.display = "block";
  thirdDisplay.style.display = "none";
});

calc.addEventListener("click", () => {
  innerLayout.style.display = "none";
  secondDisplay.style.display = "none";
  thirdDisplay.style.display = "block";
  calculate();
});

checkAgain.addEventListener("click", () => {
  innerLayout.style.display = "none";
  secondDisplay.style.display = "block";
  thirdDisplay.style.display = "none";
  height.value = "";
  weight.value = "";
});

const calculate = () => {
  let w = weight.value;
  let h = height.value / 100;

  // let validHeight = height.value >= 91.4 && height.value  <= 271.8;
  // let validWeight = weight.value >= 25 && weight.value <= 454;

  // if (!validHeight || !validWeight) {
  //   texts.innerText =
  //   "Height range: 91.4cm - 271.8cm and Weight range: 25kg - 454kg";
  //   content.innerText =
  //   "You have entered the wrong data that can't be considered";
  //   return;
  // }

  let BMI = w / (h * h);
  BMI = BMI.toFixed(2);
  // console.log(BMI);

  if (BMI < 18.5) {
    texts.innerText = `Your BMI is ${BMI}`;

    content.innerText = "Your interpretation is Under weight";
    content.style.color = "red";
    content.style.fontSize = "1.5rem";
  } else if (BMI >= 18.5 && BMI < 25) {
    texts.innerText = `Your BMI is ${BMI}`;
    content.innerText = "Your interpretation is Healthy weight";
    content.style.color = "green";
    content.style.fontSize = "1.5rem";
  } else if (BMI >= 25 && BMI < 30) {
    texts.innerText = `Your BMI is ${BMI}`;
    content.innerText = "Your interpretation is Over weight";
    content.style.color = "orange";
    content.style.fontSize = "1.5rem";
  } else {
    texts.innerText = `Your BMI is ${BMI}`;
    content.innerText = "Your interpretation is Obese";
    content.style.color = "red";
    content.style.fontSize = "1.5rem";
  }
  error();
};

const error = () => {
  let w = weight.value;
  let h = height.value / 100;

  let validHeight = h * 100 >= 91.4 && h * 100 <= 271.8;
  let validWeight = w >= 25 && w <= 454;

  if (!validHeight || !validWeight) {
    texts.innerText =
      "Height range: 91.4cm - 271.8cm and Weight range: 25kg - 454kg";
    content.innerText =
      "You have entered the wrong data that can't be considered";
    content.style.color = "black";
    return;
  }
};
