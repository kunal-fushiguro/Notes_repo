

const arr1 = [0,1,2,3];
console.log(arr1[2]);
console.log(arr1.length);

const arr2 = new Array(1,2,3,4)
arr1.push(6)
console.log(arr1.pop());
arr1.unshift(9);
arr1.shift();
console.log(arr1);
console.log(arr2.includes(3));
console.log(arr2.indexOf(3));
const newArr = arr1.join()  // convert into string
console.log(newArr);

const newArr1 = arr1.slice(0,3); //don't change original array 
console.log(newArr1);

const  newArr2 = arr2.splice(0,2); //change the original array
console.log(arr2);
console.log(newArr2);


const newArr3 = [1,2,3];
const newArr4 = [1,2,3];

newArr3.concat(newArr4)
newArr4.push(newArr3)
console.log(newArr3);
console.log(newArr4);

const anotherArr = [...newArr3, ...newArr4];
console.log("a ",anotherArr);


const arr4 = [1,2,3,[1,2,3],[[1,2,3.],[234,[1,2,3]]]];
const newArr5 = arr4.flat(Infinity);
console.log(newArr5);

console.log(Array.isArray("kunal"));
console.log(Array.from("kunal"));
console.log(Array.from({name:"kunal"}));


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));








