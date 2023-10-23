// Define the stored username and password
const storedUsername = "Sonal";
const storedPassword = "Sonal123";

// Get input from the user
const inputUsername = prompt("Enter your username: ");
const inputPassword = prompt("Enter your password: ");

// Check if the input username and password match the stored values
if (inputUsername === storedUsername && inputPassword === storedPassword) {
  console.log("Login successful. You can log in.");
} else {
  console.log("Login failed. Invalid username or password.");
}
