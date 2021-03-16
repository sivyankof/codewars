function calc(x) {


    // 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667

    // total1 = 656667
    //               ^
    // total2 = 656661
    //               ^

    // (6 + 5 + 6 + 6 + 6 + 7)
    // - (6 + 5 + 6 + 6 + 6 + 1)
    // -------------------------
    //                        6


}

calc('ABC'); //, 6);
calc('abcdef'); //, 6);
calc('ifkhchlhfd'); // 6);
calc('aaaaaddddr'); //, 30);
calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'); // 96);
