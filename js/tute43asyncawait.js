// console.log("Async Await in JavaScript");

async function myDisplay() {
    console.log("Before Fetch");
    let fth= await fetch('https://api.mocki.io/v1/b043df5a');
    console.log("Before Response");
    let rj=await fth.json();
    console.log("After resolve promeise");
     return rj;

     
  }

  console.log("before Calling Function");
 let b= myDisplay(); 
  console.log("After Calling Function");
  console.log(b);
  b.then(data=>console.log(data));
  console.log("Fetced successfully");

// console.log("This is tutorial 43");

// async function harry(){
//     console.log('Inside harry function');
//     const response = await fetch('https://api.github.com/users');
//     console.log('before response');
//     const users = await response.json();
//     console.log('users resolved')
//     return users;

//     // return "harry";
// }

// console.log("Before calling harry")
// let a = harry();
// console.log("After calling harry")
// console.log(a);
// a.then(data => console.log(data))
// console.log("Last line of this js file")