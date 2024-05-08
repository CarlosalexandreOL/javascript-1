let num = [5, 8, 2, 9, 3]
num.push(1, 4, 6, 7)
num.sort()
console.log(num)
console.log(`Nosso vetor tem ${num.length} elementos.`) 
console.log(`O primeiro valor do vetor e ${num[0]}`)
let pos = num.indexOf(10)
if(pos == -1){
    console.log(`o valor não foi encontrado`)
}else{
    console.log(`O valor 8 esta na posição ${pos}`)
}
