/* If we list all the natural numbers below 10 that are multiples of 3 or 5,
we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 100.
*/

var totalSum = 0;
var upperLimit = 999;

for (var index = 0; index <= upperLimit; index++) {
  if (index % 3 === 0 || index % 5 === 0) {
    totalSum += index;
  }
}

console.log(totalSum);
