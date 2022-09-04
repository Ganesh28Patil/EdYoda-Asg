// Question 1:
// Write a program to search if a number exists in an array. If the number exists then return the position. If it exists multiple time then return an array with all the positions. If the number doesn't exist then return -1;
// For example,
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 4
// Output: 3
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 1
// Output: [0, 5]
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 7
// Output: -1
let arr = [1,2,3,4,5,6,1];
let num = 1;
let store = [];
for(let i = 0;  i < arr.length; i++){
    if(arr[i] == num){
      store.push(i);
    }
}
console.log(store.join(" "));