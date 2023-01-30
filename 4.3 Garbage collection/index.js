function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;
  
    return {
      father: man,
      mother: woman
    }
  }
  
  let family = marry({
    name: "John"
  }, {
    name: "Ann"
  });

delete family.father;           
delete family.mother.husband;   //So, John is now unreachable and
                                // will be removed from the memory
                                // with all its data that also became unaccessible.
