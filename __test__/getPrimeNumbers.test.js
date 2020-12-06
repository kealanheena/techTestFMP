// person.test.js
const PrimeNumberMultiplicationTable = require('../lib/getPrimeNumbers');

test('Person constructs with a first and last name', () => {
  let testMultiplicationTable = new PrimeNumberMultiplicationTable(2)

  expect(testMultiplicationTable.primeNumbers()).toEqual(2);
});
