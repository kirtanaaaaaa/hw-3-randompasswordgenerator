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
   var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
   var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
   var numbers= ["0","1","2","3","4","5","6","7","8","9"];
   var special= ["!","@","#","$","%","^","&","*","(",")","-","+","=","?","/",".","<",">","|"];

   var eligibleCharacters = []

   if (includeUppercase){
    eligibleCharacters = eligibleCharacters.concat(uppercase)
   }

   if (includeLowercase){
     eligibleCharacters = eligibleCharacters.concat(lowercase)
   }

   if (includeNumbers){
     eligibleCharacters = eligibleCharacters.concat(numbers)
   }

   if (includeSpecial){
     eligibleCharacters = eligibleCharacters.concat(special)
   }
  

   var passwordArray = ""

   for (var i = 0; i < passwordLength; i++){
     passwordArray = passwordArray + eligibleCharacters[Math.floor(Math.random()* eligibleCharacters.length)];
   }

   return passwordArray;

}


