const developer = { 
    name: 'diegodevgt', 
    [Symbol('email')]: 'diegodevgt@dev.gt',
    [Symbol('ig')]: 'diegodevgt'
  };
  
console.log(Reflect.get(developer, 'name')); // 
console.log(Reflect.has(developer, 'email')); // 
console.log(Reflect.has(developer, 'phone')); // 
console.log(Reflect.getPrototypeOf(developer)); //
console.log(Reflect.getOwnPropertyDescriptor(developer, 'name')); //