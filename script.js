// Assignment Code
var generateBtn = document.querySelector("#generate");





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(){
  var choiceChar = document.getElementById("char")
  var choiceUpper = document.getElementById("upper")
  var choiceLower = document.getElementById("lower")
  var choiceNum = document.getElementById("num")

  var randCombineFunction = {
    char: randChar,
    upper: randUpper,
    lower: randLower,
    num: randNum,

};
  


  
  var isChar = confirm("do you want Special Characters? like:!@#$%^&*()_+  ")
  var isUpper = confirm( "Do you want uppercase letters?")
  var isLower = confirm("Do you want lowercase letter?")
  var isNum = confirm("Do you want numbers?")


function randChar() {
	var char = '!@#$%^&*(){}[]=<>/,.'
    return Char[Math.floor(Math.random() * 
        Char.length)];


    }

function randUpper(){
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWZYZ"
    return upper[Math.floor(Math.random() *
        upper.length)];
}

function randLower (){
    var lower = "abcdefghijklmnopqrstuvwxyz"
    return lower[Math.floor(Math.random()*
        lower.length)];


}
function randNum (){
var num = "1234567890"
return num[Math.floor(Math.random()*
   num.length )];

}

  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
