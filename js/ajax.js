console.log("I am Ajax ok");


let fbtn = document.getElementById("fbtn");
fbtn.addEventListener('click', fbtnhandler);

function fbtnhandler() {
    //define xhr object
    const xhr = new XMLHttpRequest();

    //open the xhr object
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
    //For sending Data To server we need to use ResponseHeader
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    xhr.getResponseHeader('Content-type', 'application/json');
    // on progress function

    xhr.onprogress = function () {

        console.log("loading Please wait");

    }




    //OLD WAY TO TRACK HTTD REQUEST WHEN ONLOAD AND ONPROGRESS NOT AVAILABLE OK

    // xhr.onreadystatechange=function(){

    //     if(this.readyState == 3){
    //         console.log("loading Please wait");

    //     }

    //     if(this.readyState == 4 && this.status===200){
    //         console.log(this.responseText);

    //     }
    // }




    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText);
        } else {
            console.log("Some Eroor is There");
        }


    }
    params = `{"name":"test34sad54dsdssdfdsfadsa5","salary":"123","age":"23"}`;
    xhr.send(params);
}

let pbtn = document.getElementById("pbtn");
pbtn.addEventListener('click', pbtnhandler);

function pbtnhandler() {
    //define xhr object
    const xhr = new XMLHttpRequest();

    //open the xhr object

    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
    //For sending Data To server we need to use ResponseHeader


    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
    xhr.getResponseHeader('Content-type', 'application/json');
    // on progress function

    xhr.onprogress = function () {

        console.log("loading Please wait");

    }




    //OLD WAY TO TRACK HTTD REQUEST WHEN ONLOAD AND ONPROGRESS NOT AVAILABLE OK

    // xhr.onreadystatechange=function(){

    //     if(this.readyState == 3){
    //         console.log("loading Please wait");

    //     }

    //     if(this.readyState == 4 && this.status===200){
    //         console.log(this.responseText);

    //     }
    // }




    xhr.onload = function () {
        if (this.status === 200) {
            let obj=JSON.parse(this.responseText);
            let dvs=document.getElementById('dshow');
            let str="";
            for(key in obj){
                
            str+=obj[key].title;
            }
            dvs.innerText=str;
        } else {
            console.log("Some Eroor is There");
        }


    }
    
    xhr.send();
}