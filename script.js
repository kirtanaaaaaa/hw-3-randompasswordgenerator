// // Assignment Code
var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
function writePassword() {
   var password = generatePassword();
   var passwordText = document.querySelector("#password");

   passwordText.value = password;

 }

// Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);
 
 alert("Password must be in between 8 and 128 characters");

   var passwordLength = prompt("Password length?");

   var uppercase = confirm ("Do you want uppercase letters?");
   var lowercase = confirm ("Do you want lowercase letters?");
   var number = confirm ("Do you want numbers?");
   var special = confirm ("Do you want special characters?");


 if (uppercase === false && lowercase === false && numbers === false && special === false) {
  alert ("at least one must be chosen!");
}

function generatedPassword(){

  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var specialchar = "!@#$%^&*()-+=~?<>,.\/";
  var pass = "";

  function randomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }
  function randomLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
  function randomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }
  function randomSpecialChar(){
    return symbols [Math.floor(Math.random() * specialChar.length)];
  }

  for (var i = 0; i <= passwordLength ; i++) {
    if (uppercase === true){
      return pass + randomUpper;
    }
    if (lowercase === true){
      return pass + randomLower;
    }
    if (numbers === true){
      return pass + randomNumber;
    }
    if (special === true){
      return pass + randomSpecialChar;
    }
  } 
  
  alert ("your password is " + pass );
}




