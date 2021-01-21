// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passwordLength = parseInt(prompt("How long would you like your password to be?"));
  var passwordQuestion1 = confirm("Would you like to include any upper case letters?");
  var passwordQuestion2 = confirm("Would you like to include any lower case letters?");
  var passwordQuestion3 = confirm("Would you like to include any numbers?");
  var passwordQuestion4 = confirm("Would you like to include any special characters?");
  // character sets
  var charsLower = "abcdefghijklmnopqrstuvwxyz"
  var charsUpper = charsLower.toUpperCase()
  var charsNumbers = "012345679"
  var charsSpecial = "!@#$%^&*()_+"
  // TODO from user prompt
  var userLength = 10
  // TODO userLower/userUpper/userNums/userSpecial from confirm boxes.
  var userLower = userUpper = userNums = userSpecial = true
  var password = ""

  if (passwordQuestion1 === true) {
    for (var i = 0; i < passwordLength; i++) {
      var charPick = Math.floor(Math.random() * charsUpper.length)
      password += charsUpper[charPick]
    }
  }

  if (passwordQuestion2 === true) {
    for (var i = 0; i < passwordLength; i++) {
      var charPick = Math.floor(Math.random() * charsLower.length)
      password += charsLower[charPick]
    }
  }

  if (passwordQuestion3 === true) {
    for (var i = 0; i < passwordLength; i++) {
      var charPick = Math.floor(Math.random() * charsNumbers.length)
      password += charsNumbers[charPick]
    }
  }

  if (passwordQuestion4 === true) {
    for (var i = 0; i < passwordLength; i++) {
      var charPick = Math.floor(Math.random() * charsSpecial.length)
      password += charsSpecial[charPick]
    }
  }

  // build the random picker string based on user prompts
  var charSet = (userLower ? charsLower : '')
    + (userUpper ? charsUpper : '')
    + (userNums ? charsNumbers : '')
    + (userSpecial ? charsSpecial : '')
  // generate the string
  var password = ""
  for (var i = 0; i < userLength; i++) {
    var charPick = Math.floor(Math.random() * charSet.length)
    password += charSet[charPick]

  }
  return password
}



// now plug this into the DOM
// document.querySelector("#password").value = password



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
