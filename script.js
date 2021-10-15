// Assignment Code
var generateBtn = document.querySelector("#generate");
// made an object that has all the characters types being used 
// character types are special characters, number characters, lowercase characters, and uppercase characters
var character = {
  special: '!@#$%^&*()[];:',
  number: '1234567890',
  lowercase:'abcdefghijklmnopqrstuvwxyz',
  uppercase:'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
}
// create empty string for selected character types 
var charBank = "";

// check step
console.log(character.special);
console.log(character.number);
console.log(character.lowercase);
console.log(character.uppercase);

// Write password to the #password input
function writePassword() {
   var password = generatePassword();
   var passwordText = document.querySelector("#password");

   passwordText.value = password;
}
  function generatePassword() {
    // select length of password
    var passwordLength = window.prompt("How many characters would you like your password to contain?")
      if (passwordLength <8  || passwordLength >128) {
        alert("Password must be at least 8 character and no greater than 128");
        return;
      }
      console.log(passwordLength);

    //select special characters 
    var passwordSpecial = window.confirm("Click OK to confirm including special characters")
      if (passwordSpecial === true) {
        charBank = charBank.concat(character.special);
      } 
      console.log(charBank)
      console.log(passwordSpecial);

      // select numerical characters
    var passwordNumber = window.confirm("Click OK to confirm including numerical characters")
      if (passwordNumber === true) {
        charBank = charBank.concat(character.number);
      }
      console.log(charBank)
      console.log(passwordNumber);

      // select lowercase characters
    var passwordLowercase = window.confirm("Click OK to confirm including lowercase characters")
      if (passwordLowercase === true) {
        charBank = charBank.concat(character.lowercase);
      }
      console.log(charBank)
      console.log(passwordLowercase);  

      // select uppercase characters
    var passwordUppercase = window.confirm("Click OK to confirm including uppercase characters")
      if (passwordUppercase === true) {
        charBank = charBank.concat(character.uppercase);
      }
      console.log(charBank)
      console.log(passwordUppercase);

      // ensure that at least one character type is choosen
      if (passwordSpecial ===false && passwordNumber === false && passwordLowercase === false && passwordUppercase === false) {
      alert("You must select at least one character type!");
      return;
      }
      console.log(charBank)

      // create empty string for password
    var passwordOK = "";

    // for loop to have randomly choosen character types for the length of password choosen
    for (var i = 0; i <passwordLength; i++) {
      passwordOK += charBank[Math.floor(Math.random()*charBank.length -1 )]
    }
      
      console.log(passwordOK);
      return passwordOK;
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
