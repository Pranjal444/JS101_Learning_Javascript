const a = prompt("Enter a value of a:");
const vowels = ['a', 'e', 'i', 'o', 'u'];
if (/^[a-z]$/.test(character)) {
  if (vowels.includes(character)) {
    console.log("Vowel");
  } else {
    console.log("Consonant");
  }
} else {
  console.log("Not an alphabet character");
}
