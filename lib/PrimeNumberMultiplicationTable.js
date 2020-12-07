class PrimeNumberMultiplicationTable {
  constructor(amount) {
    this.amount = amount;
  }
  
  primeNumbers() {
    if (this.amount < 1) {
      return "Error, Not a valid input";
    }

    let primeArray = [2, 3, 5, 7]

    for(let i = 8; primeArray.length < this.amount; i ++) {
      if(i % 2 != 0 && i % 3 != 0 && 
         i % 5 != 0 && i % 7 != 0) {
        primeArray.push(i);
     }
    }

    return primeArray.slice(0, this.amount);
  }

  updateAmount(updatedAmount) {
    if (updatedAmount < 1) {
      return "Error, Not a valid input";
    }

    return this.amount = updatedAmount;
  }
}

module.exports = PrimeNumberMultiplicationTable;
