class PrimeNumberMultiplicationTable {
  constructor(number) {
    this.number = number;
  }
  
  primeNumbers() {
    if (this.number < 1) {
      return "Error, Not a valid input";
    }

    let primeArray = [2, 3, 5, 7]

    for(let i = 8; primeArray.length < this.number; i ++) {
      if(i % 2 != 0 && i % 3 != 0 && i % 5 != 0) {
        primeArray.push(i);
     }
    }

    return primeArray.slice(0, this.number);
  }
}

module.exports = PrimeNumberMultiplicationTable;
