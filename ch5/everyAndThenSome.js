function every(array, checkerFunction) {
  var result = true;
  array.forEach(function(element) {
    if (checkerFunction(element) == false) {
      result = false;
    }
  });
  return result;
}

function some(array, checkerFunction) {
  var result = false;
  array.forEach(function(e) {
      if (checkerFunction(e)) {
        result = true;
      }
  });
  return result;
}
