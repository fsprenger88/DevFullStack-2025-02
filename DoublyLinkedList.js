// class Node {
//     constructor(valor) {
//         this.valor = valor;
//         this.anterior = null;
//         this.proximo = null;
//     } 
// }

// class DoublyLinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null; // Adicionamos tail para otimizar inserção no fim
//     }

//     inserirInicio(v) {
//         let novo = new Node(v);
//         novo.proximo = this.head;
//         if(this.head) {
//             this.head.anterior = novo;
//         } else {
//             this.tail = novo; // Se a lista estava vazia, novo nó é também o tail
//         }
//         this.head = novo;
//     }

//     inserirFim(v) {
//         let novo = new Node(v);
//         if(!this.head) {
//             this.head = novo;
//             this.tail = novo;
//         } else {
//             novo.anterior = this.tail;
//             this.tail.proximo = novo;
//             this.tail = novo;
//         }
//     }

//     imprimirFrente() {
//         let atual = this.head;
//         let valores = [];
//         while(atual) {
//             valores.push(atual.valor);
//             atual = atual.proximo;
//         }
//         console.log(valores.join(" <-> "));
//     }

//     imprimirAtras() {
//         let atual = this.tail;
//         let valores = [];
//         while(atual) {
//             valores.push(atual.valor);
//             atual = atual.anterior;
//         }
//         console.log(valores.join(" <-> "));
//     }
// }

// // Exemplo de uso:
// let lista = new DoublyLinkedList();
// lista.inserirInicio(3);
// lista.inserirInicio(2);
// lista.inserirInicio(1);
// lista.inserirFim(4);
// lista.inserirFim(5);

// console.log("Imprimindo do início ao fim:");
// lista.imprimirFrente(); // 1 <-> 2 <-> 3 <-> 4 <-> 5

// console.log("\nImprimindo do fim ao início:");
// lista.imprimirAtras();  // 5 <-> 4 <-> 3 <-> 2 <-> 1


if(indice < 0 || indice > this.length) throw RangeError("Índice está fora dos limites!")

        let removido

        if(this.length === 1) {
            removido = this.head
            this.head = this.tail = null
        } else if(indice === 0) {
            removido = this.head
            this.head = this.head.proximo
            this.head.anterior = null
        } else if(indice === this.length - 1) {
            removido = this.tail
            this.tail = this.tail.anterior
this.tail.proximo = null
        } else {
            let atual = this.head

            for(let i = 0; i < indice; i++) {
                atual = atual.proximo
            }

            removido = atual
            const { proximo, anterior } = atual
            anterior.proximo = proximo
            proximo.anterior = anterior
        }