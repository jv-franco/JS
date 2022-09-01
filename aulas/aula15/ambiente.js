let num = [5, 8, 2, 9, 3]


console.log(`nosso vetor é ${num}`)
console.log(`O vetor tem ${num.length} posições`)
num.push(4)
num.sort()
console.log(`agora é ${num}`)

let pos = num.indexOf(6)


if (pos = -1){
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}