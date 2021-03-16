function highAndLow(numbers) {
    let newArr = numbers.split(' ').sort((a, b) => a - b);

    console.log(Math.max(...newArr), Math.min(...newArr));
    // return newArr[newArr.length - 1] + ' ' + newArr[0];
}
highAndLow('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6'); //  "542 -214"
