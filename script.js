let operatorPressed = false;
let num2Pressed = false;
let num1Pressed = false;
let num1 = 0;
let num2 = 0;
let operator;
let result = 0;
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
        pushOnScreen(e.target);
    })
})

const operators = document.querySelectorAll(".operator");
operators.forEach((op)=>{
    op.addEventListener("click",(e)=>{
        if (num2Pressed) {
            num2 = getNumberFromScreen();
            result = calculate();
            displayResult();
            num1 = result;
            num2Pressed = false;
        }
        if (!operatorPressed && !num1Pressed) {
            num1Pressed = true;
            num1 = getNumberFromScreen();
        }
        operator = e.target.classList[0];
        operatorPressed = true;
    })
})

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click",()=>{
    clearScreen();
})

const deleteButton = document.querySelector("#delete");
deleteButton.addEventListener("click",()=>{
    let str = screen.textContent;
    str = Array.from(str);
    str.pop();
    screen.textContent = str.join('');
})

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
            return num1/num2;
        case 'multilply':
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


