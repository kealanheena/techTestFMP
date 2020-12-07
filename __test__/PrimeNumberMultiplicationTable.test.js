const PrimeNumberMultiplicationTable = require('../lib/PrimeNumberMultiplicationTable');

describe('#PrimeNumberMultiplicationTable', () => {

  let testMultiplicationTable, numberOfPrimeNumbers, numberOfPrimeNumbersUpdated;

  beforeEach(() => {
    numberOfPrimeNumbers = 1;
    testMultiplicationTable = new PrimeNumberMultiplicationTable(1);
  });

  describe('#primeNumbers', () => {
    test('prime numbers function should return a list of prime numbers', () => {  
      expect(testMultiplicationTable.primeNumbers).toBeInstanceOf(Function);
    });
  
    test('prime numbers function should return a list of prime numbers', () => {
      expect(testMultiplicationTable.primeNumbers()).toBeInstanceOf(Array);
    });
  
    describe('prime numbers function should return', () => {
  
      test('the first 2 prime numbers when 2 is passed', () => {
        numberOfPrimeNumbers = 2;
        testMultiplicationTable.updateAmount(numberOfPrimeNumbers);
      
        expect(testMultiplicationTable.primeNumbers()).toEqual([2, 3]);
      });
  
      test('the first 3 prime numbers when 3 is passed', () => {
        numberOfPrimeNumbers = 3;
        testMultiplicationTable.updateAmount(numberOfPrimeNumbers);
      
        expect(testMultiplicationTable.primeNumbers()).toEqual([2, 3, 5]);
      });
  
      test('the first 10 prime numbers when 10 is passed', () => {
        numberOfPrimeNumbers = 10;
        testMultiplicationTable.updateAmount(numberOfPrimeNumbers);
      
        expect(testMultiplicationTable.primeNumbers()).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
      });

      test('the first 16 prime numbers when 16 is passed', () => {
        numberOfPrimeNumbers = 16;
        testMultiplicationTable.updateAmount(numberOfPrimeNumbers);
      
        expect(testMultiplicationTable.primeNumbers()).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53]);
      });

    });
    
    describe('the length of the list of prime numbers should be equal to',() => {
  
      test('2 when 2 is passed as a variable', () => {
        numberOfPrimeNumbers = 2;
        testMultiplicationTable.updateAmount(numberOfPrimeNumbers);
      
        expect(testMultiplicationTable.primeNumbers().length).toEqual(numberOfPrimeNumbers);
      });
  
      test('4 when 4 is passed as a variable', () => {
        let numberOfPrimeNumbers = 4;
        testMultiplicationTable.updateAmount(numberOfPrimeNumbers);
      
        expect(testMultiplicationTable.primeNumbers().length).toEqual(numberOfPrimeNumbers);
      });
  
      test('7 when 7 is passed as a variable', () => {
        let numberOfPrimeNumbers = 7;
        testMultiplicationTable.updateAmount(numberOfPrimeNumbers);
      
        expect(testMultiplicationTable.primeNumbers().length).toEqual(numberOfPrimeNumbers);
      });
  
      test('EDGE CASE: it should return "Error, Not a valid input" when 0 or less is passed as a variable', () => {
        let numberOfPrimeNumbers = 0;
        testMultiplicationTable = new PrimeNumberMultiplicationTable(numberOfPrimeNumbers);
      
        expect(testMultiplicationTable.primeNumbers()).toEqual("Error, Not a valid input");
      });
    });
  });

  describe('updateAmount', () => {
    test('when you update the amount it should return the new amount and change the amount', () => {
      numberOfPrimeNumbersUpdated = 3;

      expect(testMultiplicationTable.updateAmount(numberOfPrimeNumbersUpdated)).toEqual(numberOfPrimeNumbersUpdated);
      expect(testMultiplicationTable.amount).toEqual(numberOfPrimeNumbersUpdated);
    });

    test('when you update the amount it should "Error, Not a valid input" when 0 or less is passed as a variable', () => {
      numberOfPrimeNumbersUpdated = 0;
      
      expect(testMultiplicationTable.updateAmount(numberOfPrimeNumbersUpdated)).toEqual("Error, Not a valid input");
      expect(testMultiplicationTable.amount).toEqual(numberOfPrimeNumbers);
    });
  });
  
});
