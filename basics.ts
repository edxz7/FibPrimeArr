
function fibNumber (n:number) : number {
    if(n===0 || n ===1 ) return n;
    return fibNumber(n-1) + fibNumber(n-2);
}
function fibSeq(n:number): number[]{
    let fibArr: number[] = [];
    for(let i = 0; i<=n; i++){
        fibArr.push(fibNumber(i));
    }
    return fibArr;
}

function isPrime (n:number, m:number):boolean {
    if(n%m===0 && n === m ) return true;
    else if(m > n || n % m === 0 && m < n) return false;
    m++;
    return isPrime(n,m)
} 

function fibPrims (N:number): number[] {
    let arr: number[];
    arr = fibSeq(N);
    return arr.filter(el => isPrime(el,2))
}
let N = 18;
console.log(document.getElementById('basics').innerHTML);
document.write(`Numero primos en los primeros ${N} numeros de Fibonacci = ${fibPrims(N)}`);