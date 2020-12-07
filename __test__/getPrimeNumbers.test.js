// person.test.js
const PrimeNumberMultiplicationTable = require('../lib/getPrimeNumbers');

test('prime numbers function should return a list of prime numbers', () => {
  let testMultiplicationTable = new PrimeNumberMultiplicationTable(2)

  expect(testMultiplicationTable.primeNumbers()).toEqual([2, 3]);
});

