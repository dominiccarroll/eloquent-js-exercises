function arrayToList(array) {
  var list = {value: array[0], rest: undefined};
  var lastObj = list;
  for (i=1; i<array.length; i++) {
    var newObj = {
      value: i,
      rest: undefined
    }
    lastObj.rest = newObj;
    lastObj = newObj;
  }

return list;
}

function prepend(element, inputList) {
  return {value: element, rest: inputList};
}

// THIS FUNCTION ISNT DONE YET. PLEASE IGNORE IT.
function nth(list, n, index) {
  var i = index || 0;
  var newList = list.rest;
  if (n == i) {
    return newList;
  } else {
    writeln("Skip! Index: " + i);
    nth(newList, n, i+1);
  }
}
