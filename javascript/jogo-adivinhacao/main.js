//Variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const screen3 = document.querySelector(".screen3")

const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1;

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnRestart.addEventListener('click', handleResetClick)
btnReset.addEventListener('click',handleResetClick)
document.addEventListener('keydown', buttonReset)

"TODO:" // corrigir o por que está aparecendo dois paneis

// Função callback
function handleTryClick(event) {
    event.preventDefault() // não faça o padrão do evento

    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) == ""){
        alert("O campo está em branco, favor digitar um numero")
    }
    
    if(Number(inputNumber.value) == randomNumber) {
        screen1.classList.add("hide")
        screen2.classList.remove("hide")

        document
        .querySelector(".screen2 h2")
        .innerText = `Acertou em ${xAttempts} tentativas`
    }
    if(Number(inputNumber.value) < "0" || Number(inputNumber.value) >= "11") {
        screen1.classList.add("hide")
        screen2.classList.add("hide")
        screen3.classList.remove("hide")

        document
        .querySelector(".screen3 h2")
        .innerText = `O numero selecionado foi ${inputNumber.value} não está entre 0 e 10`
    }


    inputNumber.value = ""
    xAttempts++
}

function handleResetClick() {
        xAttempts = 1
        randomNumber = Math.round(Math.random() * 10);
        toggleScreen()
    
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
    screen3.classList.toggle("hide")

}

function buttonReset(e){ 
    if (e.key == 'Enter' && screen1.classList.contains('hide')){
    handleResetClick();

    }
}