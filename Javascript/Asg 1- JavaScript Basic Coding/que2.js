// Question 2:
// var enteredAlphabet = 'd' or "D"
// Write a program to check vowel, consonant or non-alphabet using switch case.
// Change value of enteredAlphabet and check if your code works fine.


var enteredAlphabet = "A"; 
var alpha2 = "D";
var vowel = false;
var consonent = false;
var nonAlpha = false;
switch(enteredAlphabet){
    case "a" : vowel = true;
    break;
    case "A" : vowel = true;
    break;
    case "e": vowel = true;
    break;
    case "E" : vowel = true;
    break;
    case "i" : vowel = true;
    break;
    case "I" : vowel = true;
    break;
    case "o" : vowel = true;
    break;
    case "O" : vowel = true;
    break;
    case "u" : vowel = true;
    break;
    case "U" : vowel = true;
    break;
    case "&" : nonAlpha = true;
    break;
    case "@" : nonAlpha = true;
    break;
    case "#" : nonAlpha = true;
    break;
    case "$" : nonAlpha = true;
    break;
    case "%" : nonAlpha = true;
    break;
    case "^" : nonAlpha = true;
    break;
    case "*" : nonAlpha = true;
    break;  
    default: consonent = true;
    break;
}
 if(vowel == true){
    console.log(`${enteredAlphabet} is Vowel`);
 }else if(nonAlpha == true){
    console.log(`${enteredAlphabet} is Non Alphabet`)
 } if(consonent){
    if(typeof(enteredAlphabet) == "number"){
        console.log(`${enteredAlphabet} is Non Alphabet`);
    }else {
        console.log(`${enteredAlphabet} is Consonent `);
    }
 }