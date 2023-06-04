/* 
    Crie uma lista de pacientes

    Cada paciente deverá conter
        Nome
        Idade
        Peso
        Altura
    
        Escreva uma lista contendo o nome dos pacientes

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

const patientsNames = []
const patientsAge = []
const pacientsWeight = []
const pacientsHeight = []



for (let patient of patients){
    patientsNames.push(patient.name)

}
for (let patient of patients){
    patientsAge.push(patient.age)

}

for (let patient of patients){
    pacientsWeight.push(patient.weight)

}

for (let patient of patients){
    pacientsHeight.push(patient.height)

}


alert(`O paciente ${patientsNames[0]} de ${patientsAge[0]} anos com ${pacientsWeight[0]} kilos e tem ${pacientsHeight[0]} de altura`)