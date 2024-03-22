

const myArr = [1,2,3];
const num = myArr.reduce((acc,curVal)=>{
    console.log(`acc :  ${acc} and curVal : ${curVal}`);
    return acc+curVal;
},0);

console.log(num);