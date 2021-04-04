console.log("I am Itretor Ok");


let arr=["chicku","jambun",2];
console.log(arr);

function itt(arry){

    let index=0;
    return{
        next:()=>{
            if(index<arry.length){
                return{
                    value:arry[index++],
                    done:false
                }
            }
            else{
                return{
                    done:true
                }
            }
        }
    }
}

let a=itt(arr);
console.log(a.next());console.log(a.next());