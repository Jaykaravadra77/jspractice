console.log("Hello My self Events");

// let btn=document.querySelector(".btn");
//  btn.addEventListener('click',func1);
//  function func1(e){
//    console.log("You Have clicked ok");
//    e.preventDefault();

//  }

//  btn.addEventListener('dblclick',func2);
//  function func2(e){
//      console.log('Yoy clickd double time',e);
//  }



//  btn.addEventListener('mousedown',func3);
//  function func3(e){
//      console.log('Yoy overmouse  ',e);
//  }
 

// let li=document.querySelector('#l1');
// li.addEventListener('mouseenter',function(e){
//  console.log(e.target.getAttribute('class'))

// });
 


let li=document.querySelector('.cointainer');
li.addEventListener('mouseenter',function(e){
let x=e.offsetX;
document.body.style.backgroundColor=`rgb(${x},155,155)`;

});