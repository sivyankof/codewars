function century(y) {
    if (y >= 1 && y <= 100) {
        return 1;
    } else if (!Number.isInteger(y / 100)) {
        return Math.floor(y / 100 + 1);
    } else if (Number.isInteger(y / 100)) {
        return y / 100;
    }
}

century(1705); // 18;  'Testing for year 1705'
century(1900); // 19;  'Testing for year 1900'
century(1601); // 17;  'Testing for year 1601'
century(2000); // 20;  'Testing for year 2000'
century(89); //1;   'Testing for year 89'
century(892); //9
century(800); //9



// или решение на варсе 

const centurys = year => Math.ceil(year/100);



