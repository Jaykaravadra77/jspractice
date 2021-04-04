//create elements
console.log("Tute 16 Create An element");
let ele=document.createElement('li');
 ele.id="nli";
 ele.className="nli";
 ele.setAttribute('title','Testingpurpose');
//  ele.innerHTML="<b>code with jay";
 let tnode=document.createTextNode('i am textnode');
 ele.appendChild(tnode);

 let ul=document.querySelector('#ul');
 
//and replaced element

let elem2=document.createElement('h3');
elem2.id="elem2";
elem2.className="elem";
let tnd=document.createTextNode("Hello element 2");
elem2.appendChild(tnd)
ele.replaceWith(elem2)
 
ul.replaceChild(elem2,document.getElementById('l2'))
//attributes functions

console.log(elem2.getAttribute('id'))
console.log(elem2.setAttribute('id','nul'))
console.log(elem2.hasAttribute('naem'))
 
 