class GuessingGame {
    constructor() { }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.aspt = Math.round((this.max + this.min) / 2);
        return this.aspt;
    }

    lower() {
        this.max = this.aspt;
    }

    greater() {
        this.min = this.aspt;
    }
}

module.exports = GuessingGame;
