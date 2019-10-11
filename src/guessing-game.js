class GuessingGame {
    constructor() {
        this.max = 0;
        this.min = 0;
    }

    setRange(min, max) {
        this.left = min;
        this.right = max;
        this.max = max;
        this.min = min;        
    }

    guess() {
      this.min = this.left;
      this.max = this.right;
      this.middle = Math.round((this.left + this.right)/2);
      return this.middle;
    }

    lower() {
      this.right = this.middle;
      this.left = this.min;
    }

    greater() {
      this.left = this.middle;
      this.right = this.max;
    }
}

module.exports = GuessingGame;
