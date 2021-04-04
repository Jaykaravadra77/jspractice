console.log("Helllo How Are you i am genrator ");


function* gen(){
    while(true)
    {
        yield Math.random()*10000;
    }
   
   

}
let genrator=gen();
console.log(genrator.next().value);
console.log(genrator.next().value);
console.log(genrator.next().value);
console.log(genrator.next().value);