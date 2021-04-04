console.log("I am Symbols");


// symbols use for  create uniqe premetive 
//define persons who's name is same that case we use premetives
let jay= Symbol("Jay");
let jay1=Symbol("Jay");


//this two guy are not same

let obj={
    jay:"kemcho",
    karan:"Keshwala"
};
obj[jay]="Karan";
obj["Mahesh"]="Kemche";
console.log(obj);
// console.log(JSON.stringify(obj));


//for in loop and json.stringify ingrones the symbols
//  Array.from(obj).forEach(()=>{

//     console.log(obj);
//  })
//  for(let i of obj){
//      console.log(i);
//  }