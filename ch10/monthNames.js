// Month Names

var monthModule = (function() {
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August","September", "October", "November", "December"];
    var exports = Object.create(null);

    exports.name = function(number) {
        return monthNames[number];
    };

    exports.number = function(name) {
        return monthNames.indexOf(name);
    };

    return exports;
})();