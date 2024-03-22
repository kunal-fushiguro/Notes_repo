

const arr = [1,2,3,4,5,6,7,8,9]

const newArr = arr.map((value) => value+10);
console.log(newArr);

const multiMap = arr.map((value) => value+10).map((value) => value+10);

console.log(multiMap);