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
        display.textContent = total;
    }
    else if(operator === "subtract") {
        total = subtract(parseFloat(firstNum), parseFloat(secondNum));
        display.textContent = total;
    }
    else if(operator === "multiply") {
        total = multiply(parseFloat(firstNum), parseFloat(secondNum));
        display.textContent = total;
    }
    else if(operator === "divide") {
        total = divide(parseFloat(firstNum), parseFloat(secondNum));
        display.textContent = total;
    }
    else if(operator === "modulo") {
        total = modulo(parseFloat(firstNum), parseFloat(secondNum));
        display.textContent = total;
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

let opValues = "";
let operatorsArr = ["+", "-", "*","/","%"];

const displayValue = (number) => {
    const inputNumber = display.textContent;
    if (inputNumber.length < 16) {
        display.textContent = parseFloat(inputNumber + number).toString();
    }
}
if (display.textContent.length > 12) {
    display.textContent.style.fontSize = "1em";
    console.log(display.textContent);
}
digits.forEach(digit => digit.addEventListener("click", () => {

     displayValue(digit.id);
    // opValues += displayValue(digit.id);
    console.log(opValues);
})    
);
const clearDisplay =() => { 
    display.textContent = 0;
    miniDisplay.textContent ="";
    operator = "";
    firstNumber = "";
    secondNumber = "";
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


// multiplyOpp.addEventListener("click", () => {
//     miniDisplay.textContent = display.textContent + " " + multiplyOpp.value;
    
// })




operators.forEach(currOpp => currOpp.addEventListener("click", (e)=> {
    operator =currOpp.dataset.action;
    let opSymbol = currOpp.id;
    console.log(operator, opSymbol);
    firstNumber = display.textContent;
    miniDisplay.textContent += firstNumber + " " + opSymbol + " ";
    display.textContent = "";
    console.log(firstNumber);


}))

equals.addEventListener("click", () => {
    if(operator !== "") {
        secondNumber = display.textContent;
        operate(firstNumber, secondNumber, operator);
        display.style.fontSize = "2em";
    }
    
    miniDisplay.textContent += " " + secondNumber + " " + "=" + " ";
    

    console.log(operator);
    console.log(firstNumber, secondNumber);
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

