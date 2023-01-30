let user = {
    name: "John",
    age: 30,
    sayHi() {
      // "this" is the "current object"
      console.log(this.name);
    }
  };
  user.sayHi();

user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  alert( this.name );
}

user.f = sayHi;
admin.f = sayHi;
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

admin['f']();