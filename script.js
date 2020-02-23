// Assignment Code

// Add event listener to generate button
document.getElementById("generate").addEventListener("click", generatePassword,false);

// This function sorts out whether or not the password length input is a valid integer
function isInteger(x) {
    return x % 1 === 0;
}

function generatePassword () {
// Password length prompt
    var passlength=0
    var passlength = prompt("How many characters would you like your password to be?")

// This determines whether the user has made a valid password length selection, using the integer-type check above
    if (isInteger(passlength)===false){alert("This is not a valid length input. Please try again")} else { 
    
// Forced correction if the user chooses an password-length integer that is not a valid length    
    if (passlength<8) {
    alert ("Your password selection was too short. Your password will be the minimum length, 8 characters");
    passlength=8
    }
    if (passlength>128){
    alert("Your password selection was too long. Your generated password will be the maximum length, 128 characters")
    passlength=128
    }

// Selection of password characteristics
    var lowcase = confirm("Would you like your password to have lower-case letters?")
    var upcase = confirm("Would you like your password to have upper-case letters?")
    var numeric = confirm("Would you like your password to have numbers?")
    var special = confirm("Would you like your password to have special characters?")

// Restart if the user chooses no component characteristics for the password
    if (lowcase===false && upcase===false && numeric===false && special===false)
    {alert ("You much choose at least one characteristic for your password. Please try again.")}
    else {

// Assembly of list of possible characters to be used in random password
    var props=["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "01234567890", "!@#$^&%*()+=-[]\/{}|:<>?,."]
    if (lowcase===true) {var lowcasecheck=props[0]} else {lowcasecheck=""}
    if (upcase===true) {var upcasecheck=props[1]} else {upcasecheck=""}
    if (numeric===true) {var numericcheck=props[2]} else {numericcheck=""}
    if (special===true) {var specialcheck=props[3]} else {specialcheck=""}
    
    var propsString=lowcasecheck+upcasecheck+numericcheck+specialcheck

// Empty string variable to be appended to
    var pass = ""
    
// Random selection of password characters from list of possible characters (to be repeated the number of times of the user-selected password length)
    for(var i = 0; i < passlength; i++)
    {pass+=propsString.charAt(Math.floor(Math.random() * propsString.length))}
    alert(pass)
    }}}