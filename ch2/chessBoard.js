var size = 8;

var str = "";
for (y = 0; y < size; y++) {
for (x = 0; x < size; x++) {

if ((y + x) % 2 == 0) {
str = str + "#";
} else {
str = str + " ";
}

}
console.log(str);
str = "";
console.log("\n");
}