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
index = index || 0;
if (index == n) {
  return list;
} else {
  var newIndex = index+1;
  nth(list.rest, n, newIndex);
}
}
