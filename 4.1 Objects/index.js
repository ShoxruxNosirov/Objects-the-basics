let user1 = new Object(); // "object constructor" syntax
let user2 = {}; 

let user3 = {     // an object
  name: "John",  // by key "name" store value "John"
  age: 30        // by key "age" store value 30
};

console.log( user3.name ); // John
console.log( user3.age ); // 30)

let user4 = {
  name: "John",
  age: 30,
  "likes birds": true  // multiword property name must be quoted
};
user4["likes birds"] = false;
console.log(user4["likes birds"]); // false
delete user4["likes birds"]; //delete 

let key = "likes birds";
// same as user["likes birds"] = true;
user[key] = true;
key = "name";
console.log( user.key ) // undefined

let fruit = prompt("Which fruit to buy?", "apple");
let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};
console.log( bag.apple );

fruit = 'apple';
let bag2 = {
  [fruit + 'Computers']: 5 // bag.appleComputers = 5
};

function makeUser(name, age) {
    return {
      name: name,
      age,
      // ...other properties
    };
  }
  let user5 = makeUser("John", 30);
  alert(user5.name); // John

  let obj = {
    for: 1,
    let: 2,
    return: 3
  };
  console.log( obj.for + obj.let + obj.return ); // 6

let user6 = { name: "John", age: 30 };
alert( "age" in user6 ); // true, user.age exists
alert( "blabla" in user6 ); // false, user.blabla doesn't exist