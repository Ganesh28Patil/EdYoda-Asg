// Question 2:
// Write a program to print following pattern in the console.
// 54321
// 5432
// 543
// 54
// 5
let num = 5;
for(let i = 1; i <= num; i++){
let str = "";
    for(let j = num; j >= i; j--){
        str += j;
    }
    console.log(str);
}