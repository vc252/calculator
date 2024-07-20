let operatorPressed = false;
let num1 = 0;
let num2 = 0;
let result = 0;
const screen = document.querySelector(".screen");
//if i press operator after num1
//then nothing will change
//but after both have been entered
//result is declared

const numbers = document.querySelectorAll(".num");
numbers.forEach((num)=>{
    num.addEventListener("click",(e)=>{
        if (operatorPressed) {
            clearScreen();
            operatorPressed = false;
        }
        printOnScreen(e.target);
    })
})

const operators = document.querySelectorAll(".operator");
operators.forEach((op)=>{
    op.addEventListener("click",()=>{
        operatorPressed = true;
    })
})

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click",()=>{
    clearScreen();
})

function printOnScreen(num) {
    screen.textContent += num.textContent;
}

function getNumberFromScreen() {
    let number = screen.textContent;
    return parseInt(number);
}

function clearScreen() {
    screen.textContent = "";
}


