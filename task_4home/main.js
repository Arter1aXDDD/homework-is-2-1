const list = [ [4, 3], [6, 2], [8,1] ]

for (let item of list) {
    console.log(`[${item}] количество элементов в массиве = ${item.length}`)
}

let sum = 0

for (let i in list) {
    for (let j in list[i]) {
        sum += list[i][j];
    }
    
}
console.log(`Сумма всех элементов двумерного массива') = ${sum}`)