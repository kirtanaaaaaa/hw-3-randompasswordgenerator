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
 
function generatePassword(){

  var passwordLength = prompt("Password length?");

  if (passwordLength <8 || passwordLength >128){
    alert ("must be in between 8 and 128 characters");
  }
  else {
    var includeUppercase = confirm ("Do you want uppercase letters?");
    var includeLowercase = confirm ("Do you want lowercase letters?");
    var includeNumbers = confirm ("Do you want numbers?");
    var includeSpecial = confirm ("Do you want special characters?");
  }
  
 if (includeUppercase === false && includeLowercase === false && includeNumbers === false && includeSpecial === false) {
  alert ("at least one must be chosen!");
}
   var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   var lowercase = "abcdefghijklmnopqrstuvwxyz";
   var numbers= "0123456789";
   var special= "!@#$%^&*()-+=~?<>,.\/";

  var passwordArray = [];

  for (var i = 1; i <= passwordLength; i++) {
    if (includeUppercase === true){
    var a = uppercase[Math.floor(Math.random() * uppercase.length)];
    passwordArray.push(a);
    }
    if (includeLowercase === true){
    var b = lowercase[Math.floor(Math.random() * lowercase.length)];
    passwordArray.push(b);
    }
    if (includeNumbers === true){
    var c = numbers[Math.floor(Math.random() * numbers.length)];
    passwordArray.push(c);
    }
    if (includeSpecial === true){
    var d = special[Math.floor(Math.random() * special.length)];
    passwordArray.push(d);
    }
  } 
  
  
  alert ("your password is " + passwordArray);
}




