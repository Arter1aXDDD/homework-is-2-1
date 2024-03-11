let telephone = {
    Модель: 'C20',
    Производитель: 'Realme',
    Система: 'Android',
    Цена: '15000',
    Батарея: '5000 mA',
    Дисплей: '1600x720',
    Матрица: 'IPS',
    Встроенная_Память: '64 Гб',
    }
    
    for (let i in telephone) {
    console.log(`${i}: ${telephone[i]}`);
    }
    if (telephone.Система === 'Android') {
    console.log('Телефон работает на Android');
    }
    else {
    console.log('У телефона иная ОС')
    }