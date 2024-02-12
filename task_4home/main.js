const list = {
    basketball: {
        name: "PinkUnicorns", 
        participants: {
            emp1: "Kazuya",
            emp2: "Jin",                
            emp3: "Heihachi",
            }
    },
    volleyball: {
        name: "RibbyFrogs",
        participants: {
            emp1: "Lars",
            emp2: "Lee",
            emp3: "Jinpachi",
            }
    }
};

for (let i in list) {
    console.log(`Команда ${list[i].name}, участники:`)
    for (let j in list[i].participants) {
        console.log(list[i].participants[j])
    }
    console.log(" ")
}