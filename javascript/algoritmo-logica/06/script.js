/* 

    ** Jogo da adivinhação **

    Apresente a mensagem ao usuário:

    "Adivinhe o número que estou pensando? Está entre 0 e 10"

    Crie uma lógica para gerar um número aleatório e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema

    Enquanto o usuário não adivinhar o número, mostrar a mensagem:
    "Erro, tente novamente:"

    Caso o usuário acerte o número, apresentar a mensagem:
    "Parabéns! você adivinhou o numero em X tentativas"

    Substitua o X da mernsagem pelo numero de tentativas
*/

let result = prompt('Adivinhe o número que estou pensando? Está entre 0 e 10')
const randomNumber = Math.round(Math.random() * 10)

let xAttempts = 1;

while(Number(result) != randomNumber){
    if (result >= 11) {
        alert(`O numero escolhido foi ${result} não é um numero entre 0 e 10, favor escolher novamente`)
    }
    result = prompt("Erro, tente novamente:")
    xAttempts++
}



if (xAttempts > 1) {
    alert(`Parabéns! O Número que pensei foi ${randomNumber} você adivinhou o numero em ${xAttempts} tentativas`)
} else {
    alert(`Parabéns! O Número que pensei foi ${randomNumber}  você adivinhou o numero em ${xAttempts} tentativa`)
}

