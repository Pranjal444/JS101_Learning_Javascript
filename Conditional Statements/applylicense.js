const userInput = prompt("Enter a age:");
const age = parseFloat(userInput);
if (age >= 18) {
  console.log("Apply for a license");
} else {
  console.log("NA");
}

