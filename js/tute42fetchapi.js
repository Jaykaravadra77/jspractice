// console.log("Feth Api Ok bro jay");

// let fbtn=document.getElementById('fbtn');
// fbtn.addEventListener('click',function(){
//     file="jay.txt";
//     fetch(file)
//     .then(x => x.text())
//     .then(y => console.log(y));

// });



console.log("Feth Api Ok bro jay");

let fbtn=document.getElementById('fbtn');
fbtn.addEventListener('click',postData);
function postData(){
    url = "https://reqres.in/api/users";
    data = '{"name": "Jay", "Karavadra": "leader"}';
    fetch(url, {
        method:'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    }).then(response=> response.json())
    .then(data => console.log(data)) 
}
 