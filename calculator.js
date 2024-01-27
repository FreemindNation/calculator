const add = (num1, num2) => (num1 + num2);
const subtract = (num1, num2) => (num1 - num2);
const multiply = (num1, num2) => (num1 * num2);
const divide = (num1, num2) => (num1 / num2);
const modulo = (num1, num2) => (num1 % num2);

let firstNumber = "";
let operator = "";
let secondNumber = "";
let total = 0;

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
const currentYear = Document.querySelector("#year");

currentYear.textContent = new Date().getFullYear();

let storedValue = "";

const displayValue = (number) => {
    const inputNumber = display.textContent;
    if (inputNumber.length < 16) {
        display.textContent = parseFloat(inputNumber + number).toString();
    }
}

digits.forEach(digit => digit.addEventListener("click", () => {

    displayValue(digit.id);
    if(operator === "") {
        storedValue = display.textContent;
        firstNumber = storedValue;
        console.log(firstNumber);
    }
    
    else if(operator !== "") {
        
        storedValue = display.textContent;
        secondNumber = storedValue;

    }
    
    console.log(firstNumber, secondNumber);
})    
);
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
const removeDigit = () => {
    if(display.textContent.length === 1){
        display.textContent = 0;
    }
    else {
    display.textContent = display.textContent.slice(0, display.textContent.length -1)
    }
}
const addDecimal = () => {
     if(display.textContent.indexOf(".") === -1) {
        display.textContent += "."; 
    }
}
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

clear.addEventListener("click" ,clearDisplay);

backSpace.addEventListener("click", removeDigit);

let decimalAllowed = false;

decimal.addEventListener("click", addDecimal);

opposite.addEventListener("click", reverseNumber);


let clickedOperatorArr = [];
let currentOperator = "";
let previousOperator = "";

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
      
      
      console.log(clickedOperatorArr);  
    }
}))

equals.addEventListener("click", () => {
    if(operator !== "") {
        secondNumber = display.textContent;
        operate(firstNumber, secondNumber, operator);
        display.style.fontSize = "2em";
    }
    
    miniDisplay.textContent += " " + secondNumber + " " + "=" + " ";
})

