/* 
    Solicitar o nome do alune e as 3 notas do bimestre e calcular a média daquele aluno.

    a média positiva deverá ser maior que 6.

    Se o aluno passou no bimestre dar os parabéns.

    Se o aluno não passou no bimestre, motivar o aluno a dar o seu melhor na prova de recuperação.

    Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota

*/

let studant = prompt('Nome do aluno:')
let firtsValue = prompt('Primeira nota:')
let secondValue = prompt('Segunda nota:')
let thirdValue = prompt('Terceira nota:')


firtsValue = Number(firtsValue)
secondValue = Number(secondValue)
thirdValue = Number(thirdValue)

result = (firtsValue + secondValue + thirdValue) / 3
result = result.toFixed(2)

if (result >= 6) {
    alert(`Parabens! ${studant} Passou com a média ${result}`)
} else {
    alert (`Que pena! ${studant} sua média foi de ${result} dê o seu melhor para a prova de recuperação!`)
}