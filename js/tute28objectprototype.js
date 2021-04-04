console.log("Object Prototype");

function obj(name){
  this.name=name;
}
obj.prototype.name=function(){
 return this.name;
}
obj.prototype.setname=function(name){
  this.name=name;
}
 let obj1=new obj("Karansharma");
 console.log(obj1);


 let obj2=new obj("karankundra");
 console.log(obj2);
 console.log(obj2.setname("jay kumar"));
 console.log(obj2);
