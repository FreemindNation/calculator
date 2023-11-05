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
const digits = document.querySelectorAll(".digit");
const clear = document.querySelector("#clear");
const backSpace = document.querySelector("#back-space");

const displayValue = (number) => {
    const inputNumber = display.textContent;
    if (inputNumber.length < 10) {
        display.textContent = parseInt(inputNumber + number).toString();
    }
        
}

digits.forEach(digit => digit.addEventListener("click", () => {

    displayValue(digit.id);
})
);

clear.addEventListener("click" ,()=> display.textContent = 0);

backSpace.addEventListener("click", ()=> {
    if(display.textContent === 0 || display.textContent === ""){
        display.textContent = 0;
    }
    else {
    display.textContent = display.textContent.slice(0, display.textContent.length -1)
    }
});





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

