/*
JavaScript Candidates -
Write a program to print a new number with digits reversed from the original one. 
The number provided will be greater than or equal to 0

Input Format:
Input Integer in variable n
Output Format:
print the reverse of the number n.

Sample Input 0:
1234
Sample Output 0:
4321
*/

let input = 1234;
function reverseMe(num) {
  //   console.log(data);
  let str = String(num);
  let sum = "";
  for (let i = str.length - 1; i >= 0; i--) {
    sum += str[i];
  }
  //   console.log(sum);
  return String(sum);
}
let ans = reverseMe(input);
console.log(ans);
