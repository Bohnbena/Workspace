//Funktion um zu schauen ob felder leer
function LeererInput() {
  let InputUsername = document.getElementById("InputUsername");
  let InputPassword = document.getElementById("InputPassword");
  let InputPasswordAgain = document.getElementById("InputPasswordAgain");

  CheckUserInput(
    InputUsername.value,
    InputPassword.value,
    InputPasswordAgain.value
  ); //Check inputs if empty color red , gebe mit values

  Requirementsforinput(
    InputUsername.value,
    InputPassword.value,
    InputPasswordAgain.value
  );
}

function changeBackgroundColor(element, color) {
  element.style.backgroundColor = color;
}

function CheckUserInput(UsernameValue, PasswordValue, PasswordAgainValue) {
  if (UsernameValue == "") {
    //check if username input empty
    changeBackgroundColor(InputUsername, "#ff434f");
  } else if (UsernameValue != "") {
    changeBackgroundColor(InputUsername, "white");
  }

  if (PasswordValue == "") {
    // check if password input empty
    changeBackgroundColor(InputPassword, "#ff434f");
  } else if (PasswordValue != "") {
    changeBackgroundColor(InputPassword, "white");
  }

  if (PasswordAgainValue == "") {
    // Check if password and password the same
    changeBackgroundColor(InputPasswordAgain, "#ff434f");
  } else if (PasswordValue != PasswordAgainValue) {
    changeBackgroundColor(InputPasswordAgain, "#ff434f");
  } else if (PasswordValue == PasswordAgainValue) {
    changeBackgroundColor(InputPasswordAgain, "white");
  }
}

function Requirementsforinput(
  UsernameValue,
  PasswordValue,
  PasswordAgainValue
) 
{
  let warnung = document.getElementById('warnung')
  if (UsernameValue.length < 3 && UsernameValue.length != '')
  {
    warnung.innerText = "Username to short"
  }
  
  if (PasswordValue.includes(UsernameValue) && UsernameValue != '') {
    warnung.innerHTML = "Das Password darf nicht dem Username entsprechen"
  }

}

function passwordReqColor(){
  let PassInfo3Char = document.getElementById('PassInfo1');
  let PassInfoNums = document.getElementById('PassInfo2');
  let PassInfoUpLow = document.getElementById('PassInfo3');
  let PasswordValueR = document.getElementById('InputPassword').value;

  if (containsNumbers(PasswordValueR)){
  // Ändere die Liste auf grün oder so
    PassInfoNums.style.color = "#008010"
  } else {
  // lass die Liste auf rot weil nicht erfüllt
    PassInfoNums.style.color = "#ff0000"
  }

  if (containsUpperLower(PasswordValueR)){
  // Ändere die lieste weil stimmt
    PassInfoUpLow.style.color = "#008010"
  } else {
  // Ändere nix weil nicht erfüllt
    PassInfoUpLow.style.color = "#ff0000"
  }

  if (PasswordValueR.length > 3){
    // Mach grün
    PassInfo3Char.style.color = "#008010"
  } else {
    // rot 
    PassInfo3Char.style.color = "#ff0000"
  }
}

function containsNumbers(ValueToCheckForNumbers){
    return /\d/.test(ValueToCheckForNumbers);
}

function containsUpperLower(password) {
    // Überprüfen auf Großbuchstaben
    var hasUpperCase = /[A-Z]/.test(password);
  
    // Überprüfen auf Kleinbuchstaben
    var hasLowerCase = /[a-z]/.test(password);
  
    // Das Passwort ist stark, wenn alle Bedingungen erfüllt sind
    return hasUpperCase && hasLowerCase;
  }

  //GitTest