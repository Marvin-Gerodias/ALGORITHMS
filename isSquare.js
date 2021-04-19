// check if integer is a perfect square

var isSquare = function (n) {
    if (n < 0) return false;
    if (n == 0) return true;
    var root = Math.sqrt(n);
    if (n / Math.sqrt(n) == root) {
        return true;
    } else {
        return false;
    }
}

console.log(isSquare(-1));
console.log(isSquare(0));
console.log(isSquare(3));
console.log(isSquare(4));
console.log(isSquare(25));
console.log(isSquare(26));