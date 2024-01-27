//functions for the operations.
const add = (num1, num2) => (num1 + num2);
const subtract = (num1, num2) => (num1 - num2);
const multiply = (num1, num2) => (num1 * num2);
const divide = (num1, num2) => (num1 / num2);
const modulo = (num1, num2) => (num1 % num2);

// variables declared to store the operands.
let firstNumber = "";
let operator = "";
let secondNumber = "";
let total = 0;

// function that runs the operation using the operands.
const operate = (firstNum, secondNum, operator) => {
    
    if (operator === "+") {
         total = add(parseFloat(firstNum), parseFloat(secondNum));
        display.textContent = parseFloat(total.toFixed(6));
    }
    else if(operator === "-") {
        total = subtract(parseFloat(firstNum), parseFloat(secondNum));
        display.textContent = parseFloat(total.toFixed(6));
    }
    else if(operator === "*") {
        total = multiply(parseFloat(firstNum), parseFloat(secondNum));
        display.textContent = parseFloat(total.toFixed(6));
    }
    else if(operator === "/") {
        if(secondNum === "0") {
            display.textContent = "Cannot divide by zero!";
        }
        else {
        total = divide(parseFloat(firstNum), parseFloat(secondNum));
        display.textContent = parseFloat(total.toFixed(6));
        }
    }
    else if(operator === "%") {
        total = modulo(parseFloat(firstNum), parseFloat(secondNum));
        display.textContent = parseFloat(total.toFixed(6));
    }
}
// DOM elements
const calculator = document.querySelector(".calculator");
const display =  document.querySelector(".display");
const miniDisplay = document.querySelector(".mini-display");
const container = document.querySelector(".container");
const digits = document.querySelectorAll(".digit");
const clear = document.querySelector("#clear");
const backSpace = document.querySelector("#back-space");
const decimal = document.querySelector("#decimal");
const opposite = document.querySelector("#opposite");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");
const currentYear = document.querySelector("#year");

currentYear.textContent = new Date().getFullYear() + " ";  //current year in the footer.

let storedValue = "";

//function to populate the main display every time a number is clicked.
const displayValue = (number) => {
    const inputNumber = display.textContent;
    if (inputNumber.length < 16) {
        display.textContent = parseFloat(inputNumber + number).toString();
    }
}
// event listener for every number button.
digits.forEach(digit => digit.addEventListener("click", () => {

    displayValue(digit.id);
    if(operator === "") {
        storedValue = display.textContent;
        firstNumber = storedValue;
    }
    
    else if(operator !== "") {
        
        storedValue = display.textContent;
        secondNumber = storedValue;
    }
}));

//function to clear all data
const clearDisplay =() => { 
    display.textContent = 0;
    miniDisplay.textContent ="";
    operator = "";
    firstNumber = "";
    secondNumber = "";
    storedValue = "";
    currentOperator = "";
    previousOperator = "";
    clickedOperatorArr = [];
}
//function to remove last entered number
const removeDigit = () => {
    if(display.textContent.length === 1){
        display.textContent = 0;
    }
    else {
    display.textContent = display.textContent.slice(0, display.textContent.length -1)
    }
}
//function to add a decimal .
const addDecimal = () => {
     if(display.textContent.indexOf(".") === -1) {
        display.textContent += "."; 
    }
}
//function to add negative numbers.
const reverseNumber = () => {
    if(operator === "") {
        display.textContent = display.textContent * -1;
        firstNumber = display.textContent;
    }
    else {
        display.textContent = display.textContent * -1;
        secondNumber = display.textContent;
    }  
}

//event listeners to clear all data, remove last number, add decimal and negative numbers.
clear.addEventListener("click" ,clearDisplay);

backSpace.addEventListener("click", removeDigit);

let decimalAllowed = false;

decimal.addEventListener("click", addDecimal);

opposite.addEventListener("click", reverseNumber);

// variables declared for current and previous operators as well as array to store them in.
let clickedOperatorArr = [];
let currentOperator = "";
let previousOperator = "";

// event listener for every operator button.
operators.forEach(currOpp => currOpp.addEventListener("click", ()=> {
    
    operator = currOpp.id;
    display.textContent = "";
    clickedOperatorArr += operator;

    if(clickedOperatorArr.length === 1) {
      miniDisplay.textContent += firstNumber + " " + clickedOperatorArr[0] + " ";
    }
    else if(clickedOperatorArr.length > 1) {

      for(let i= 0; i < clickedOperatorArr.length; i++) {
        currentOperator = clickedOperatorArr[i];
        previousOperator = clickedOperatorArr[i - 1];
      }
      operate(firstNumber, secondNumber, previousOperator);
      firstNumber = display.textContent;
      miniDisplay.textContent = firstNumber + " " + currentOperator;
      display.textContent = ""; 
    }
}));

// event listener for the equal button.
equals.addEventListener("click", () => {
    if(operator !== "") {
        secondNumber = display.textContent;
        operate(firstNumber, secondNumber, operator);
        display.style.fontSize = "2em";
    }
    
    miniDisplay.textContent += " " + secondNumber + " " + "=" + " ";
});

