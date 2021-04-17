//CHECK IF A NUMBER IS A PRIME NUMBER

function isPrime(num) {
    if (num === 2) return true; // 2 is prime
    if (num <= 1) return false; // 1 or less is not prime
    if (num % 2 === 0) return false; //even numbers except 2

    for (let i = 2; i < num; i++) {
        if (num % i === 0) { //if remainder is zero, num is divisible by another number other than itself
            return false;
        }
    }
    return true;
}

console.log(isPrime(3));
console.log(isPrime(5));
console.log(isPrime(7));
console.log(isPrime(11));

console.log(isPrime(4));
console.log(isPrime(6));
console.log(isPrime(8));
console.log(isPrime(9));
console.log(isPrime(-3));
