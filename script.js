// Assignment Code
var generateBtn = document.querySelector("#generate");


// Creating an index for each type of Value ex Lower Case Upper Case Special and Number
var lowerCaseIndex = 'abcdefghijklmnopqrstuvwxyz';

var upperCaseIndex = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

var specialIndex = '!@#$%^&*_-+=';

var numberIndex = '0123456789';


// Write password to the #password input
function generatePassword() {

  // This is going to determine what the length of the Password the Client would like
  var passwordLength = window.prompt("What would your password length to be?");


  // Determines if the length meets between the 8 and 128 Value if not it will return back to the generate button
  if (passwordLength <= 7 || passwordLength >= 129){
    window.alert("Please type in the length amount, press the Generate Password again.");
    return;
  } 

  // This will determine where or not they want upper case values numbers or special characters. The Lowercase values are default selection.
  var lowerCaseSelection = window.confirm("Would you like to add Lowercase Letters in your password? \n Click ok if yes.");
  
  var upperCaseSelection = window.confirm("Would you like to add Uppercase Letters in your password? \n Click ok if yes.");

  var numberSelection = window.confirm("Would you like to add Numbers in your password? \n Click ok if yes.");

  var specialSelection = window.confirm("Would you like to add Special Characters in your password? \n Click ok if yes.");

  // The following If statments determine whether the window.confirms are true if not they change the variable to nothing so that they will not be a part of the new password
  
  if (lowerCaseSelection === true){
    var lowerCaseSelection = "Yes";
    console.log("Yes")
  }else {
    var lowerCaseSelection = "No";
    console.log("No")
    lowerCaseIndex = '';
  }

  if (upperCaseSelection === true){
    var upperCaseSelection = "Yes";
    console.log("Yes")
  }else {
    var upperCaseSelection = "No";
    console.log("No")
    upperCaseIndex = '';
  }

  if (numberSelection === true){
    var numberSelection = "Yes";
    console.log("Yes")
  }else {
    var numberSelection = "No";
    console.log("No")
    numberIndex = '';
  }

  if (specialSelection === true){
    var specialSelection = "Yes";
    console.log("Yes")
  }else {
    var specialSelection = "No";
    console.log("No")
    specialIndex = '';
  }

  // Sets new variable for a new password and also comes up with the confirmation for all of the password parameters
  var newPassword = '';
  var passwordConfirmation = window.confirm("Here are the selections that you have made for your password Generator! \n "+ "Lower Case Letters: " + lowerCaseSelection + "\n Upper Case Letters: " + upperCaseSelection + "\n Numbers: " + numberSelection + "\n Special Characters: " + specialSelection);

  // If they do not click ok on the confirmation they will have to restart
  if (passwordConfirmation == false){
    window.alert("Click Generate Password to restart")
    return;
  }

  // This will set the password parameters so if it includes any of the individual indexes.
  var passParameters = lowerCaseIndex + upperCaseIndex + specialIndex + numberIndex;

  for ( var i = 0; i < passwordLength; i++){
      newPassword += passParameters.charAt(Math.floor(Math.random() * passParameters.length));
      console.log(newPassword);
  };

  // Logs the new password and returns the new password so that it is stored inside the password variable.-
  console.log(newPassword);
  return newPassword;

}



function writePassword() { 

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 