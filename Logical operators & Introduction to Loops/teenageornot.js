const userInput = prompt("Enter a age:");
const age = parseFloat(userInput);
if (age >= 13 && age <= 19) {
  console.log("Teenage");
}
else
  if (age >= 20 && age <= 29) {
    console.log("Twenties");
  }  
