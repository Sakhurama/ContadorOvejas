const count = document.getElementById("count");
const btnAdd = document.getElementById("add");
const btnLess = document.getElementById("less");
const btnReset = document.getElementById("reset");

let countValue = 0;

btnAdd.onclick = function(){
    countValue++;
    count.innerHTML = countValue
}

btnLess.onclick = function(){
    countValue--;
    count.innerHTML = countValue
}

btnReset.onclick = function(){
    countValue = 0
    count.innerHTML = countValue
}