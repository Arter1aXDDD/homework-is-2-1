function filterNegativeNumbers(numbers) {
    return numbers.filter(num => num < 0);
  }
  
  const inputList = [1, -2, 3, -4, 5];
  const negativeNumbers = filterNegativeNumbers(inputList);
  console.log(negativeNumbers);