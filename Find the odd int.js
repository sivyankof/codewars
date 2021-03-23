function findOdd(a) {
    let obj = {};
    a.forEach((el) => {
        if (obj[el] !== el) {
            obj[el] = el;
        } else {
            obj[el] = el - el;
        }
    });

    for (let value of Object.values(obj)) {
        if (value !== 0) {
            console.log(value);
        }
    }
}

findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]); //, 5);
findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]); //, -1);
findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]); //, 5);
findOdd([10]); //, 10);
findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]); //, 10);
findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]); //, 1);
