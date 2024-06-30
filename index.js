//Counter Programm 27/4/2024 13:22 byIwnas

const decreaseBtn = document.getElementById(`decreaseBtn`);
const resetBtn = document.getElementById(`resetBtn`);
const increaseBtn = document.getElementById(`increaseBtn`);
const countLabel = document.getElementById(`countLabel`)
let count = 0;

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}
resetBtn.onclick = function(){
    count = 0
    countLabel.textContent = 0;
}
increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

