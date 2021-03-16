const vowel = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];

function disemvowel(str) {
    let newStr = [];

    str.split('').map((e) => {
        if (!vowel.includes(e, 0)) {
            newStr.push(e);
        }
    });
    return newStr.join('');
}

disemvowel('This website is for losers LOL!');
// "Ths wbst s fr lsrs LL!"
