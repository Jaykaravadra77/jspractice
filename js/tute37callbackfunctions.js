console.log("CallBack functions");
 

const students=[{name:"Jay",language:"Javascript"}];
 

function inroll(student,CallBack){
    setTimeout(function(){
        students.push(student);
        console.log("student enrolled succesfully");
        CallBack();
         
    },2000);
   
}

function display(){
    let ul=document.getElementById('ul');
   setTimeout(function(){
    let str="";
    students.forEach(function(student){
     str+=`<li>${student.name}</li>`;
     console.log("student fetched succesfully");
    });
    ul.innerHTML=str;

   },1000);
   
    
}
let sds={name:"karan",language:"medicicnes"}
inroll(sds,display);
 