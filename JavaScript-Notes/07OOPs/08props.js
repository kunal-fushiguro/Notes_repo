class User{
    constructor(name){
        this.name = name;
    }
    logMe(){
        console.log("UserName : ",this.name);
    }
    static createId(){
    
        return "123";
    }
}

const kunal = new User("kunal");
kunal.logMe();
// console.log(kunal.createId());

