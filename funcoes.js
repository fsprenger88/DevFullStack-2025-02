// function RetornaParOuImpar (valor){
//     let resultado

//     if (valor %2 === 0 ) {

//         resultado = 'PAR'
//     } else {
//         resultado = 'ÍMPAR'
//     }
    
//     return resultado
// }

// let numero = 10
// let resultado = RetornaParOuImpar(numero)

// console.log (numero)
// console.log (resultado)


// function calculaArea (altura, largura) {
//     return altura * largura

// }

// console.log (calculaArea(10,50))


// UMA FUNÇÃO QUE RETORNA UM ARRAY ORDENADO


// function ordenaArray (arr) {
//     return arr.sort ((a,b) => a - b)

// }

// console.log (ordenaArray ([10,4,6,2,3]))

// function exibeNome (nome) { // OU function exibeNome (nome = 'Fabricio Sprenger')
//     console.log (nome)

// }

// return exibeNome('FABRICIO')



// function erro () {
//     console.log ('requisição deu errado')

// }

// function requisicao (sucesso, erro) {
//     if (true) {
//         sucesso ('a requisição deu CERTO')
//     } else {
//         erro ('requisição deu ERRADO')
//     }

// }

//parametros antes da flexa significa os paramentros que serem executados, e o código após a flexa será oq for para ser executado!
// requisicao ((message) => console.log (message), erro)  



// crie uma função que soma os elementos de um array e retorna o valor


// function somaArray (arr) {
//     let soma = 0

//     for (let i = 0; i < arr.length; i++) {
//         soma += arr[i]


//     }

//     return soma 

// }

// console.log (somaArray([3,5,10,1]))



/// retorna o maior numero em um array

function maiorValor (arr) {
    let maior = arr[0]

    for (let i = 0; i <arr.length; i++) {
        if(arr[i] > maior)  /// if(arr[i] < maior)    NESSE CASO BUSCARIA O NÚMERO MENOR
        maior = arr[i]

    }
        
 console.log (maior)

}

maiorValor ([1,190,2,50,-10])