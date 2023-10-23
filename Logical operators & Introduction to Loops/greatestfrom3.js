const a = parseFloat(prompt("Enter the first number:"));
const b = parseFloat(prompt("Enter the second number:"));
const c = parseFloat(prompt("Enter the third number:"));
// Check if the input is valid numbers
if (isNaN(a) || isNaN(b) || isNaN(c)) {
  console.log("Invalid input. Please enter valid numbers.");
} else {
  // Compare the numbers to find the greatest
  if (a > b && a > c) {
    console.log(`${a} is the greatest.`);
  } else if (b > a && b > c) {
    console.log(`${b} is the greatest.`);
  } else {
    console.log(`${c} is the greatest.`);
  }
}
