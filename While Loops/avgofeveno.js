function calculateAverageOfEvenNumbers() {
    let sum = 0;
    let count = 0;
    let number = 2;
  
    while (number <= 100) {
      sum += number;
      count++;
      number += 2;
    }
  
    const average = sum / count;
  
    console.log(`The average of even numbers from 1 to 100 is: ${average}`);
  }
  
  calculateAverageOfEvenNumbers();
  