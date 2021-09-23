//1
let sum = 0;
for (var x = 0; x < 1000; x++){
    if (x % 3 === 0 || x % 5 === 0){
       sum += x;
    }
}
console.log(sum);


//2
function sumFibonacci(){
    return fibSeries().reduce(function(total, item) {
        return total += item;
    }, 0);
}
function fibSeries() {
    let a = 1;
    let b = 2;
    let next = a + b;
    let fibonacciArray = [2];
    while(next < 4000000){
        if(next % 2 === 0){
            fibonacciArray.push(next);
        }
        a = b;
        b = next;
        next = a + b;
    }
    return fibonacciArray;
}
console.log(sumFibonacci(4000000));

//3
var palindromes = [];

function reverseString(str) {
    for (var i = str.length - 1, o = ''; i >= 0; o += str[i--]) { }
    return o;
}

for(i=999; i>99; i--) {
    for(j=999; j>99; j--) {
        possiblePalindrome = i * j;
        possiblePalindromeStr = possiblePalindrome.toString();
        if (possiblePalindromeStr == reverseString(possiblePalindromeStr)) {
            palindromes.push(possiblePalindrome)
        }
    }
}

largestPalindrome = Math.max.apply(Math, palindromes);
console.log(largestPalindrome);


//4
function prime(index) {
    var i, primes = [2, 3], n = 5;

    function isPrime(n) {
        var i = 1, p = primes[i],
            limit = Math.ceil(Math.sqrt(n));
        while (p <= limit) {
            if (n % p === 0) {
                return false;
            }
            i += 1;
            p = primes[i];
        }
        return true;
    }

    for (i = 2; i <= index; i += 1) {
        while (!isPrime(n)) {
            n += 2;
        }
        primes.push(n);
        n += 2;
    }
    return primes[index - 1];
}

console.log(prime(1e4 + 1));