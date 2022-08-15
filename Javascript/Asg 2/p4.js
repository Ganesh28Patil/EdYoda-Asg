// Question 4:
// Write a JavaScript program to check if two strings are anagrams. Anagram string are such two strings which can be rearranged to create one another.
// For example,
// Input: LISTEN and SILENT
// Output: True
// Input: HELLO and JELLO
// Output: False
let chr1 = "LISTEN";
let chr2 = "SILENT";

// console.log(chr1.split("").sort((a,b)=>(a-b)).join(""));
let dic = {};
let dic2 = {};

if(chr1.length != chr2.length){
    console.log("False")
}else{
    for(let i = 0; i < chr1.length; i++){
        if(chr1[i] in dic){
            dic[chr1[i]] += 1;
        }else{
            dic[chr1[i]] = 1;
        }
        if(chr2[i] in dic2){
            dic2[chr2[i]] += 1;
        }else{
            dic2[chr2[i]] = 1;
        }
    }
}
console.log(dic);
console.log(dic2);

for(let key in dic){
    // console.log(key);
    if(key in dic2){
        // console.log("Key = ",key)
        flag = true;
    }else{
        flag = false;
        break;
    }
}
if(flag){
    console.log("True");
}else{
    console.log("False");
}

