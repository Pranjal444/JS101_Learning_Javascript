const userInput = prompt("Enter value of a:");
const a = parseInt(userInput);
const userInput1 = prompt("Enter value of b:");
const b = parseInt(userInput1);
if (a > b) {
  console.log("Print a is greater");
} else
  if (a < b) {
    console.log("Print b is greater");
  }
  else
    if (a == b) {
      console.log("Print both are equal");
    }
