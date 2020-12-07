const PrimeNumberMultiplicationTable = require('../lib/getPrimeNumbers');

describe('#PrimeNumberMultiplicationTable', () => {

  describe('#primeNumbers', () => {
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
  
      test('the first 3 prime numbers when 3 is passed', () => {
        let testMultiplicationTable = new PrimeNumberMultiplicationTable(3);
      
        expect(testMultiplicationTable.primeNumbers()).toEqual([2, 3, 5]);
      });
  
      test('the first 10 prime numbers when 10 is passed', () => {
        let testMultiplicationTable = new PrimeNumberMultiplicationTable(10);
      
        expect(testMultiplicationTable.primeNumbers()).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
      });

      test('the first 16 prime numbers when 16 is passed', () => {
        let testMultiplicationTable = new PrimeNumberMultiplicationTable(16);
      
        expect(testMultiplicationTable.primeNumbers()).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53]);
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

  describe('updateAmount', () => {
    test('when you update the amount it should return the new amount and change the amount', () => {
      let numberOfPrimeNumbers = 0;
      let updatedNumberOfPrimeNumbers = 0;
      let testMultiplicationTable = new PrimeNumberMultiplicationTable(numberOfPrimeNumbers)
    
      expect(testMultiplicationTable.updateAmount(updatedNumberOfPrimeNumbers)).toEqual(updatedNumberOfPrimeNumbers);
      expect(testMultiplicationTable.amount).toEqual(updatedNumberOfPrimeNumbers);
    });
  });
  
});
