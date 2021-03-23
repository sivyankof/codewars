function divCon(x) {
    let arrNumber = x.reduce((acc, cur) => {
        if (typeof cur == 'number') {
            acc = acc + cur;
            return acc;
        } else {
            return acc;
        }
    }, 0);
    console.log(arrNumber, 'arrNumber');

    let arrStr = x.reduce((acc, cur) => {
        if (typeof cur !== 'number') {
            acc = acc + (+cur);
            return acc;
        } else {
            return acc;
        }
    }, 0);
    console.log(arrStr, 'arrStr');

    console.log(arrNumber - arrStr);
}

// divCon([9, 3, '7', '3']); //, 2);
divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]); //, 14);
// divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']); //, 13);
