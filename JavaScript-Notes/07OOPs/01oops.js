
// constructor
function user(first,last){
    this.name = `${first} ${last}` ;
    return this;
}

// const userOne = user('kunal','sharma');
// const userTwo = user('hi','hi');
const userOne = new user('kunal','sharma');
const userTwo = new  user('hi','hi');

console.log(userOne);
console.log(userOne.constructor);

// new keyboard create empty object 
// call constructor function
// this will add 

// this tell the current execution context