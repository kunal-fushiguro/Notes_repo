

class user{
    constructor(userName,email,password){
        this.userName = userName;
        this.email =  email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
}

const user1 = new user("kunal","abz@gmail.com","kunal2004")
console.log(user1);
console.log(user1.encryptPassword());