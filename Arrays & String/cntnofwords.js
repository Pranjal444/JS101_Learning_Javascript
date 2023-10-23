function countWordsWithoutPredefinedFunctions(inputString) {
    let wordCount = 0;
    let isInsideWord = false;
  
   
    for (let i = 0; i < inputString.length; i++) {
      const char = inputString[i];
  
      const isWordCharacter = /[a-zA-Z0-9]/.test(char);
  
      if (isWordCharacter && !isInsideWord) {
        
        wordCount++;
        isInsideWord = true;
      } else if (!isWordCharacter) {
        
        isInsideWord = false;
      }
    }
  
    return wordCount;
  }
  
  
  const inputString = "My Name is Pranjal And I belive in Me";
  
  
  const result = countWordsWithoutPredefinedFunctions(inputString);
  console.log(`Number of words: ${result}`);
  