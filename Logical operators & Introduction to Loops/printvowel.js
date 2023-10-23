const character = prompt("Enter a character:").toLowerCase();
const vowels = ['a', 'e', 'i', 'o', 'u'];
if (vowels.includes(character)) {
  console.log("Vowel");
} else {
  console.log("Not a vowel");
}
