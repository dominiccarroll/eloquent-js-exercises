<<<<<<< HEAD
function countBs(str) {
  var bNum = 0;
    for (i = 0; i < str.length - 1; i++) {
      if (str.charAt(i) == "B") {
        bNum++;
      }
    }
    return bNum;
}
// Rewritten to use the second argument
function countChar(str, char) {
  var bNum = 0;
    for (i = 0; i < str.length - 1; i++) {
      if (str.charAt(i) == char) {
        bNum++;
      }
    }
    return bNum;
}
=======
function countBs(str) {
  var bNum = 0;
    for (i = 0; i < str.length - 1; i++) {
      if (str.charAt(i) == "B") {
        bNum++;
      }
    }
    return bNum;
}
// Rewritten to use the second argument
function countChar(str, char) {
  var bNum = 0;
    for (i = 0; i < str.length - 1; i++) {
      if (str.charAt(i) == char) {
        bNum++;
      }
    }
    return bNum;
}
>>>>>>> 80d69aac9fb19777432588109489f06cd45ed768
