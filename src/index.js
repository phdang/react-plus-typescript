function log(str) {
    console.log(str);
}
var A = /** @class */ (function () {
    function A() {
        this.greeting = 'Hello World!';
    }
    return A;
}());
log(new A().greeting);
