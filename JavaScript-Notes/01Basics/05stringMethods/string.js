
const data = 4;
const str = `the value of data is ${data}`;
console.log(str);

const newStr = new String("kunal ");

console.log(newStr[0]);
console.log(newStr.__proto__);

console.log(newStr.length);
console.log(newStr.toUpperCase());
console.log(newStr.charAt(2));
console.log(newStr.indexOf('k'));

const newStr2 = newStr.substring(0,4);
console.log(newStr2);
const newStr3 = newStr.slice(0,4);
console.log(newStr3);


const newStr4 = "       kunal    ";
console.log(newStr4);
console.log(newStr4.trim());

const url = "https://google.com/kunal%20sharma";

console.log(url.replace('%20','-'));
console.log(url.includes("kunal"));

console.log(url.split('/'));

