function is_predator(animal) {
    const predators = ['лев', 'тигр', 'волк', 'пума', 'ягуар'];
    
    if (predators.includes(animal.toLowerCase())) {
        return true;
    } else {
        return false;
    }
}

const animal = prompt('Введите название животного:');
if (is_predator(animal)) {
    console.log(`${animal} - хищник.`);
} else {
    console.log(`${animal} - не хищник.`);
}