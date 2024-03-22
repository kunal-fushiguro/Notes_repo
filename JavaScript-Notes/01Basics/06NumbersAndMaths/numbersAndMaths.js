// --------------------------- Number --------------------------------------

const num = new Number(10000);
console.log(num.toString().length);
console.log(num.toFixed(2));
console.log(num.toLocaleString('en-IN'));

const value = new Number(123.44);
console.log(value.toPrecision(3));


// --------------------------- Maths --------------------------------------

console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));
console.log(Math.min(4,3,1));
console.log(Math.max(4,3,1));

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

