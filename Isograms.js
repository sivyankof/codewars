function isIsogram(str) {
    let newStr = str
        .split('')
        .reduce((ac, el) => {
            el = el.toLowerCase();
            if (ac.indexOf(el) < 0) {
                ac.push(el);
            }
            return ac;
        }, [])
        .join('');
    console.log(newStr.length == str.length);
    // return newStr.length == str.length;
}

isIsogram('Dermatoglyphics'); //, true);
isIsogram('isogram'); //, true);
isIsogram('aba'); //, false, 'same chars may not be adjacent');
isIsogram('moOse'); //, false, 'same chars may not be same case',);
isIsogram('isIsogram'); //, false);
isIsogram(''); //, true, 'an empty string is a valid isogram');
