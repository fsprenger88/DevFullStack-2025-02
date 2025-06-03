// class TreeNode {
//     constructor(value) {
//         this.value = value
//         this.children = []
//     }

//     addChild(node) {
//         this.children.push(node)
//     }

//     removeChild(value) {
//         this.children = this.children.filter(child => child.value !== value)
//     }
// }
// class Tree {
//     constructor(rootValue) {
//         this.root = new TreeNode(rootValue)
//     }

//     traverseDFS(callback) {
//         function recurse(node) {
//             callback(node)
//             node.children.forEach(child => recurse(child));
//         }
//         recurse(this.root)
//     }
// }
// const tree = new Tree('A')

// const B = new TreeNode('B')
// const C = new TreeNode('C')
// const D = new TreeNode('D')
// const E = new TreeNode('E')
// const F = new TreeNode('F')
// const G = new TreeNode('G')
// const H = new TreeNode('H')

// tree.root.addChild(B)
// tree.root.addChild(C)
// tree.root.addChild(D)

// B.addChild(E)
// B.addChild(F)

// C.addChild(G)

// G.addChild(H)

// function printNode(node) {
//     console.log (node.value)
// }

// tree.traverseDFS(printNode)

let arvore = {
    left: {
        left: undefined,
        right: {
            value: 3
        },
        value: 2
    },
    right: undefined,
    value: 10
}

function preOrder (tree) {
    console.log(tree.value)
    tree.left && preOrder(tree.left)
    tree.right && preOrder(tree.right)
}
console.log('pre ordem:')
preOrder(arvore)

function inOrder(tree) {
    tree.left && inOrder(tree.left)
    console.log(tree.value)
    tree.right && inOrder(tree.right)

}
console.log('em ordem:')
inOrder(arvore)

function posOrder(tree) {
    tree.left && posOrder(tree.left)
    tree.right && posOrder(tree.right)
    console.log(tree.value)
}
console.log('pos ordem:')
posOrder(arvore)