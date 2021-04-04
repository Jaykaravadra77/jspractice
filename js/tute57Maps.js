console.log("Hi I am Map not Geometry map its Javascript Maps");


let m=new Map();
let key1="infojay" , key2="InforMahesh",key3="InfoMihir";

m.set(key1,{name:"Jay Karavadra",language:"Javascript"});
m.set(key2,{name:"Mahesh",language:"Python"});
m.set(key2,{name:"Mihir",language:"Data science with python"});


//get value
let jayinfo=m.get(key1);
// console.log(jayinfo);


//we can ittere in for of loops , array,foreachloop etc some examples are giver here

m.forEach((value,key)=>
{
    console.log(value,key);
});

let arr=Array.from(m.keys());
console.log(arr);

let arr1=Array.from(m.values());
console.log(arr1);
 