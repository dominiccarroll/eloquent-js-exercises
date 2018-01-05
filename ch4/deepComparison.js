function deepEqual(a,b) {

  function propertyQuantity(o) {
    var quant = 0;
    for (var i in o) {
      quant++
    }
    return quant;
  }

  if (a==b || a===b) {
    return true;
  } else {
    if (typeof a == "object" && typeof b == "object" && a != null && b != null) { // typeof null == object
      var relations = 0;
      var quantA = propertyQuantity(a);
      var quantB = propertyQuantity(b);

      for (var aVal in a) {
        for (var bVal in b) {
          if (a[aVal] == b[bVal] && aVal == bVal) { // check if properties/keys are the same
            relations++; // if the 2 keys are equal to each other add 1 to the relations variable
          }
        }
      }

      if (relations == quantA && relations == quantB) { // if the relations value is equivalent to the number of keys in the objects, return true
        return true;
      } else {
        return false;
      }

    } else {
      return false;
    }
  }

}
