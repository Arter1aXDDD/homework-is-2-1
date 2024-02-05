let product = {
    name: "Стиральная Машина", 
    price: 41999,
    inStock: true,
    brand: "Samsung",
    specifications: {
        Bearing: "6306 ZZ SKF №180306",
        MotorBrushes: "5*13,5*40",
        Hose: "Cotali"
    },
    discount: {
      percentage: 10,
      expirationDate: "2024-02-21"
    }
}
    
let customer = {
name: "Kazuya",
budget: 50000
};
  

if (customer.budget < product.price) {
    console.log("Недостаточно средств.");
  } else {
    console.log(`Товар ${product.name} доступен по цене ${product.price} рублей.`);
  
    console.log(`Технические характеристики:
Подшипник: ${product.specifications.Bearing}
Щетки электродвигателя: ${product.specifications.MotorBrushes}
Шланг: ${product.specifications.Hose}`);
  
    if (product.discount) {
      console.log(`Скидка ${product.discount.percentage}% до ${product.discount.expirationDate}`);
      let discountedPrice = product.price - (product.price * product.discount.percentage / 100);
      console.log(`Цена со скидкой: ${discountedPrice} рублей.`);
    }
  }