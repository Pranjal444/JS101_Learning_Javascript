function printOddNumbers(limit) {
    let num = 1; // Start with the first odd number (1)
  
    while (num <= limit) {
      console.log(num);
      num += 2; // Increment by 2 to get the next odd number
    }
  }
  
  // Example usage:
  const limit = parseInt(prompt("Enter a limit:"));
  printOddNumbers(limit);
  