const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const screen3 = document.querySelector(".screen3")

const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1;

// Função callback
function handleTryClick(event) {
    event.preventDefault() // não faça o padrão do evento

    const inputNumber = document.querySelector("#inputNumber")
    
    if(Number(inputNumber.value) == randomNumber) {
        screen1.classList.add("hide")
        screen2.classList.remove("hide")

        document
        .querySelector(".screen2 h2")
        .innerText = `Acertou em ${xAttempts} tentativas`
    }
    if(Number(inputNumber.value) >= "11") {
        screen1.classList.add("hide")
        screen2.classList.add("hide")
        screen3.classList.remove("hide")

        document
        .querySelector(".screen3 h2")
        .innerText = `O numero informado não está entre 0 e 10`
    }
    inputNumber.value = ""
    xAttempts++
}


// Eventos
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

btnTry.addEventListener('click', handleTryClick)
btnRestart.addEventListener('click', function(){
    screen1.classList.remove("hide")
    screen2.classList.add("hide")
    screen3.classList.add("hide")



})


btnReset.addEventListener('click', function(){
    screen1.classList.remove("hide")
    screen2.classList.add("hide")
    screen3.classList.add("hide")

    xAttempts = 1
    document.location.reload(true)
})