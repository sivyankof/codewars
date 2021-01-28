function checkExam(array1, array2) {
    let count = 0;
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] == array2[i]) {
            count = count + 4;
        } else if (array1[i] == "") {
            count = count - 1;
        } else {
            count = count - 0;
        }
    }
    if (count < 0) {
        count = 0;
    }
    return count;
}

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]));

// checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]),
// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]),
// checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]);

