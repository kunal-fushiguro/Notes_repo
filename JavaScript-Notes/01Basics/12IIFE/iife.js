// IIFE = Immediately Invoked Function Expressions
//  to use two iife use semicolon at the end because it don't know where to end
(function valeu() {
    // named iife
  console.log("hello from IIFE");
})();

((name) => {
  console.log("hellow from arrow Fun");
  console.log(name);
})("kunal");

// ************************        Uses of IIFE*****************************************************
// 1.To avoid global scope pollution
// 2. To create modules
// 3. To create private variables
// 4. To improve performance
