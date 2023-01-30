let user = { name: 'John' };
let admin = user;
admin.name = 'Pete'; // changed by the "admin" reference
console.log(user.name);

let a = {};
let b = a; // copy the reference
console.log( a === b ); // true

a = {};
b = {}; // two independent objects

console.log( a == b ); // false

user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };
Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }
console.log(user.name); // John
console.log(user.canView); // true
console.log(user.canEdit); // true

 user = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };
  
  let clone = structuredClone(user);
  
  alert( user.sizes === clone.sizes ); // false, different objects
  
  // user and clone are totally unrelated now
  user.sizes.width = 60;    // change a property from one place
  alert(clone.sizes.width); // 50, not related

  let user = {};
user.me = user;

clone = structuredClone(user);
alert(clone.me === clone); // true