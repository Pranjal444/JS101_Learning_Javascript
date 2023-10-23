
function convertToUppercase(char) {
    if (char.length === 1 && /[a-z]/.test(char)) {
      const uppercaseChar = char.toUpperCase();
      console.log(`Uppercase character: ${uppercaseChar}`);
    } else {
      console.log("Please enter a valid lowercase character.");
    }
  }
  
  const lowercaseChar = "a";
  
  
  convertToUppercase(lowercaseChar);
  