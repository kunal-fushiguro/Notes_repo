
class User{
    constructor(name){
        this.name = name;
    }
    printName(){
        console.log(this.name);
    }
}

class User2 extends User{
    constructor(name){
        super(name);
        console.log(this.name);
    }
}

const user = new User("kunal");
const user2 = new User2("kunal");
console.log(user);
console.log(user);
console.log(user.printName());

