// Compose function
const compose = (...fns) => x => fns.reduce((y, f) => f(y), x); 

// Functions
const addFee = amount => amount + 2;
const addDiscount = amount => amount - 5;

// function composition
const composition = compose(addFee, addDiscount)(100);
console.log(composition); 