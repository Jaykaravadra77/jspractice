// console.log("I am editable div okay bro");
document.getElementById('dv').innerText=localStorage.getItem('dvtext');
let dive = document.querySelector("#dv");
dive.addEventListener('click', function (e) {

    let text = document.createElement('input');
    text.setAttribute('type', 'text');
    // console.log(e.target.innerText);
    text.value = e.target.innerText;
    text.id="txt";
    let d = document.getElementById('dv');
    d.replaceWith(text);
    // console.log("Click event workibng")

    text.addEventListener('blur',function(e){
     localStorage.setItem('dvtext',e.target.value);
     d.innerHTML=localStorage['dvtext'];
     text.replaceWith(d)
     
    });

});


 
 

