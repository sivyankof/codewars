var FilterString = function (value) {
    let a = +value
        .split('')
        .filter((el) => {
            if (el <= 9 && el >= 0) {
                return el;
            } else {
                return 0;
            }
        })
        .join('');

    console.log(a, 'arr');
};
// FilterString('1203'); //, 123, 'Just return the numbers');
FilterString('a1b2c30'); //, 123, 'Just return the numbers');
// FilterString('aa01bb2cc3dd'); //, 123, 'Just return the numbers');
