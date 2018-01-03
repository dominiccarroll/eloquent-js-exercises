<<<<<<< HEAD
function isEven(number) {
  var absNumber = Math.abs(number);
  if (absNumber == 0) {
    return true;
  } else if (absNumber == 1) {
    return false;
  } else {
    return isEven(absNumber - 2);
  }
}
=======
function isEven(number) {
  var absNumber = Math.abs(number);
  if (absNumber == 0) {
    return true;
  } else if (absNumber == 1) {
    return false;
  } else {
    return isEven(absNumber - 2);
  }
}
>>>>>>> 80d69aac9fb19777432588109489f06cd45ed768
