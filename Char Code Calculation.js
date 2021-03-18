const getCharCodes = (str) =>
    [...str].map((char) => char.charCodeAt()).join('');
const sumCharCodes = (charCodes) =>
    [...charCodes].reduce((total, charCode) => total + parseInt(charCode), 0);

const calc = (x) => {
    const total1 = getCharCodes(x);
    const total2 = total1.replace(/7/g, '1');
    return sumCharCodes(total1) - sumCharCodes(total2);
};

// calc('ABC'); //, 6);
// calc('abcdef'); //, 6);
// calc('ifkhchlhfd'); // 6);
calc('aaaaaddddr'); //, 30);
calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'); // 96);
