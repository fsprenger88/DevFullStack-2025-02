// let livro = {
//     nome: 'Marley e Eu',
//     anoLancamento: '2024',
//     autor: 'Will Smith',
//     nrPaginas: 12,
//     genero: 'comedia',
//     atores: ['Scooby', 'super cao', 'batcao'],

//     mostrarCaracteristicas: function () {
//         return `${this.nome} é um livro para ficar alegre. `;
//     }
// };


// let filme = {
//     titulo: 'YOU',
//     anoLancamento: '2024',
//     atores: ['Scooby', 'super cao', 'batcao'],
//     genero: 'comedia',

//     mostrarCaracteristicas: function () {
//         return `${this.titulo} é um FILME para ficar alegre. `;
//     }
// }

// function mostrarCaracteristicas(){
//     console.log ('teste')

// }

// mostrarCaracteristicas()

/// calculem as medias das notas dos alunos de um professor e digam se a turma do professor esta na media 

// let professor = {
//     nome: 'Stark Parker',
//     materia: 'Física',
//     notas: {
//         aluno1: [10, 10],
//         aluno2: [3, 7],
//         aluno3: 10
//     }
// }

// let somaNotas = 0
// let numeroAlunos = 0

// for(let aluno in professor.notas) {
//     somaNotas += Array.isArray(professor.notas[aluno]) ? professor.notas[aluno].reduce((acc, nota) => acc + nota, 0)/professor.notas[aluno].length : professor.notas[aluno]

//     numeroAlunos++
// }

// let media = somaNotas/numeroAlunos


// if(media >= 6){
//     console.log(`a média da turma é ${media} e está acima do padrão`)
// } else {
//     console.log(`a média da turma é ${media} e está abaixo do padrão`)
// }

// let livraria = [
//     {titulo: '1984', autor: 'George Orwell', ano: 1984},
//     {titulo: 'O Profeta', autor: 'Endrew Berthold', ano: 2001},
//     {titulo: 'Codigo limpo', autor: 'martin', ano: 2010},
//     {titulo: 'o velho e o mar', autor: 'hemmingway', ano: 1910},
//     {titulo: 'o principe', autor: 'maquiavel', ano: 2002},
// ]

// for of para iterar e verificar os livros publicados antes do ano de 2000.

// console.log("Livros publicados antes do ano 2000:");
// for (const livro of livraria) {
//     if (livro.ano < 2000) {
//         console.log(livro);
//     }
// }

// let filmes = [
//     {titulo:"Sempre ao seu lado", genero: "De chorar"},
//     {titulo:"Massacre da Serra Elétrica", genero: "Terror"},
//     {titulo:"Minha Mãe é uma Peça", genero: "Comédia"},
//     {titulo:"Tarzan", genero: "Aventura"},
//     {titulo:"Como eu Era Antes de Você", genero: "De chorar"},
//     {titulo:"Jogo da Imitação", genero: "Histórico"},
//     {titulo:"Top Gun", genero: "Guerra"},
//     {titulo:"Your Name", genero: "Romance"},
//     {titulo:"Deadpool", genero: "Herói"},
//     {titulo:"Batman Forever", genero: "Herói"},
// ]


// /// listem a contagem de generos desses filmes.

// let contagemGeneros = {};

// // Contando os gêneros
// for (let filme of filmes) {
//     if (contagemGeneros[filme.genero]) {
//         contagemGeneros[filme.genero]++;
//     } else {
//         contagemGeneros[filme.genero] = 1;
//     }
// }

// // Exibindo o resultado
// console.log("Contagem de gêneros:");
// for (const genero in contagemGeneros) {
//     console.log(`${genero}: ${contagemGeneros[genero]} filme(s)`);
// }

//construam uma funçã que calcule o fatorial de um numero

// function fatorial(numero) {
//     let fatorial = 1

//     for(let i =1; i<=numero;i++) {
//         fatorial+=1
//     }
//     console.log(fatorial)
// }

// fatorial(5)

// console.log()
// // imprimam os primeiros 10 numeros da sequencia de fibnonacci

// function fibonacci() {
//     let a = 0, b = 1, temp
//     console.log(a)
//     console.log(b)


//     for(let i= 3; i <= 10; i++) {
//         temp = a+b
//         console.log(temp)
//         a= b
//         b= temp
//     }

// }    


// fibonacci()


// function soma(n) {
//     if (n === 1) {
//         return 1
//     } else {
//         return n + soma(n-1)
//     }
// }


// console.log (soma(5))  

function fibo (n) {
    if(n === 0 ) {
        return 0
    } else if (n===1){
        return 1
    } else {
        return fibo(n -1) + fibo (n-2)
    }
}

 console.log (fibo(8))