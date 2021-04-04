
const age=14;
const drunk=true;
if(age==18 && drunk == false){
    console.log("You are able to drive")
}else if(age>18 && drunk==false)
{
    console.log("You are also able to drive")
}
else
{
    console.log("You are not able to drive ")

}

console.log(age>=18?'you are able to drive':'you are not able to drive');