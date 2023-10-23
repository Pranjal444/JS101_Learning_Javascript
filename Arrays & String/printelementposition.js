
function printArrayWithPosition(arr) {
    for (let i = 0; i < arr.length; i++) {
      const position = i + 1;
      const element = arr[i];
      console.log(`Position ${position}: ${element}`);
    }
  }
  
  
  const a = [10, 20, 30, 40, 50];
  
  
  printArrayWithPosition(a);
  