// person.test.js
const PrimeNumberMultiplicationTable = require('../lib/getPrimeNumbers');

test('prime numbers function should return a list of prime numbers', () => {
  let testMultiplicationTable = new PrimeNumberMultiplicationTable(2)

  expect(testMultiplicationTable.primeNumbers()).toEqual([2, 3]);
});

test('the length of the list of prime numbers should be equal to the number passed', () => {
  let numberOfPrimeNumbers = 2;
  let testMultiplicationTable = new PrimeNumberMultiplicationTable(numberOfPrimeNumbers)

  expect(testMultiplicationTable.primeNumbers().length).toEqual(numberOfPrimeNumbers);
});