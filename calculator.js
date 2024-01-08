const add = (num1, num2) => (num1 + num2);
const subtract = (num1, num2) => (num1 - num2);
const multiply = (num1, num2) => (num1 * num2);
const divide = (num1, num2) => (num1 / num2);
const modulo = (num1, num2) => (num1 % num2);

let firstNumber;
let operator;
let secondNumber;

const operate = (firstNum, secondNum, operator) => {
    firstNumber = parseFloat(firstNum);
    secondNumber = parseFloat(secondNum);
    if (operator === "+") {
        let answer = add(firstNumber, secondNumber);
        display.textContent = answer;
    }
    else if(operator === "-") {
        answer = subtract(firstNumber, secondNumber);
        display.textContent = answer;
    }
    else if(operator === "*") {
        answer = multiply(firstNumber, secondNumber);
        display.textContent = answer;
    }
    else if(operator === "/") {
        answer = divide(firstNumber, secondNumber);
        display.textContent = answer;
    }
    else if(operator === "%") {
        answer = modulo(firstNumber, secondNumber);
        display.textContent = answer;
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

const displayValue = (number) => {
    const inputNumber = display.textContent;
    if (inputNumber.length < 12) {
        display.textContent = parseFloat(inputNumber + number).toString();

    }
}

digits.forEach(digit => digit.addEventListener("click", () => {

    displayValue(digit.id);
})
);
const clearDisplay =() => {
    display.textContent = 0;
    miniDisplay.textContent ="";
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
    display.textContent = display.textContent * -1;
}

clear.addEventListener("click" ,clearDisplay);

backSpace.addEventListener("click", removeDigit);

let decimalAllowed = false;

decimal.addEventListener("click", addDecimal);

opposite.addEventListener("click", reverseNumber);



operators.forEach(currOpp => currOpp.addEventListener("click", ()=> {
    miniDisplay.textContent = display.textContent + currOpp.value;
    console.log(currOpp.id);
}))


// const nine = document.querySelector("#9");
// const eight = document.querySelector("#8");
// const seven = document.querySelector("#7");
// const six = document.querySelector("#6");
// const five = document.querySelector("#5");
// const four = document.querySelector("#4");
// const three = document.querySelector("#3");
// const two = document.querySelector("#2");
// const one = document.querySelector("#1");
// const zero = document.querySelector("#0");
// const plusMinus = document.querySelector("#-");

