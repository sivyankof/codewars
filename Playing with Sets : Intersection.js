function inter(s1, s2) {
    s1 = [...new Set(s1)];
    s2 = [...new Set(s2)];
    return new Set(s1.filter((v) => s2.includes(v)));
}

let A = new Set([1, 2, 3, 4]),
    B = new Set([2, 3, 1]),
    C = new Set([2]),
    AB = inter(A, B);

// inter(A, A); //A, 'A inter A == A');
