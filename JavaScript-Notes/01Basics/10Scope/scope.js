var a = 10; //global
let b = 12;     //local
const c = 13;  //local

if (true) {
  let b = 9;    //local
  const c = 14; //local
  console.log(a);
  console.log(b);
  console.log(c);
}
console.log(a);
console.log(b);
console.log(c);



//************************************************  scoping in function   *************************************************************** 


function one(){
    let a = 10;
    function two(){
        let b = 20;
        console.log(a);
    }
    two()
    // console.log(b);  not in scope
}
one()





/************************************** function Expression **************************************** */

three()
function three(){
    console.log("hello");
}

// newFun()         can not accessable
const newFun = function (){
    console.log("world");
}













