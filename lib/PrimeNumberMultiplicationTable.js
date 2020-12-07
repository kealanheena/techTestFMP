class PrimeNumberMultiplicationTable {
  constructor(amount) {
    this.amount = amount;
    this.multiplicationTableArray = [];
  }
  
  generatePrimeNumbers() {
    if (this.amount < 1) {
      throw new Error('Error, Not a valid input');
    }

    const primeNumberArray = [2, 3, 5, 7].slice(0, this.amount)

    for(let i = 8; primeNumberArray.length < this.amount; i ++) {
      const isDivisibleByTwo = i % 2 === 0;
      const isDivisibleByThree = i % 3 === 0;
      const isDivisibleByFive = i % 5 === 0;
      const isDivisibleBySeven = i % 7 === 0;
      const isPrimeUsingEratosthenesAlgorithm = !(isDivisibleByTwo || isDivisibleByThree || isDivisibleByFive || isDivisibleBySeven);

      if(isPrimeUsingEratosthenesAlgorithm) {
        primeNumberArray.push(i);
     }
    }

    return this.primeNumberArray = primeNumberArray;
  }

  updateAmount(updatedAmount) {
    if (updatedAmount < 1) {
      throw new Error('Error, Not a valid input');
    }

    return this.amount = updatedAmount;
  }

  multiply() {
    for(var i = 0; i < this.primeNumberArray.length; i++) {
      let multiplications = [];
      for(var j = 0; j < this.primeNumberArray.length; j++) {
        const rowsNumber = this.primeNumberArray[i];
        const columnNumber = this.primeNumberArray[j];

        multiplications.push(rowsNumber*columnNumber);
      }
      this.multiplicationTableArray.push(multiplications);
    }

    return this.multiplicationTableArray;
  }

  display(generatePrimeNumbers = this.generatePrimeNumbers(), multiply = this.multiply()) {
    generatePrimeNumbers();
    multiply();
    
    let multiplicationTableOutput = ` | ${this.primeNumberArray.join(' | ')}`;

    for(let i = 0; i < this.primeNumberArray.length; i++) {
      const primeNumber = this.primeNumberArray[i];
      const multiplicationTableRow = this.multiplicationTableArray[i].join(' | ');
      
      multiplicationTableOutput += `\n ${primeNumber} | ${multiplicationTableRow}`;
    }

    console.log(multiplicationTableOutput);
    return multiplicationTableOutput;
  }
}

module.exports = PrimeNumberMultiplicationTable;
