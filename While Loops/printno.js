function printNumbersInRangeWithWhile() {
    const start = parseInt(prompt("Enter the starting number:"));
    const end = parseInt(prompt("Enter the ending number:"));
  
  
    let current = start;
  
    while (current <= end) {
      console.log(current);
      current++;
    }
  }
  
  
  printNumbersInRangeWithWhile();
  