class User {
    constructor(email, password) {
        this.email = email;
        this.Password = password; // Using the setter to set the password
    }

    get Password() {
        return this._password;
    }

    set Password(value) {
        this._password = value;
    }
}

const kunal = new User("abz@gmail.com", "kunal2004");
console.log(kunal.Password); // Output: kunal2004

// Changing the password using the setter
kunal.Password = "newPass";
console.log(kunal.Password); // Output: newPass
