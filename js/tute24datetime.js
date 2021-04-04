console.log("Date time");
 
let today=new Date;
// console.log(today);

let otherdate=new Date("07-05-2021");
 otherdate=new Date(" july 12 2001  4:50:20");
// otherdate=otherdate.getDay();
console.log(otherdate);

let a;
a=otherdate.getDay();
a=otherdate.getDate();
a=otherdate.getMinutes();
a=otherdate.getFullYear();
otherdate.setFullYear("2288");
console.log(otherdate);
