let = filter_list = (l) => {
    shorts = l.filter((namber) => typeof namber == `number`);
    return shorts;
};

console.log(filter_list([1, 2, "a", "b"]));
console.log(filter_list([1, "a", "b", 0, 15]));
console.log(filter_list([1, 2, "aasf", "1", "123", 123]));

// нужно отфильтровать числа из массива
