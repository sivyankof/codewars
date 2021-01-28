var isAnagram = function (test, original) {
    let a = test.toLowerCase().split("").sort().join();
    let b = original.toLowerCase().split("").sort().join();
    console.log(a == b);
};

isAnagram("foefet", "toffee"); // true,
isAnagram("Buckethead", "DeathCubeK"); // true,
isAnagram("Twoo", "WooT"); //true,

isAnagram("dumble", "bumble"); //false,
isAnagram("ound", "round"); //false,
isAnagram("apple", "pale"); //false
