function positiveSum(arr) {
    let ar = [];
    arr.forEach((el) => {
        if (el < 0) {
            return;
        } else {
            ar.push(el);
        }
    });

    let a = ar.reduce((sum, current) => sum + current, 0);
    return a;
}

positiveSum([1, 2, 3, 4, 5]); //,15);
positiveSum([1, -2, 3, 4, 5]); //,13);
positiveSum([]); //,0);
positiveSum([-1, -2, -3, -4, -5]); //,0);
positiveSum([-1, 2, 3, 4, -5]); //,9);
