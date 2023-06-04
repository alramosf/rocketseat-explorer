/* 
    Dada uma lista de pacientes, descubra o IMC de cada paciente e
imprima

"Paciente X possui o IMC de: Y"
Onde X é o nome do paciente e Y é o IMC desse paciente

Crie uma função para fazer o cdlculo de IMC


Calculo de IMC = peso % (altura * altura)

*/

const patients = [
    {
        name: "Luiz",
        age: 20,
        weight: 100,
        height: 190
    },
    {
        name: "Alexandre",
        age: 28,
        weight: 113,
        height: 177
    },
    {
        name: "Carlos",
        age: 42,
        weight: 120,
        height: 185,
    },
]



function IMC(weight, height){
    return (weight / ((height / 100 ) ** 2)).toFixed(2)
}

const printPatientsIMC = (patient) => {
    return`
    Paciente ${patient.name} possui o IMC de ${IMC(patient.weight, patient.height)}  

`
}

for (let patient of patients){
    let IMCmessage = printPatientsIMC(patient)
    alert(IMCmessage)
}



