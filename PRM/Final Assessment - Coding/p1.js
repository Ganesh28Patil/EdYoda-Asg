/*
Javascript - 01

Q1. Remove duplicates of an array and 
    return an array of only unique elements

    Input:

         [1, 2, 3, 5, 1, 5, 9, 1, 2, 8]

    Output:

         [ 1, 2, 3, 5, 9, 8 ]    
*/
// let arr = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

// let dic = {};
// for (ele of arr) {
//   let key = ele;

//   if (key in dic) {
//     dic[key] += 1;
//   } else {
//     dic[key] = 1;
//   }
// }
// let ans = Object.keys(dic).map(Number);
// // console.log(dic);
// // console.log(Object.keys(dic).map(Number));

// console.log(ans);

let arr = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
let stack = new Set();
let newSet = new Set(arr);
let sol = [...newSet];
console.log("sol:", sol);
console.log(...newSet);
for (let i = 0; i < arr.length; i++) {
  stack.add(arr[i]);
}
