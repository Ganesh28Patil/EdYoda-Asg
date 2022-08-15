
// Question 5:
// Write a JavaScript program to reverse a string without using inbuilt methods.
// For example,
// Input: Hello
// Output: olleH

let input = "Hello";
let str = "";
// console.log(input.split("").reverse().join(""));
for(let i = input.length-1; i >= 0; i--){
    str += input[i];
}
console.log(str);