

const arr = [1,2,3,4,5];

for(let i of arr){
    console.log(i);
}

const name = "kunal"
for (const c of name) {
    console.log(c);
}

// unique data only
const uniMap = new Map()
uniMap.set("Ind","INDIA")
uniMap.set("FR","France")
for (const [key,value] of uniMap) {
    console.log(`${key} : ${value}`);
}
