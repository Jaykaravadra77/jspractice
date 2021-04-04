console.log("Hello Man This is all abouts events");

 document.getElementById('ha').addEventListener('mouseover',function(e){

    // console.log("Congrasulation Man you clicked on the header");
    // console.log(e.target)
   let ans=e.target.className;
   ans=e.target.id
   ans=e.target.getAttribute('id')
   ans=e.offsetX;
   ans=e.offsetY;
   ans=e.clientX;
   ans=e.clientY;
   console.log(ans)

});
 