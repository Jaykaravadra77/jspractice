console.log("I Am shorthand character classs");

let reg=/\wjay/;
reg=/\w+jay/;
reg=/\Wjay/;
reg=/\W+jay/;
reg=/\djay/;
reg=/\d+jay/;
reg=/\Djay/;
reg=/\D+jay/;
reg=/\sis/;
reg=/\s+is/;
reg=/\Sis/;
reg=/\S+is/;
reg=/jay\b/;
reg=/jay\B/;

//asertions
reg=/j(?=y)/;
reg=/j(?!y)/;
let str="fdfdjayis belive in Harwork and harworkis the key ofjy success";

let result1=reg.exec(str);
console.log(result1);

let result2=reg.test(str);
 if(result2){
     console.log("Match");
 }else
 {
    console.log("Not Match");

 }