/* The prime factors of 13195 are 5, 7, 13, 29.
What is the largest prime factor of the number 600851475143?
*/

var randomNumber = 600851475143;
var largestPrime = 1;

for (var index = 1; index <= randomNumber; index++) {
  if (randomNumber % index === 0) {
    largestPrime = index;
    randomNumber /= index;
  }
}

console.log(largestPrime);
