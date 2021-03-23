function checkConcatenatedSum(num, n) {
    let arrStr = String(num)
        .split('')
        .map((el, i, arr) => {
            if (arr[0] == '-') {
                if (el == '-') {
                    return 0;
                } else {
                    return Number('-' + el.repeat(n));
                }
            } else {
                return Number(el.repeat(n));
            }
        })
        .reduce((acc, cur) => {
            return acc + cur;
        });

    // console.log(arrStr, 'arrStr');
    return num == arrStr;
}

// checkConcatenatedSum(2997, 3); //,true)
checkConcatenatedSum(-2997, 3); //,true)
