// type conversing

a="555";
console.log(b=Number(a),typeof b);

a1=55555;
console.log(b=String(a1),typeof b);

a2=true;
console.log(b=Number(a2),typeof b);

a3=true;
console.log(b=String(a2),typeof b);

a4=450.555;
console.log(b=parseInt(a4),typeof b);

a5=450.555;
console.log(b=parseFloat(a4),typeof b);

a6=450.555899
console.log(b=Number(parseFloat(a4).toFixed(2)),typeof b)


// corecion
 a8=8;
 a9=Number("9")
 console.log(a10=a8+a9)