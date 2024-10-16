const display = document.querySelector("#display");
const buttons = document.querySelector(".buttons");
let num1 = "";
let num2 = "";
let operator = "";

const add = function (num1, num2) {
  return num1 + num2;
};
const subtract = function (num1, num2) {
  return num1 - num2;
};
const multiply = function (num1, num2) {
  return num1 * num2;
};
const divide = function (num1, num2) {
  if (num2 === 0) {
    return "Cannot divide by zero";
  }
  return num1 / num2;
};

const operate = function (num1, operator, num2) {
  if (operator === "+") {
    return add(num1, num2);
  } else if (operator === "-") {
    return subtract(num1, num2);
  } else if (operator === "*") {
    return multiply(num1, num2);
  } else if (operator === "/") {
    return divide(num1, num2);
  }
};

let displayValue = "";
buttons.addEventListener("click", (event) => {
  //if clear, then set displayValue to ""
  //if enter, run function that computes
  //add logic that can take more than single digit num, decimals too
  //if delete, remove last entered value not whole thing
  //need to connect these so they are stored as num1, num2, and displayValue
  //once compute completed, store value as display
  if (event.target.tagName === "BUTTON") {
    let buttonValue = event.target.textContent;
    display.textContent = buttonValue;
  }
});
