console.log("I Am sets");


const sets=new Set();

sets.add("Jay");
sets.add("Mahes");
sets.add(1);
sets.add(true);


console.log(sets);
// console.log(sets.size);

sets.delete(1);
console.log(sets.has(true));
console.log(sets);