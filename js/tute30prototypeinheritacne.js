// console.log("Prototype Inheritance");

// let proto = {

//     slogan:function (){
//        return "Hamara Neta Kaisa ho.Jo paise na khata aisa ho";
//     },
//     setname:function(name){
//         this.name=name;
//     }
// };

// let obj1=Object.create(proto);
// obj1.name="Jay";
// obj1.value="heavy";
// console.log(obj1.setname("Hamir"));
// console.log(obj1);
// console.log(obj1.slogan());



function employ(name,salary){

    this.name=name;
    this.salary=salary;
}

employ.prototype.slogan=function(){
    return "Hum Apke Hai Kon?";
}

function prg(name,salary,language){
    employ.call(this,name,salary);
    this.language=language;
}
prg.prototype=Object.create(employ.prototype);

prg.prototype.cunstructor=prg;
let prg1=new prg("Jay",30000,"Javascript");
console.log(prg1 );
console.log(prg1.slogan());