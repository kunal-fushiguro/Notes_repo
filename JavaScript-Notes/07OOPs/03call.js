

function setUser(name){
    // complex db calls
    this.name = name;
    return name
}

function createUser(name,email){
    // setUser(name);
    setUser.call(this,name);
    this.email = email;
}

const User1 = new createUser("kunal","abz@gmail.com");
console.log(User1);