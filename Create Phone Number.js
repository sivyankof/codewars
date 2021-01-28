createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // => returns "(123) 456-7890"

// решение

function createPhoneNumber(arg) {
    arg.splice(0, 0, `(`);
    arg.splice(4, 0, `) `);
    arg.splice(8, 0, `-`);
    let array = arg.reduce((a, b) => {
        (b + b).toString();
        return a + b;
    }, []);
    return array;
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

//  альтернативный ответ из кодварс

console.log(
    `(` +
        arg.slice(0, 3).join(``) +
        `)` +
        ` ` +
        arg.slice(3, 6).join(``) +
        `-` +
        arg.slice(6, 10).join(``)
);
