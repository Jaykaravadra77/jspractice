console.log("Hello How Are you i am charactersetok");


let reg=/jay[a-y]xxx[0-9]/;
reg=/jay[^9]/;

//quantifiers
reg=/(reg){2}(?j)/  ; //mixing the concepts of quantifires and assermtions
 
// grouping
reg=/(jay){2}[5-8](?!j)/;


let str="fdfdjayiregregkaxxx9s belive in Harwork and harworkis the key ofjy success";
// str="jayjay6j";

let result1=reg.exec(str);
console.log(result1);

let result2=reg.test(str);
 if(result2){
     console.log("Match");
 }else
 {
    console.log("Not Match");

 }