// Array to combine an array of arrays

var array = [[1,3,3,7],[9,9,9],["Steve","Jimbo","Martin","Thomas","Paul","Phil"]];

// The main part of this exercise
var reducer = function(newValue, currentValue) {
  return currentValue.concat(newValue);
}

var flattenedArray = array.reduce(reducer);
console.log(flattenedArray); // Log the results
