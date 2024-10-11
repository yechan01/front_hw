const number = document.getElementById("counting-num");
const incButton = document.getElementById("increase");
const decButton = document.getElementById("decrease");
const inchButton = document.getElementById("increasehigh");
const dechButton = document.getElementById("decreasehigh");
const resButton = document.getElementById("reset");

let count = 0; //상수가 아닌 변수 let
number.textContent = count;


function increaseCount() {
 count++; // count = count + 1
 showNumber();
}

function decreaseCount() {
 count--; // count = count - 1
 showNumber();
}

function increaseCounth() {
 count += 10;
 showNumber();
}
   
function decreaseCounth() {
 count -= 10;
 showNumber();
}

function resetCount() {
 count = 0;
 showNumber();
}

function showNumber() {
    if (count > 0) {
        number.style.color = `rgba(${count},0,0)`;
    }
    if (count < 0) {
        number.style.color = `rgba(0,${Math.abs(count)},0)`;
    }
    number.textContent = count;
}


incButton.addEventListener("click", increaseCount);
decButton.addEventListener("click", decreaseCount);
inchButton.addEventListener("click", increaseCounth);
dechButton.addEventListener("click", decreaseCounth);
resButton.addEventListener("click", resetCount);