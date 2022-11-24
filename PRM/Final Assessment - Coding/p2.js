/*

Javascript - 2

Q2. Count the occurrence of keys and 
convert the result into an array of objects 
where each object belongs to one key and its occurrence (count).

    Input:

         [{ language: 'JavaScript' },{ language: 'JavaScript' },{ language: 'C++' },{ language: 'TypeScript' }]

    Output:

         [{ language: 'JavaScript', count: 2 },{ language: 'C++', count: 1 },{ language: 'TypeScript', count: 1 }]


*/
let data = [
  { language: "JavaScript" },
  { language: "JavaScript" },
  { language: "C++" },
  { language: "TypeScript" },
];
let sol = [];
let flag = 1;
// console.log("data:", data);
for (let i = 0; i < data.length - 1; i++) {
  if (data[i].language === data[i + 1].language) {
    flag++;
    data[i].count = flag;
    sol.push(data[i]);
  } else {
    flag = 1;
    data[i + 1].count = flag;
    sol.push(data[i + 1]);
  }
  if (i === data.length - 1) {
    data[i].count = flag;
    sol.push(data[i]);
  }
}

console.log(sol);
