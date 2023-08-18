const add = (num1, num2) => (num1 + num2);
const subtract = (num1, num2) => (num1 - num2);
const multiply = (num1, num2) => (num1 * num2);
const divide = (num1, num2) => (num1 / num2);

let firstNumber;
let operator;
let secondNumber;

const operate = (firstNumber, secondNumber, operator) => {
    if (operator === "+") {
        return add(firstNumber, secondNumber);
    }
    else if(operator === "-") {
        return subtract(firstNumber, secondNumber)
    }
    else if(operator === "*") {
        return multiply(firstNumber, secondNumber)
    }
    else if(operator === "/") {
        return divide(firstNumber, secondNumber)
    }
}

const calculator = document.querySelector(".calculator");
const display =  document.querySelector(".display");
const container = document.querySelector(".container");