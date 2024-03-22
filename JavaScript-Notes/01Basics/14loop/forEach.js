
const arr = [1,2,3,44,5,55,66,77];

arr.forEach((value,index,wholeArr)=>{
    console.log(`${index} : ${value}`);
})

const objarray = [
    {
        id:1,
        name:"kunal",
    },
    {
        id:2,
        name:"sharma",
    }
]

objarray.forEach((obj)=>{
    console.log(obj.name);
})