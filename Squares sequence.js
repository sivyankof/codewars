let arr = [];
// let a = 0;
function squares(x, n) {
    if (n <= 0) {
        return [];
    }

    let a = 1;
    for (let i = 0; i < n; i++) {
        // console.log(arr);
        if (arr.length != 0) {
            a *= arr[i - 1];
            arr.push(a);
        } else {
            a *= x;
            arr.push(a);
        }
        // console.log(arr);
    }
    console.log(arr);
    return arr;
}

// squares(2, 5); //,[2,4,16,256,65536]);
// squares(3, 3); //,[3,9,81]);
// squares(5, 3); //[5,25,625]);
// squares(10, 4); //[10,100,10000,100000000]);

// squares(2, 0); //,[]);
// squares(2, -5); //,[]);
