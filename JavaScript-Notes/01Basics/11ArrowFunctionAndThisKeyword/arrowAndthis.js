

/* ************************************** This Keyword ************************************************* */

const user = {
    name:"kunal",
    printFun1: function(){
        // console.log(name); name is not defined 
    },
    printFun2:function(){
        console.log(this.name);
    }
}
user.printFun1()
user.printFun2()
user.name = "sam";
user.printFun1()
user.printFun2()

console.log(this); //in node it's refer to empty object in broswer it refer to window object

// this not work like this (see below example)

function chai(){
    let username = "kunal";
    console.log(this);
    console.log(this.username); //undefined
}
chai();


// *********************************************  Arrow Function    ********************************************************

const a = () =>{
    console.log("one");
}
const b = (num1,num2) => num1+num2;
const c = () => ({name:"kunal"});

a();
console.log(b(1,2));
console.log(c());


