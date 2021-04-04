console.log('tute37Promises');
 
 

const students=[{name:"Jay",language:"Javascript"}];
 

function inroll(student){
    return new Promise(function(resolve,reject){
        let err=0;
      
        if(!err)
        {
            setTimeout(function(){
                students.push(student);
                console.log("student enrolled succesfully");
               resolve();
                 
            },2000);
        }else{
            console.log("Your enrollment is rejected");
            reject();
        }
      
    });
 
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
let sds={name:"kardfan",language:"medicdfdicnes"}
inroll(sds).then(display).catch(function(){
    console.log("fuck off");
});
 