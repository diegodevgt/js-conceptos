// consider the following function to process bank transaction
const transaction = (fee, balance, amount) => (
    balance + amount - fee
);
  
  // Simple curry implementation
  const curry = (fn, ...args) => (
    (..._arg) => (
      fn(...args, ..._arg)
    )
  );
  
  const freeTransaction = curry(transaction, 0);
  console.log(freeTransaction(90, 10));
  
  