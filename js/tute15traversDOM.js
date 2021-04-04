console.log("HELLO DOM TRAVERS");


// let a=document.querySelector(".cointainer");
// console.log(a.childNodes[0].nodeName);
// console.log(a.children[2].nodeName);
// console.log(a.children[2].nodeType);

let b=document.querySelector('.cointainer')
// console.log(b.children[0].children[2])
//console.log(b.firstChild.nextSibling.nextSibling.nextSibling)
// console.log(b.firstChild)
// console.log(b.firstElementChild)

console.log(b.lastChild)
console.log(b.lastElementChild)

console.log(b.firstElementChild.parentElement)
console.log(b.firstElementChild.nextElementSibling)