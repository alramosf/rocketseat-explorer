/* 
    Capture 10 itens para compor uma lista de supermercado.

    Após capturar os 10 itens, imprima-os separando por vírgula

*/


/* alert('Insira 10 produtos de supermercado')
let list0 = prompt('Primeiro produto')
let list1 = prompt('Segundo produto')
let list2 = prompt('Terceiro produto')
let list3 = prompt('Quarto produto')
let list4 = prompt('Quinto produto')
let list5 = prompt('Sexto produto')
let list6 = prompt('Setimo produto')
let list7 = prompt('Oitavo produto')
let list8 = prompt('Nono produto')
let list9 = prompt('Decimo produto')

alert(`Os produtos escolhidos foram ${list0}, ${list1}, ${list2}, ${list3}, ${list4}, ${list5}, ${list6}, ${list7}, ${list8}, ${list9}`) */

let itens = []

for(let i = 0; i < 2; i++) {
    itemName = prompt(`Digite um item ${(i + 1)}`)
    itens[i] = itemName
} 

alert(itens)