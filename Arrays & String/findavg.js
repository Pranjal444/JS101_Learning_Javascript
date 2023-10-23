function averageOfEvenNumbers(numbers) {
    let sum = 0;
    let count = 0;
  
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        sum += numbers[i];
        count++;
      }
    }
  
    if (count === 0) {
      return "No even numbers found.";
    }
  
    const average = sum / count;
    return average;
  }
  
  
  const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8];
  
  const result = averageOfEvenNumbers(numbersArray);
  console.log(`Average of even numbers: ${result}`);
  