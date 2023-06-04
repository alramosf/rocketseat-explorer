/* Variaveis */
const closedCookie = document.querySelector(".closedCookie")
const openedCookie = document.querySelector(".openedCookie")

const btnAnotherCookie = document.querySelector(".btnAnotherCookie")

const frases = [
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "A felicidade é uma escolha, faça-a todos os dias.",
    "Acredite em si mesmo e no seu potencial.",
    "Grandes realizações exigem grande esforço.",
    "As oportunidades estão sempre ao seu redor, basta estar atento.",
    "A paciência é uma virtude, e pode trazer grandes recompensas.",
    "Aprenda com seus erros e cresça com suas experiências.",
    "A vida é um presente, aprecie cada momento.",
    "A persistência é a chave para o sucesso.",
    "Você é capaz de alcançar tudo o que deseja, basta acreditar e agir.",
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
];

/* Eventos */
btnAnotherCookie.addEventListener('click', toggleScreen, )
closedCookie.addEventListener('click', toggleScreen, )

/* Funções */
function toggleScreen(event) {
    event.preventDefault() 
    closedCookie.classList.toggle("hide")
    openedCookie.classList.toggle("hide")

    document
    .querySelector(".openedCookie p")
    .innerText = `${mostrarFraseAleatoria()}`

}
function mostrarFraseAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    const frase = frases[indiceAleatorio];
    return frase
}
  // Exibe uma frase aleatória quando o botão é clicado




