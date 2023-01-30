function User1(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new User1("Jack");

console.log(user.name); // Jack
console.log(user.isAdmin); // false

function User2(name) {
    if (!new.target) { // if you run me without new
        return new User2(name); // ...I will add new for you
    }
    this.name = name;
}
let john = User2("John"); // redirects call to new User
alert(john.name);

function BigUser() {
    this.name = "John";
    return { name: "Godzilla" };  // <-- returns this object
}

console.log(new BigUser().name);  // Godzilla, got that object

function User3(name) {
    this.name = name;
    this.sayHi = function () {
        alert("My name is: " + this.name);
    };
}
john = new User3("John");
john.sayHi();