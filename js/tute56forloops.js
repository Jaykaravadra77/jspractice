console.log("Hello I am Tute56 and it is for loops");

let arr=["Lenovo","HP","Dell","Aplle"];
let obj={
    name:"Jay",
    language:"Javascript",
    framework:"Node Js"
}
console.log("******Traditional For Loops***********");
//traditional For Loops

// for(let i=0;i<arr.length;i++){

//   console.log(arr[i]);
// }

for(let i=0;i<Object.keys(obj).length;i++){
       console.log(obj[Object.keys(obj)[i]]);
}

// for in for loops
console.log("***************for in loop ************")
for(let i in arr){
    console.log(arr[i]);
}

console.log("***************for of  loop************")
for(let i of arr){
    console.log(i);
}