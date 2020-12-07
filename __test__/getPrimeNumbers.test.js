const PrimeNumberMultiplicationTable = require('../lib/getPrimeNumbers');

describe('#PrimeNumberMultiplicationTable', () => {
  
  test('prime numbers function should return a list of prime numbers', () => {
    let testMultiplicationTable = new PrimeNumberMultiplicationTable(2)
  
    expect(testMultiplicationTable.primeNumbers).toBeInstanceOf(Function);
  });

  test('prime numbers function should return a list of prime numbers', () => {
    let testMultiplicationTable = new PrimeNumberMultiplicationTable(1)
  
    expect(testMultiplicationTable.primeNumbers()).toBeInstanceOf(Array);
  });

  describe('prime numbers function should return', () => {

    test('the first 2 prime numbers when 2 is passed', () => {
      let testMultiplicationTable = new PrimeNumberMultiplicationTable(2);
    
      expect(testMultiplicationTable.primeNumbers()).toEqual([2, 3]);
    });

    test('the first 2 prime numbers when 2 is passed', () => {
      let testMultiplicationTable = new PrimeNumberMultiplicationTable(3);
    
      expect(testMultiplicationTable.primeNumbers()).toEqual([2, 3, 5]);
    });
  });
  
  describe('the length of the list of prime numbers should be equal to',() => {

    test('2 when 2 is passed as a variable', () => {
      let numberOfPrimeNumbers = 2;
      let testMultiplicationTable = new PrimeNumberMultiplicationTable(numberOfPrimeNumbers)
    
      expect(testMultiplicationTable.primeNumbers().length).toEqual(numberOfPrimeNumbers);
    });

    test('4 when 4 is passed as a variable', () => {
      let numberOfPrimeNumbers = 4;
      let testMultiplicationTable = new PrimeNumberMultiplicationTable(numberOfPrimeNumbers)
    
      expect(testMultiplicationTable.primeNumbers().length).toEqual(numberOfPrimeNumbers);
    });

    test('7 when 7 is passed as a variable', () => {
      let numberOfPrimeNumbers = 7;
      let testMultiplicationTable = new PrimeNumberMultiplicationTable(numberOfPrimeNumbers)
    
      expect(testMultiplicationTable.primeNumbers().length).toEqual(numberOfPrimeNumbers);
    });

    test('EDGE CASE: it should return "Error, Not a valid input" when 0 or less is passed as a variable', () => {
      let numberOfPrimeNumbers = 0;
      let testMultiplicationTable = new PrimeNumberMultiplicationTable(numberOfPrimeNumbers)
    
      expect(testMultiplicationTable.primeNumbers()).toEqual("Error, Not a valid input");
    });
  });
});
