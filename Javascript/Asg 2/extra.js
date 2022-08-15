// Write a function to convert a character to lower case
// Use this function to convert a given word to lower case
// Use that function to convert an array of strings to array of lower case strings
// Sample Input ["MA", "SA", "I", "SCH", "OOL"]
// Sample Output ["ma", "sa", "i", "sch", "ool"]

let arr = ["MA", "SA", "I", "SCH", "OOL"];
let lower = "abcdefghijklmnopqrstuvwxyz";
let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let ans = [];
for(let i = 0 ; i < arr.length; i++){
    let word = arr[i];
    // console.log('word:', word)
    let str = "";
    for(let j = 0; j < word.length; j++){
        // console.log(word[j]);
        for(let k = 0; k < upper.length; k++){
            if(word[j] == upper[k]){
                str += lower[k];
            }
        }       
    }
    ans.push(str);
}
console.log(ans);

// Given a string swap the case and print the output
// Sample Input - Test
// Sample Output - tEST
// NOTE: Use multiple functions to achieve the result, NOT one single code block

// let lower = "abcdefghijklmnopqrstuvwxyz";
// let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let data = "Test";
function toLower(t){
    // console.log(lower[t]);
    return lower[t];
}
function toUpper(t){
    // console.log(upper[t]);
    return upper[t];
}
function opertaion(inpt){
    let str = "";
    // console.log(inpt);
    for(i = 0; i < inpt.length; i++){
        for(let j = 0; j < lower.length; j++){
            if(inpt[i] == upper[j]){
                str +=  toLower(j);
              }
              if(inpt[i] == lower[j]){
                  str += toUpper(j);
              }
        }
       
    }
    console.log(str);
}
opertaion(data);


//  isPrime number

