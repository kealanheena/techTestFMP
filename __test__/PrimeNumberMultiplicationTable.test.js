const PrimeNumberMultiplicationTable = require('../lib/PrimeNumberMultiplicationTable');

describe('#PrimeNumberMultiplicationTable', () => {

  let testMultiplicationTable, numberOfPrimeNumbers, numberOfPrimeNumbersUpdated;

  beforeEach(() => {
    numberOfPrimeNumbers = 2;
    testMultiplicationTable = new PrimeNumberMultiplicationTable(2);
  });

  describe('#generatePrimeNumbers', () => {
    test('prime numbers function should return a list of prime numbers', () => {  
      expect(testMultiplicationTable.generatePrimeNumbers).toBeInstanceOf(Function);
    });
  
    test('prime numbers function should return a list of prime numbers', () => {
      expect(testMultiplicationTable.generatePrimeNumbers()).toBeInstanceOf(Array);
    });
  
    describe('prime numbers function should return', () => {
  
      test('the first 2 prime numbers when 2 is passed', () => {      
        expect(testMultiplicationTable.generatePrimeNumbers()).toEqual([2, 3]);
      });
  
      test('the first 3 prime numbers when 3 is passed', () => {
        numberOfPrimeNumbers = 3;
        testMultiplicationTable.updateAmount(numberOfPrimeNumbers);
      
        expect(testMultiplicationTable.generatePrimeNumbers()).toEqual([2, 3, 5]);
      });
  
      test('the first 10 prime numbers when 10 is passed', () => {
        numberOfPrimeNumbers = 10;
        testMultiplicationTable.updateAmount(numberOfPrimeNumbers);
      
        expect(testMultiplicationTable.generatePrimeNumbers()).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
      });

      test('the first 16 prime numbers when 16 is passed', () => {
        numberOfPrimeNumbers = 16;
        testMultiplicationTable.updateAmount(numberOfPrimeNumbers);
      
        expect(testMultiplicationTable.generatePrimeNumbers()).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53]);
      });

    });
    
    describe('the length of the list of prime numbers should be equal to',() => {
  
      test('2 when 2 is passed as a variable', () => {
        numberOfPrimeNumbers = 2;
        testMultiplicationTable.updateAmount(numberOfPrimeNumbers);
      
        expect(testMultiplicationTable.generatePrimeNumbers().length).toEqual(numberOfPrimeNumbers);
      });
  
      test('4 when 4 is passed as a variable', () => {
        let numberOfPrimeNumbers = 4;
        testMultiplicationTable.updateAmount(numberOfPrimeNumbers);
      
        expect(testMultiplicationTable.generatePrimeNumbers().length).toEqual(numberOfPrimeNumbers);
      });
  
      test('7 when 7 is passed as a variable', () => {
        let numberOfPrimeNumbers = 7;
        testMultiplicationTable.updateAmount(numberOfPrimeNumbers);
      
        expect(testMultiplicationTable.generatePrimeNumbers().length).toEqual(numberOfPrimeNumbers);
      });
  
      test('EDGE CASE: it should throw an error "Error, Not a valid input" when 0 or less is passed as a variable', () => {
        let numberOfPrimeNumbers = 0;
        testMultiplicationTable = new PrimeNumberMultiplicationTable(numberOfPrimeNumbers);
      
        expect(() => {
          testMultiplicationTable.generatePrimeNumbers()
        }).toThrowError('Error, Not a valid input');
      });
    });
  });

  describe('updateAmount', () => {
    test('when you update the amount it should return the new amount and change the amount', () => {
      numberOfPrimeNumbersUpdated = 3;

      expect(testMultiplicationTable.updateAmount(numberOfPrimeNumbersUpdated)).toEqual(numberOfPrimeNumbersUpdated);
      expect(testMultiplicationTable.amount).toEqual(numberOfPrimeNumbersUpdated);
    });

    test('when you update the amount it should throw an error  "Error, Not a valid input" when 0 or less is passed as a variable', () => {
      numberOfPrimeNumbersUpdated = 0;
      
      expect(() => {
        testMultiplicationTable.updateAmount(numberOfPrimeNumbersUpdated)
      }).toThrowError('Error, Not a valid input');
      expect(testMultiplicationTable.amount).toEqual(numberOfPrimeNumbers);
    });
  });
  
  describe('multiply', () => {
    test('it should return an array with arrays with the multiplications of the prime numbers', () => {
      testMultiplicationTable.primeNumberArray = [2, 3]

      expect(testMultiplicationTable.multiply()).toEqual([[4, 6], [6, 9]]);
    });

    test('it should return 3 arrays with arrays with the multiplications of the prime numbers when 3 is passed', () => {
      let numberOfPrimeNumbers = 3;
      testMultiplicationTable = new PrimeNumberMultiplicationTable(numberOfPrimeNumbers);
      testMultiplicationTable.primeNumberArray = [2, 3, 5];

      expect(testMultiplicationTable.multiply()).toEqual([[4, 6, 10], [6, 9, 15], [10, 15, 25]]);
    });

  });

  describe('display', () => {
    const mockGeneratePrimeNumbers = jest.fn();
    const mockMultiply = jest.fn();

    test('the display function should call "mockGeneratePrimeNumbers" and "mockMultiply"', () => {
      testMultiplicationTable.primeNumberArray = [2];
      testMultiplicationTable.multiplicationTableArray = [[4]];
      testMultiplicationTable.display(mockGeneratePrimeNumbers, mockMultiply)
      
      expect(mockGeneratePrimeNumbers.mock.calls.length).toEqual(1);
      expect(mockMultiply.mock.calls.length).toEqual(1);
    });

    test('the display function should return a string with \\n between each row for line breaks', () => {
      testMultiplicationTable.primeNumberArray = [2, 3];
      testMultiplicationTable.multiplicationTableArray = [[4, 6], [6, 9]];

      expect(testMultiplicationTable.display(mockGeneratePrimeNumbers, mockMultiply)).toEqual(" | 2 | 3\n 2 | 4 | 6\n 3 | 6 | 9")
    });
  });
});
