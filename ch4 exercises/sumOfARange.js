function range(start, end, step) { // returns numbers between 2 args in array form
  var array = [];
  var step = step || 1;
  for (i=start; (i<end+1 && end>start) || (i>end-1 && end<start); i=i+step) {
    array.push(i);
  }
  return array;
}

function sum(array) { // takes array of numbers and adds them
  var value = 0;
  for (i=0; i<array.length; i++) {
    value = value + array[i];
  }
  return value;
}
