// TO DO: verify

function elementsByTag(node, tname) {
    var c = node.childNodes;
    var a = [];
    c.forEach(function(e) {
        if (e.tagName == tname) {
            a.push(e);
        }
    });
    return a;
}