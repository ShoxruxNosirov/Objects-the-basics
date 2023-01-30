let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 == id2);

let id = Symbol("id");
console.log(id.toString());
console.log(id.description);

let user1 = {
    name: "John"
};
user1[id] = 1;
console.log(user1[id]); // 1

let user2 = {
    name: "John",
    age: 30,
    [id]: 123
};
for (let key in user2) console.log(key); 
console.log("Direct: " + user2[id]); // Direct: 123


let idd = Symbol.for("id"); 
let idAgain = Symbol.for("id");
console.log( idd === idAgain );       // true

let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

console.log( Symbol.keyFor(sym) ); // name
console.log( Symbol.keyFor(sym2) ); // id

let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

console.log( Symbol.keyFor(globalSymbol) ); // name, global symbol
console.log( Symbol.keyFor(localSymbol) ); // undefined, not global

console.log( localSymbol.description ); // name