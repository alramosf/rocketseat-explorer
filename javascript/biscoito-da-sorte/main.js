/* Variaveis */
const closedCookie = document.querySelector(".closedCookie")
const openedCookie = document.querySelector(".openedCookie")

const btnAnotherCookie = document.querySelector(".btnAnotherCookie")


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






const frases = [
    "A persistência é o caminho do êxito.",
    "A sabedoria é a única riqueza que os tiranos não podem expropriar.",
    "A vida é uma peça de teatro que não permite ensaios. Por isso, cante, chore, dance, ria e viva intensamente, antes que a cortina se feche e a peça termine sem aplausos.",
    "Nossos fracassos, às vezes, são mais frutíferos do que os êxitos.",
    "O sucesso é ir de fracasso em fracasso sem perder entusiasmo.",
    "Não crie limites para si mesmo. Você deve ir tão longe quanto sua mente permitir. O que você mais quer pode ser conquistado.",
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
    "A sabedoria é a irmã mais velha da inspiração.",
    "Só sei que nada sei.",
    "Conhece-te a ti mesmo.",
    "A educação é a arma mais poderosa que você pode usar para mudar o mundo.",
    "A verdadeira sabedoria está em reconhecer a própria ignorância.",
    "Não basta adquirir sabedoria, é preciso usá-la.",
    "A mente que se abre a uma nova ideia jamais voltará ao seu tamanho original.",
    "A experiência é o nome que damos aos nossos erros.",
    "O conhecimento é poder.",
];

function mostrarFraseAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    const frase = frases[indiceAleatorio];
    return frase

}

  // Exibe uma frase aleatória quando o botão é clicado