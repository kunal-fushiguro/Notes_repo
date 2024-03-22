

function addNum(a=0,b=0){
    console.log(a+b);
    return a+b;
}
addNum(1,2)
const addValue = addNum(4,5);
console.log(addValue);


function retrunValue(...value){  //rest operator
    return value
}
console.log(retrunValue(200,300,400)); //return array now


const obj ={
    a:'1'
}
const arr = [1,2,3];
function printObj(obj,arr){
    console.log(`value : ${obj.a}`);
    console.log(`value : ${arr[1]}`);
}
printObj(obj,arr);













