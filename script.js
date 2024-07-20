let numbers = document.querySelectorAll(".num");
numbers.forEach((num)=>{
    num.addEventListener("click",(e)=>{
        printOnScreen(e.target);
    })
})

function printOnScreen(num) {
    const screen = document.querySelector(".screen");
    screen.textContent += num.textContent;
}

