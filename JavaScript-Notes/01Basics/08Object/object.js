

const sym = Symbol('key1');

const obj = {
    name:"kunal",
    "word":"hello",
    [sym]:"symbol",
    fullname:{
        first:{
            name:"kunal"
        },
        last:{
            name:"sharma"
        }
    }
};

console.log(obj.name);
console.log(obj["word"]);
console.log(obj[sym]);

// Object.freeze(obj) // make values unchangable

obj.greeting = function(){
    console.log(`hello ${this.name}`);
}
console.log(obj.greeting);  //return function reference
console.log(obj.greeting());   // call function 



// nesting object
console.log(obj.fullname.first.name);


//merge two object
const obj1 = {
    a:"1"
}
const obj2={
    b:"2"
}
const obj3 = Object.assign({},obj1,obj2);
console.log(obj3);

const obj4 = {...obj1,...obj2};

console.log(Object.keys(obj3));
console.log(Object.values(obj3));
console.log(Object.entries(obj3));  //conovert into array

console.log(obj3.hasOwnProperty('a'));

const arr = [
    {a:1},{b:2}
]

console.log(arr[0].a);

// destructing

const obj5 = {
    name:"kunal"
}
const {name:n} = obj5;
console.log(n);