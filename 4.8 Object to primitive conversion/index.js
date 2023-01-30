let user1 = {
    name: "John",
    money: 1000,

    [Symbol.toPrimitive](hint) {
        console.log(`hint: ${hint}`);
        return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
};

console.log(user1); // hint: string -> {name: "John"}
console.log(+user1); // hint: number -> 1000
console.log(user1 + 500);

let user2 = {
    name: "John",
    money: 1000,
  
    // for hint="string"
    toString() {
      return `{name: "${this.name}"}`;
    },
  
    // for hint="number" or "default"
    valueOf() {
      return this.money;
    }
  
  };
  
  console.log(user2); // toString -> {name: "John"}
  console.log(+user2); // valueOf -> 1000
  console.log(user2 + 500); // valueOf -> 1500

  let user3 = {
    name: "John",
  
    toString() {
      return this.name;
    }
  };
  
  console.log(user3); // toString -> John
  console.log(user3 + 500); // toString -> John500

