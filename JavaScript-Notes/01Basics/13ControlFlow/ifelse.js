

// < , > , <= , >= , == , !== , === , !=
// truthy value and false value 

if(true){
    console.log("hello true");
}else if(true && true){
    console.log("hello AND true");
}else if(true || true){
    console.log("hello OR true");
}else{
    console.log("hello false");
}

// nullish coalescing operator (??): null undefined

let value2;
value2 = 5 ?? null;
value2 = 5 ?? undefined;


// ternory operator
true?console.log("hello"):console.log("false");
