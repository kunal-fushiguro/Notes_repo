const myObj = {
    js:"javascript",
    py:"python"
}

for (const key in myObj) {
    console.log(myObj[key]);
    console.log(key);
}

const arr = [1,2,3,45,5];

for(let key in arr){
    console.log(key);
    console.log(arr[key]);
}