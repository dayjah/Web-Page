function whenAvailable(name, callback) {
var interval = 10; // ms
window.setTimeout(function() {
if (name) {
callback();
} else {
window.setTimeout(arguments.callee, interval);
}
}, interval);
}