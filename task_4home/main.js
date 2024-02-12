const list = [ [4, 3], [6, 2], [8,1] ]
var sum = 0

for (let i in list) {
    for (let j in list[i]) {
        sum+=list[i][j]
    }
}
console.log(sum)