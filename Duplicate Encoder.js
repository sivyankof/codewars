function duplicateEncode(word) {
    let word1 = word.toLowerCase().split('');
    let arr = [];

    let arrWord = word1.filter((el, i, arr) => {
        if (arr.includes(el, i + 1)) {
            return el;
        }
    });

    word1.forEach((el) => {
        if (arrWord.includes(el)) {
            arr.push(')');
        } else {
            arr.push('(');
        }
    });

    arr = arr.join('');
}

duplicateEncode('din'); //,"(((");
duplicateEncode('recede'); //,"()()()");
duplicateEncode('Success'); //,")())())","should ignore case");
duplicateEncode('(( @'); //,"))((");
