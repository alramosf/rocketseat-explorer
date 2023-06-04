/* 
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações!
O resultado final desse desafio deve ser algo em torno de:
 */

let n1 = prompt('Digite um numero:')
let n2 = prompt('Digite o segundo numero:')

n1 = Number(n1)
n2 = Number(n2)



resultAdd = n1 + n2
resultSub = n1 - n2
resultMult = n1 * n2
resultDiv = n1 / n2
resultRest = n1 % n2

alert(`A some dos dois numeros é de ${resultAdd}`)
alert(`A subtração dos dois numeros é de ${resultSub}`)
alert(`A Multiplicação dos dois numeros é ${resultMult}`)
alert(`A Divisão dos dois numeros é de ${resultDiv}`)
alert(`O Resto da divisão dos numeros é de ${resultRest}`)

if (resultRest == 0) {
    alert (`Este numero é par`)
} else {
    alert (`Este numero é impar`)
}