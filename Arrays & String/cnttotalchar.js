function countTotalCharacters(stringsArray) {
    let totalCharacters = 0;
  
    for (let i = 0; i < stringsArray.length; i++) {
      totalCharacters += stringsArray[i].length;
    }
  
    return totalCharacters;
  }
  
  
  const stringsArray = ["Hello", "Pranjal", "MCA"];
  
  const result = countTotalCharacters(stringsArray);
  console.log(`Total number of characters: ${result}`);
  