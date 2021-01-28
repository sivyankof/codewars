function isPalindrome(line) {
    String(line);
    let reversed = line.split("").reverse().join("");
    return line === reversed;
}

isPalindrome(`12321`);
isPalindrome(123456);
