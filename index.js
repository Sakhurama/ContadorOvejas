const count = document.getElementById("count");
const btnAdd = document.getElementById("add");
const btnLess = document.getElementById("less");
const btnReset = document.getElementById("reset");
const sheepContainer = document.getElementById("sheep-img")

let countValue = 0;

btnAdd.onclick = function(){
    countValue++;
    count.innerHTML = countValue

    const sheepImg = document.createElement('img');
    sheepImg.src = 'images/sheep.png';
    sheepImg.alt = 'Oveja';
    sheepImg.className = 'sheep';
    sheepContainer.appendChild(sheepImg);
}

btnLess.onclick = function(){
    countValue--;
    count.innerHTML = countValue
}

btnReset.onclick = function(){
    countValue = 0
    count.innerHTML = countValue
}