function F(n) {
    if (n === 0 || n === 1)
        return n;
    return F(n - 1) + F(n - 2);
}
function fibSeq(n) {
    var fibArr = [];
    for (var i = 0; i <= n; i++) {
        fibArr.push(F(i));
    }
    return fibArr;
}
function isPrime(n, m) {
    if (n % m === 0 && n === m)
        return true;
    else if (m > n || n % m === 0 && m < n)
        return false;
    m++;
    return isPrime(n, m);
}
function fibPrims(N) {
    var arr;
    arr = fibSeq(N);
    return arr.filter(function (el) { return isPrime(el, 2); });
}
var N = 18;
console.log(document.getElementById('basics').innerHTML);
document.write("Numero primos en los primeros " + N + " numeros de Fibonacci = " + fibPrims(N));
