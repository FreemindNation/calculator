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
    // firstNumber = parseFloat(firstNum);
    // secondNumber = parseFloat(secondNum);
    if (operator === "add") {
         total = add(parseFloat(firstNum), parseFloat(secondNum));
        display.textContent = parseFloat(total.toFixed(6));
    }
    else if(operator === "subtract") {
        total = subtract(parseFloat(firstNum), parseFloat(secondNum));
        display.textContent = parseFloat(total.toFixed(6));
    }
    else if(operator === "multiply") {
        total = multiply(parseFloat(firstNum), parseFloat(secondNum));
        display.textContent = parseFloat(total.toFixed(6));
    }
    else if(operator === "divide") {
        if(secondNum === "0") {
            display.textContent = "Cannot divide by zero!";
        }
        else {
        total = divide(parseFloat(firstNum), parseFloat(secondNum));
        display.textContent = parseFloat(total.toFixed(6));
        }
    }
    else if(operator === "modulo") {
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

let storedValue = "";
// let operatorsArr = ["+", "-", "*","/","%"];

const displayValue = (number) => {
    const inputNumber = display.textContent;
    if (inputNumber.length < 16) {
        display.textContent = parseFloat(inputNumber + number).toString();
    }
}
// if (display.textContent.length > 12) {
//     display.textContent.style.fontSize = "1em";
//     console.log(display.textContent);
// }
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


// multiplyOpp.addEventListener("click", () => {
//     miniDisplay.textContent = display.textContent + " " + multiplyOpp.value;
    
// })



// let storedValuesArr = [];
let clickedOperatorArr = [];
let currentOperator = "";
let previousOperator = "";
operators.forEach(currOpp => currOpp.addEventListener("click", ()=> {
    // operator = currOpp.dataset.action;
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
        // console.log(secondNumber);
      operate(firstNumber, secondNumber, previousOperator);
      firstNumber = display.textContent;
      miniDisplay.textContent = firstNumber + " " + currentOperator;
        // clickedOperatorArr.slice(1);
      display.textContent = "";
      
      
      // removeFirstOperator(clickedOperatorArr);
      console.log(clickedOperatorArr);  
    }
    // else if(clickedOperatorArr.length > 2) {
    //   clickedOperatorArr.slice(1);
    //     console.log(clickedOperatorArr);
    // }
    

    // if(display.textContent !== "" || isNaN(display.textContent)) {
    //     secondNumber = display.textContent;
    //     console.log(secondNumber);
    //      operate(firstNumber, secondNumber, operator);
    // }
    // storedValues += currOpp.id;
    // let regex = /\d+\.\d+|\d+|[^0-9]/g;
    // let storedValuesStr = storedValues.match(regex);
    // let storedValuesArr = storedValuesStr.split(" ");   
    // chainOp();
    // console.log(storedValue);
    // secondNumber = display.textContent;
    
    
    // operate(firstNumber, secondNumber, operator);

    // console.log(secondNumber);
    
    // console.log(firstNumber);


}))


// console.log(storedValuesArr);
//  const chainOp = ()=> {
//     for (let i = 0; i < storedValuesArr.length; i++) {
//         if(operatorsArr.includes(storedValuesArr[i])) {
//             operator = storedValuesArr[i];
//             firstNumber = storedValuesArr[i - 1];
//             secondNumber = storedValuesArr[i + 1];
//             operate(firstNumber, secondNumber, operator);
//         }
//     }
//  }
equals.addEventListener("click", () => {
    if(operator !== "") {
        secondNumber = display.textContent;
        operate(firstNumber, secondNumber, operator);
        display.style.fontSize = "2em";
    }
    
    miniDisplay.textContent += " " + secondNumber + " " + "=" + " ";
    

    // console.log(operator);
    // console.log(firstNumber, secondNumber);
})



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

