var fizzify = (fizzbuzz = function(n) {
    return Array.apply(null, new Array(n)).map(function(e, i) {
      return (++i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz") || i;
    });
  });


describe('Fizzbuzz', function() {
    it('Should fizzify 10 numbers correctly', function() {
      var expected = [1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz'];
      Test.assertEquals(JSON.stringify(fizzbuzz(10)), JSON.stringify(expected) , 'Fails with 10 numbers!');
    });
  });