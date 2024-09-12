const count = document.getElementById("count");
const btnAdd = document.getElementById("add");
const btnLess = document.getElementById("less");
const btnReset = document.getElementById("reset");
const sheepContainer = document.getElementById("container-oveja-saltando")

let countValue = 0;

btnAdd.onclick = function(){
    countValue++;
    count.innerHTML = countValue
    ovejaAnimacion()
}

btnLess.onclick = function(){
    countValue--;
    count.innerHTML = countValue
}

btnReset.onclick = function(){
    countValue = 0
    count.innerHTML = countValue
}

function ovejaAnimacion(){

    console.log("Oveja animacion funcion funciona")
    const gifSheep = document.createElement('img');
    gifSheep.src = 'images/sleepy-sheep.gif'
    gifSheep.alt = 'Oveja saltando'
    gifSheep.classList.add('oveja-saltando')
    sheepContainer.appendChild(gifSheep);

    setTimeout(() => {
        gifSheep.style.transform = `translateX(calc(100vw + 100px)) translateY(-100px)`;
    }, 50);

    sheep.addEventListener('animationend', () => {
        sheepContainer.removeChild(gifSheep);
    });
}