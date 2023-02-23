/* 

    Faca um programa que tenha um menu e apresente a seguinte mensagem:
    0lá usuário! Digite o numero da opção desejada

    
    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa.

    0 programa devera capturar o nimero digitado pelo usudrio e mostrar o seguintes
    cendrios:

    Caso o usuario digite 1, ele poderá cadastrar um item em uma lista
    Caso o usuario digite 2, ele poderá ver os itens cadastrados

    Se nado houver nenhum item cadastrado, mostrar a mensage:

    | "Nao existem itens cadastrados"
    Caso o usuario digite 3, a aplicagdo deverd ser encerrada.


*/

//let user = prompt('Digite seu nome:') 
let option;
let items = [];

while(option != 3) {
    option = Number(prompt(`
    Olá ! Digite o número da opção desejada!
    1 - Cadastrar um item na lista
    2 - Mostrar itens cadastrados
    3 - Sair do programa
    `))


    switch(option) {
        case 1:
            // sequrencia aqui
            let item = prompt('Digite o nome do item:')
            items.push(item) // adiciona o objeto dentro do array
            break;
        case 2:
            if(items.length == 0){
                alert('Não existem itens cadastrados')
            } else {
                alert(items)
            }
            break;
        case 3:
            alert('Tchau!')
            break;
        default:
            alert('Opção inválida, tente novamente!')

    }
}


