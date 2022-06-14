function counter() {
    let count = 0;
  
    function increment() {
      return count += 1;
    };
  
    return increment;
  }
  
  const generateId = counter();
  
  generateId(); // 1
  generateId(); // 2
  generateId(); // 3