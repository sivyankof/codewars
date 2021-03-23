function nthFibo(n) {
    let a = -1;
    let b = 1;
    for (let i = 1; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

nthFibo(1); //, 0,"1-st Fibo"
nthFibo(2); //, 1,"2-nd Fibo"
nthFibo(3); //, 1,"3-rd Fibo"
nthFibo(4); //, 2,"4-th Fibo"
