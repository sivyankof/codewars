function factorial(n) {
    if (n === 1) {
        return 1;
      }
      
      return n * factorial(n - 1);
}

factorial(0); //1, "factorial for 0 is 1")
factorial(1); //1, "factorial for 1 is 1")
factorial(2); //2, "factorial for 2 is 2")
factorial(3); //6, "factorial for 3 is 6")
