let user = {}; // user has no address
console(user?.address?.street); // undefined (no error)

user = null;
let x = 0;
user?.sayHi(x++); // no "user", so the execution doesn't reach sayHi call and x++
console.log(x); // 0, value not incremented

let userAdmin = {
    admin() {
        console.log("I am admin");
    }
};

let userGuest = {};
userAdmin.admin?.();    // I am admin
userGuest.admin?.();    // nothing happens