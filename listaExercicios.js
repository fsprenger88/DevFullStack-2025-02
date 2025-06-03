const prompt = require('prompt-sync')(); 

// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.

// let numero = Number (prompt('Digite um número para verificar se o mesmo é par ou ímpar: '))

// if (numero % 2 === 0) {
//     console.log ('O número é par!')
// } else {
//     console.log ('O número é ímpar!')
// }


// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
//     adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
//     controle if-else.

// let idade = Number (prompt('Digite sua idade: '))

// if (idade < 11) {
//     console.log ('Criança')
//  } else if (idade >= 11 && idade <= 20) {
//     console.log ('Adolescente')
//  } else if (idade >= 20 && idade <= 55) {
//     console.log ('Adulto')
//  } else
//      console.log ('Idoso')


// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

// let nota = Number(prompt('Informe a nota: '))

// if (nota >= 7 && nota <= 10)
//     console.log ('Aprovado')
// else if (nota === 6)
//     console.log ('Recuperação')
// else if (nota >= 0 && nota < 6)
//     console.log ('Reprovado')
// else {
//     console.log ('A nota DEVE ser entre 0 e 10!')
// }


// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

// console.log (' 1 - FILME')
// console.log (' 2 - SÉRIES')
// console.log (' 3 - JOGOS')
// console.log ('================')

// let op = Number (prompt('Escolha a opção: '))

// switch (op) {
//     case 1:
//         console.log ('Primeira opção (FILME)')
//         break
//     case 2:
//         console.log ('Segunda opção (SÉRIES)')
//         break
//     case 3:
//         console.log ('Terceira opção (JOGOS)')
//         break
//     default:
//         console.log ('A opção deve ser entre as citadas!')
    
// }


// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

// let peso = 77
// let altura = 1.80
// const imc = peso / (altura * altura)

// if (imc < 18.5) {
//     console.log (`IMC: ${imc.toFixed(2)} - Baixo peso`)
// } else if (imc >= 18.5 && imc < 25) {
//     console.log (`IMC: ${imc.toFixed(2)} - Peso normal`)
// } else if (imc >= 25 && imc < 30) {
//    console.log (`IMC: ${imc.toFixed(2)} - Sobrepeso`)
// } else {
//     console.log (`IMC: ${imc.toFixed(2)} - Obesidade`)
// }


// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.
// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

// let A = 5, B = 5, C = 5;

// if (A <= 0 || B <= 0 || C <= 0) {
//     console.log("Os lados devem ser positivos.")
// } 
// else if (A < B + C && B < A + C && C < A + B) {
//     if (A === B && B === C) {
//         console.log("Triângulo Equilátero.")
//     } else if (A === B || A === C || B === C) {
//         console.log("Triângulo Isósceles.")
//     } else {
//         console.log("Triângulo Escaleno.")
//     }
// } 
// else {
//     console.log("Não forma um triângulo.")
// }


// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

// let qtMacas = Number (prompt('Digite a quantidade de maças compradas: '))

// if (qtMacas < 12) {
//     valor = qtMacas * 0.3

// } else {
//     valor = qtMacas * 0.25
// } 
// console.log (`O valor total da compra é: R$ ${valor.toFixed(2)}`)


// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

// let valor1 = Number(prompt("Digite o primeiro valor:"))
// let valor2 = Number(prompt("Digite o segundo valor:"))

// if(valor1 === valor2) {
//     console.log("Os valores não podem ser iguais. Digite valores diferentes.")

// } else if  (valor1 < valor2) {
//     console.log(`Valores em ordem crescente: ${valor1}, ${valor2}`)

// } else {
//     console.log(`Valores em ordem crescente: ${valor2}, ${valor1}`)
// }


// 9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
// utilizando um loop for.

// for (contadora = 10 ; contadora >= 1; contadora--) {
//     console.log (contadora)
// }


// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

// let numero = Number (prompt('Digite um número: '))
// let contadora = 0

// while (contadora < 10) {
//     console.log (numero)
//     contadora++
// }


// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

// let soma = 0;

// for (let i = 1; i <= 5; i++) {
//     soma += Number(prompt(`Digite o ${i}º número:`));
// }

// console.log(`Soma total: ${soma}`);


// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
//     10) utilizando um loop for.

// let numero = Number(prompt(`Digite um número de (1 a 10) para realizar a tabuada: `))
 
// for (let i = 1; i <= 10; i++) {
//     let resultado = numero * i

    
//     console.log (`${numero} X ${i} = ${resultado}`)
 
// }


// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

// let soma = 0
// let quantidade = 0
// let numero

// do {
//     numero = parseFloat(prompt("Digite um número (0 para sair):"))

//     if (!isNaN(numero) && numero !== 0) {
//         soma += numero;
//         quantidade++;
//     }

// } while (numero !== 0)

// if (quantidade > 0) {
//     let media = soma / quantidade
//     console.log(`Média aritmética: ${media.toFixed(2)}`)

// } else {
//     console.log("Nenhum número válido foi inserido.")
// }


// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

// let numero = Number(prompt("Digite um número para calcular seu fatorial:"))

// if (numero < 0) {
//     console.log("Erro: Fatorial não está definido para números negativos.")
// } else {
//     let fatorial = 1;
    
//     for (let i = 1; i <= numero; i++) {
//         fatorial *= i
//     }
    
//     console.log(`O fatorial de ${numero} é: ${fatorial}`)
// }


// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

// let a = 0, b = 1

// console.log("Os 10 primeiros números da sequência de Fibonacci são:")

// for (let i = 1; i <= 10; i++) {
//     console.log(a)
//     let proximo = a + b
//     a = b
//     b = proximo

// }