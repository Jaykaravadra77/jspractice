
// for(let i=1;i<50;i++){
  
//    if (i==5) 
//     continue
//     // break

//    console.log(i);
// }

// var a=5
// var x=1
// while(a!=0){
//     console.log(x++);
//     a=a-1
// }
// let i=5
// do{
//     console.log(i)
//     i=i-1
// }while(i!=0)
let arr=[4,5,6,9,7,8,5]

arr.forEach(function(element, index, array){
    console.log(array)
});
arr.forEach(function(element){
  console.log(element)
})

const object={
    hello:'jay',
    howare:'howareyou'
}
for(let key in object){
  console.log(`heelo key is ${key} and object is ${object[key]}`)
}