console.log("Hello From Metacharacters");


// let reg=/hardwork/;
// let reg=/^jay/; // return match if string start with jay
// let reg=/success$/; //if string ends with success then return match
// let reg=/Har.work/;  //avoid one character matching
//  let reg=/Har.?work/;// if we need to avoid one character then use ?for example: for harwork return true
// let reg=/b*/; if our string include any word which start from b
// let reg=/b\*/;//if we need to match exat * then we use \*;
let str="jay is belive in Harwork and harwork is the key of b* success";

let result1=reg.exec(str);
console.log(result1);

let result2=reg.test(str);
 if(result2){
     console.log("Match");
 }else
 {
    console.log("Not Match");

 }