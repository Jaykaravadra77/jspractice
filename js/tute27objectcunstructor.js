console.log("Object oriented Javascrip starts now");



//contructor function Name's First Letter is always write Capital.iis good practice.

function Trac(land,cname,hp){
    this.land=land;
    this.cname=cname;
    this.hp=hp;
    this.analayz=function(){
        if(this.land<20 && this.hp>20){
            console.log(`${cname} is not suitable for your condition ok`);
        }
        else{
            console.log(`${cname} is   suitable for your condition ok`);
        }

    }
}
let mahindra=new Trac(10,"mahindra",25);
console.log(mahindra.analayz())
console.log(mahindra.cname)