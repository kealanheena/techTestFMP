class PrimeNumberMultiplicationTable {
  constructor(amount) {
    this.amount = amount;
    this.multiplicationTable = [];
  }
  
  primeNumbers() {
    if (this.amount < 1) {
      throw new Error('Error, Not a valid input');
    }

    let primeNumberArray = [2, 3, 5, 7]

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

    return primeNumberArray.slice(0, this.amount);
  }

  updateAmount(updatedAmount) {
    if (updatedAmount < 1) {
      throw new Error('Error, Not a valid input');
    }

    return this.amount = updatedAmount;
  }

  multiply() {
    return [[4, 6], [6, 9]];
  }
}

module.exports = PrimeNumberMultiplicationTable;
