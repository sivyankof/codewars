function squareDigits(num) {
    let number = num.toString().split(``);
    let sum = ``;
    for (n of number) {
        sum += Math.pow(n, 2).toString();
    }
    return sum;
}

squareDigits(9119); //811181);
