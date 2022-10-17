/*
Introduction to Es6
Let & Const
Template Strings
Arrow Functions
Rest Operators
Spread Operators
*/
// Rest Operators
console.log("Rest Opeartors");
const mSum = (num1,num2, ...args) =>{
    console.log('num1:', num1)
    console.log('num2:', num2)
    console.log('args:', args)
    let sum = num1 + num2;
    for(let i = 0; i < args.length; i++){
        sum += args[i];
    }
    console.log('sum:', sum)
}

mSum(1,2,3,4,5,6,7);


// spread operator
console.log('spread operator on arrays:');
let mArr1 = [1,2,3,4,5];
let mArr2 = [6,7,8];
let mArr3 = [0,...mArr2,...mArr1,9]
console.log('mArr3:', mArr3)


console.log('spread operator on objects:');

let mObj1 = {
    name:'Ganesh',
    surname:"Patil"
}
let mObj2 = {
    age:28,
}
let mObj3 = {
    ...mObj1,...mObj2
}

console.log('mObj3:', mObj3)

