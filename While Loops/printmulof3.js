function sumMultiplesOf3() {
    const limit = parseInt(prompt("Enter a limit:"));
    let sum = 0;
    let i = 0;
  
    while (i <= limit) {
      if (i % 3 === 0) {
        sum += i;
      }
      i++;
    }
  
    console.log(`The sum of multiples of 3 from 0 to ${limit} is: ${sum}`);
  }
  
  sumMultiplesOf3();
  