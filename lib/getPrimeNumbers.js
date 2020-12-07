class PrimeNumberMultiplicationTable {
  constructor(number) {
    this.number = number;
  }
  
  primeNumbers() {
    if (this.number < 1) {
      return "Error, Not a valid input";
    }

    let primeNumber = 2;
    let primeArray = []

    for(let i = 0; i < this.number; i ++) {
      primeArray.push(primeNumber);
      primeNumber ++;
    }

    return primeArray;
  }
}

module.exports = PrimeNumberMultiplicationTable;
