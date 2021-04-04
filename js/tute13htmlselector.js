console.log("Element selector")

// let a=document.getElementById('child1')
// a.style.color="blue"
// a.style.background="pink"
// a.innerText="Helpful"
// a.innerHTML="<b>Helpfuck</b>"
// console.log(a.childNodes[0])


// let b=document.querySelector('#child1')
// b=document.querySelector('div')
// b.style.color="Red"
// console.log(b)

let c=document.getElementsByClassName('cointainer')
c=c[0].getElementsByTagName('div')
   
Array.from(c).forEach(function(elemet){

    console.log(elemet)
    elemet.getElementsByClassName.color="Blue"
})
 