// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var myPasswordLength;

var choiceArr = [specialCharacters, upperCasedCharacters, lowerCasedCharacters, numericCharacters];

// Function to prompt user for password options
function getPasswordOptions() {
  var passwordLength = prompt('Please enter the desired length of your password in numerical form between 10 and 64.');

  var passwordLengthToInt = parseInt(passwordLength);

  if(passwordLengthToInt < 10){
    var warning = alert('Your desired length is too short. Please enter a number between 10 and 64');
    getPasswordOptions();
  } else if(passwordLengthToInt > 64){
    var warning = alert('Your desired length is too long. Please enter a number between 10 and 64');
    getPasswordOptions();
  }

  myPasswordLength = passwordLengthToInt;




  var hasLowerCase = confirm('Would you like your password to contain lower case characters?');
  var hasUpperCase = confirm('Would you like your password to contain uppercase characters?');
  var hasSpecialCharacter = confirm('Would you like your password to contain special characters?');

  

  var optionsArr = [hasLowerCase, hasUpperCase, hasSpecialCharacter];
  
  return optionsArr;
}

// Function for getting a random element from an array
function getRandom(arr) {
  randIndex = arr[Math.floor(Math.random() * arr.length)];

  return randIndex;
}

// Function to generate password with user input
function generatePassword() {
  let password = '';
  let passwordOptions = getPasswordOptions();

  console.log(passwordOptions);

  if(passwordOptions[0] === false){
    choiceArr.splice(2, 1);
  }
  if(passwordOptions[1] === false){
    choiceArr.splice(1, 1);
  }
  if(passwordOptions[2] === false){
    choiceArr.splice(0, 1);
  }





  for(let i = 0; i < myPasswordLength; i++){
    var randomArr = getRandom(choiceArr);
    var character = getRandom(randomArr);

    password += character;

    console.log(password);

  }

  return password;

}

function refreshGenerator() {
  myPasswordLength = 0;

  choiceArr = [specialCharacters, upperCasedCharacters, lowerCasedCharacters, numericCharacters];
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;

  refreshGenerator();
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
