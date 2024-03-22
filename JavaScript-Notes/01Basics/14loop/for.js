
for(let i = 0; i <= 5;i++){
    console.log(i);
}
console.log("new line");
for(let i = 0; i <= 5;i++){
    if(i == 3){
        console.log(i);
        break;
    }else{
        console.log(i);        
    }
}
console.log("new line");
for(let i = 0; i <= 5;i++){
    if(i == 4){
        console.log(i);
        continue;
    }else{
        console.log(i);        
    }
}