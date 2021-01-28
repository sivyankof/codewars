// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements.
// I'll appreciate for your help.
// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {
  let sum = 0;
  let sum1 = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  for (let i = 0; i < arr2.length; ++i) {
    sum1 += arr2[i];
  } return sum + sum1;
}
//---------------  вариант с кодеварса
function arrayPlusArray(arr1, arr2) {
   return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
 }
//--------------
Test.describe("Basic tests", function () {
  Test.assertEquals(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
  Test.assertEquals(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
  Test.assertEquals(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
  Test.assertEquals(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);
});
