const userInput = prompt("Enter a number:");
const number = parseFloat(userInput);
if (number % 3 === 0) {
  console.log("Multiple of 3");
} else {
  console.log("Not a multiple of 3");
}