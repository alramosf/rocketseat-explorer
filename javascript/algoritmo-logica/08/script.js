/* 
    Crie uma lista de pacientes

    Cada paciente deverá conter
        Nome
        Idade
        Peso
        Altura
    
        Escreva uma lista contendo o nome dos pacientes

*/

let option = [];
let pacienteName = [];
let age = [];
let weight = [];
let height = [];

while (option != 3) {
    option = Number(prompt(`
    Olá ! Digite o número da opção desejada!
    1 - Cadastrar um novo paciente
    2 - Ver lista de pacientes
    3 - Sair do programa
    `))

    switch(option) {
        case 1:
            // sequencia aqui
            let pacienteName = prompt('Nome do paciente');
            pacienteName.push(pacienteName); // adiciona o objeto 
            let age = prompt('Idade do paciente');
            age.push(age); // adi
            let weight = prompt('Peso do paciente em kg');
            weight.push(weight);
            let height = prompt('Altura do paciente');
            height.push(height);
            break;
        case 2:
            if(pacienteName.length == 0){
                alert('Não existem pacientes cadastrados')
            } else {
                alert(pacienteName)
            }
            break;
        case 3:
            alert('Tchau!')
            break;
        default:
            alert('Opção inválida, tente novamente!')

    }
}