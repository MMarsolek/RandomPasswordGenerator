// Assignment Code
var generateBtn = document.querySelector("#generate");


// Adds event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var requierments = questionPopUp();
  var password = generatePassword(requierments);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//Creates popups  that gather user input and stores that data in an object
function questionPopUp(){
  var length = parseInt(window.prompt("How long would you like the password? Please enter a number between 8 - 128."));
  if(length == null){
    length = parseInt(window.prompt("How long would you like the password? Please enter a number between 8 - 128."));
  }

  while (length < 8 || length > 128 ) {
    length =  parseInt(window.prompt("Incorrect input. Please enter a number between 8 and 128."));
  }
  var letters = window.confirm("Would you like letters in your password? Please select 'Yes' or 'Cancel'");
  var caps = false;
  var lower = false;

  if (letters) {
    caps = window.confirm("Would you like capitol letters? Please select 'Yes' or 'Cancel'");
    lower = window.confirm("Would you like lower case letters? Please select 'Yes' or 'Cancel'");
  }
  var numbers =  window.confirm("Would you like numbers in your password? Please select 'Yes' or 'Cancel'");
  var specials = window.confirm("Would you like special characters in your password? Please select 'Yes' or 'Cancel'");

  if (!letters && !numbers && !specials) {
    window.alert("Invalid selections. Please try again. Please select 'Yes' or 'Cancel'");
    questionPopUp();
  }

  return {
    length: length,
    letters: letters,
    capitals: caps,
    lowerCase: lower,
    numbers: numbers,
    specialCharacters: specials
  };
}

//This function takes an object of user data and creates and object filled with objects made of up the password requirements.
//It then loops through the objects and determines if the string stored in the 'material' should be added to the returned string.
function passwordMaterialGenerator(passwordRequirements){
  var lowerCase =  "abcdefghijklmnopqrstuvwxyz";
  var passwordMaterial;
  var passwordBuildData = {
    lowerCase: {
      enabled: passwordRequirements.lowerCase,
      material: lowerCase
    }, 
    capitals: {
      enabled: passwordRequirements.capitals,
      material: lowerCase.toUpperCase()
    },
    numbers: {
      enabled: passwordRequirements.numbers,
      material: "0123456789"
    },
    specialCharacters: {
      enabled: passwordRequirements.specialCharacters,
      material: "!\"#$ %&'()*+,-./:;<=>?@[\\]^_`{|}~"
    }
  }

  for (each of Object.keys(passwordBuildData)){
    if (passwordBuildData[each].enabled === true) {
      passwordMaterial = passwordMaterial+passwordBuildData[each].material
    }
  }
  return passwordMaterial;
}

//Takes an object filled with user data so that we can get the desired length from it. We loop the desired length of the password and add a character each loop.
//The character is determined by randomly generating a float using Math.random() and the length of the given material. The float is then turned into a int by using parseInt.
//The available characters are a string that is generated using the passwordMaterialGenerator.  
function generatePassword(passwordRequirements){
  var password = "";
  var material = passwordMaterialGenerator(passwordRequirements);
  for (var i=1; i<=passwordRequirements.length; i++){
    var randomNumber = parseInt(Math.random()*(material.length));
    password = password+ material.charAt(randomNumber);
  }
  return password;
}

