console.log("Reg Expreshion");


let reg=/jay/g;
// let reg=/jay/i; //when we don't need to case sensitity us i flag
let str="jay is a men who hardwork daily for his life and jay Gradpoint is quit Higer";


// return the array for match and if not the null 
let result=reg.exec(str);
console.log(result);

// if we use (let reg=/jay/g;)Global and we run run same code then occurence fetch.
 result=reg.exec(str);
// console.log(result.input);
// console.log(result.index);

// let result2=reg.test(str);
// console.log(result2);

//match function in javascript

// let result3=str.match(reg);
// console.log(result3);

//search function in javascript


// let result3=str.search(reg);
// console.log(result3);

//replacement functtion javascript
let result5=str.replace(reg,"harry");
console.log(result5);