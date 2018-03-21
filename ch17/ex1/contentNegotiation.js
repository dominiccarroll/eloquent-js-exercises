function exercise(accept) {
var req = new XMLHttpRequest();

req.open("GET", "http://www.eloquentjavascript.net/author", true);
req.setRequestHeader("Accept", accept);
req.addEventListener("load", function() {
    if (req.status < 400) {
        console.log("request succesful");
        console.log("Response: " + req.responseText + "\nType: " + req.responseType);
    } else {
        console.log("Error: " + req.statusText);
    }
});

req.send(null);

}