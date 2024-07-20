let operatorPressed = false;
let num2Pressed = false;
let num1Pressed = false;
let resultPressed = false;
let overflow = false;
let num1 = 0;
let num2 = 0;
let operator;
let result = 0;
const MAX_LIMIT = 13;
const screen = document.querySelector(".screen");
//if i press operator after num1
//then nothing will change
//but after both have been entered
//result is declared

const numbers = document.querySelectorAll(".num");
numbers.forEach((num)=>{
    num.addEventListener("click",(e)=>{
        if (num1Pressed) {
            num2Pressed = true;
        }
        if (operatorPressed) {
            clearScreen();
            operatorPressed = false;
        }
        if (overflow) {
            clearScreen();
            overflow = false;
        }

        pushOnScreen(e.target);
        
        if (isOverflow(getNumberFromScreen())) {
            reset();
            displayOverflow();
        }
    })
})

const operators = document.querySelectorAll(".operator");
operators.forEach((op)=>{
    op.addEventListener("click",(e)=>{
        if (num2Pressed) {
            num2 = getNumberFromScreen();
            result = BigInt(calculate());
            if (isOverflow(result)) {
                reset();
                displayOverflow();
                return;
            }
            displayResult();
            num1 = result;
            num2Pressed = false;
        }
        if ((!operatorPressed && !num1Pressed) || resultPressed) {
            num1Pressed = true;
            num1 = getNumberFromScreen();
            resultPressed = false;
        }
        operator = e.target.classList[0];
        operatorPressed = true;
    })
})

const resultButton = document.querySelector("#result");
resultButton.addEventListener("click",()=>{
    if (num2Pressed) {
        num2 = getNumberFromScreen();
        result = calculate();
        if (isOverflow(result)) {
            reset();
            displayOverflow();
            return;
        }
        displayResult();
        num2Pressed = false;
        num1Pressed = false;
        operatorPressed = true;
        resultPressed = true;
    }
})

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click",()=>{
    reset();
})

const deleteButton = document.querySelector("#delete");
deleteButton.addEventListener("click",()=>{
    let str = screen.textContent;
    str = Array.from(str);
    str.pop();
    screen.textContent = str.join('');
})

function reset() {
    clearScreen();
    operatorPressed = false;
    num1Pressed = false;
    num2Pressed = false;
    resultPressed = false;
    num1 = 0;
    num2 = 0;
    result = 0;
}

function pushOnScreen(num) {
    screen.textContent += num.textContent;
}

function getNumberFromScreen() {
    let number = screen.textContent;
    return parseInt(number);
}

function clearScreen() {
    screen.textContent = "";
}

function calculate() {
    switch(operator) {
        case 'divide':
            if (num2==0) {
                reset();
                displayOverflow();
                return;
            }
            return num1/num2;
        case 'multiply':
            return num1*num2;
        case 'minus':
            return num1-num2;
        case 'plus':
            return num1+num2;
    }
}

function displayResult() {
    clearScreen();
    screen.textContent = result;
}

function displayOverflow() {
    clearScreen();
    screen.textContent = "overflow";
    overflow = true;
}

function isOverflow(value) {
    return value.toString().length > MAX_LIMIT;
}


