var specialCharacters = "!@#$%^&*()";
var numbers = 0123456789
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var generateButton = document.getElementById('generateBtn')
generateButton.addEventListener('click', writePassword)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Promptz
function generatePassword() {
  var passwordLength = prompt("How many characters do you want for your password?  It must be more than 8 characters but less than 128 characters.");{
    (else passwordLength = 8 < 128);
    alert("It must be more than 8 characters but less than 128 characters.");
    
  };

  var numbers = prompt("Do you want numbers in your password?");

  var lowerCases = prompt("Do you want lowercases in your password?");

  var upperCases = prompt("Do you want uppercases in your password?");

  var special = prompt("Do you want special characters in your password?");

  // this is a minimum count for numbers, lowerCases, upperCases & specialCharacters
  var minimumCount = 0;

}