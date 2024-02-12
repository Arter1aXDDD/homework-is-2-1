
const list_2 = [{name:'Alexey', surname:'Boston', duty:'любит'}, {name:'Dmitry', surname: 'Zalozny', duty: 'любит'}]

for (let item of list_2) {
    console.log(`${item.name} ${item.surname} ${item.duty} заведовать пабликом`)
    console.log('А также')
    item.duty = 'не любит'
    console.log(`${item.name} ${item.surname} ${item.duty} флудить в чате`)
    console.log(' ')
}