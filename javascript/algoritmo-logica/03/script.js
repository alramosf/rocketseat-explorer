/* 
    Capturar 2 números e fazer as operaçlões matemáticas de
    Soma, subtração, multiplicação, divisão e resto da divisão

    E para cada operação, mostrar um alerta com o resultado
*/

let firstNumber = prompt('Digite o primeiro número')
let secondNumber = prompt('Digite o segundo número')

firstNumber = Number(firstNumber) // transformei a string em numero
secondNumber = Number(secondNumber) // transformei a string em numero

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multipli = firstNumber * secondNumber
const division = firstNumber / secondNumber
const divisionRest = firstNumber % secondNumber

alert(`A Soma dos dois numeros é ${sum}`)
alert(`A Subtração dos dois numeros é ${sub}`)
alert(`A Multiplicação dos dois numeros é ${multipli}`)
alert(`A Divisão dos dois numeros é ${division}`)
alert(`O Resto da divisão é ${divisionRest}`)

alert('soma')