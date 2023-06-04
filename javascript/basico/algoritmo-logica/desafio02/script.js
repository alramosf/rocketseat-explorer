/* # Sobre o desafio

<aside>
💡 Principais pontos abordados nesse desafio:

- Estrutura de dados com objetos;
- Estrutura de repetição;
- Criação de funções;
- Operadores comparativos;

</aside>

Bora praticar e rever tudo o que foi ensinado na aula? **💜**

Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

O resultado final desse desafio deve ser algo em torno de:

![Peek 18-04-2022 01-23.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3cd7bde5-dc14-4cb5-bb7d-02b02087f39e/Peek_18-04-2022_01-23.gif)

<aside>
💡 Dica: para quebrar uma linha no `alert()` basta usar um **\n** na mensagem. 😛

</aside>

Obs: você quem manda no tamanho da lista! No exemplo a lista é composta por 4 estudantes. 😊
Fique à vontade caso queira adicionar novos dados e fazer novas validações. Se desafie! 🚀

****E aí, topa encarar esse desafio? **💜**
Vai ser muito importante para o seu aprendizado rever e aplicar esses novos conceitos. 

*****Lembrando*: tente se desafiar mas, caso apareça alguma dificuldade, você pode ir no nosso **[fórum](https://app.rocketseat.com.br/h/forum/explorer)** e deixar sua dúvida por lá! 
Boa sorte e boooooora codar! **🚀** 

*/


const students = [
    {
        name: "Luiz",
        firstGrade: 8,
        secondGrade:6 ,
        thirdGrade:7 ,
    },
    {
        name: "Alexandre",
        firstGrade: 10,
        secondGrade: 10,
        thirdGrade:10 ,
    },
    {
        name:"Carlos" ,
        firstGrade: 4,
        secondGrade: 5,
        thirdGrade:9 ,
    },
    {
        name:"Glauber" ,
        firstGrade: 7,
        secondGrade: 4,
        thirdGrade:6 ,
    }
]

function media(firstGrade,secondGrade, thirdGrade ){
    return ((firstGrade + secondGrade + thirdGrade) / 3).toFixed(1)
}

const studentGrade = (students) => {

    if(media(students.firstGrade, students.secondGrade, students.thirdGrade) >= 7){
        return `Parabens! ${students.name} sua nota foi de: ${media(students.firstGrade, students.secondGrade, students.thirdGrade)} `
    } else {
        return `Que pena! ${students.name} sua nota foi de ${media(students.firstGrade, students.secondGrade, students.thirdGrade)} estude mais!  `
    }

}
for (let studant of students){
    let mediaMessage = studentGrade(studant)
    alert(mediaMessage)
}

