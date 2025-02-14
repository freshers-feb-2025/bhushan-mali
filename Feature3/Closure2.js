function x() {
    var a =9; 

    function y() {

      
        console.log(a); // This function captures 'a' from the lexical scope
    }

    a = 100; // Updating 'a' before returning 'y'
    
    return y; // Returning the function 'y'
}

// Storing the returned function in 'z'
var z = x();

console.log(z); // Output: [Function: y]
z(); // Output: 100
