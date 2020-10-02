class NGram {
    constructor(history) {
        this.history = history;
        this.predictions = [];
    }

    addPrediction(prediction) {
        this.predictions.push(prediction);
    }

    getRandomPrediction() {
        const index = Math.floor(Math.random() * this.predictions.length);
        return this.predictions[index];
    }

    matchesHistory(history) {
        if (this.history.length !== history.length) {
            return false;
        }
        for (let i = 0; i < this.history.length; i++) {
            if (this.history[i] !== history[i]) {
                return false;
            }
        }
        return true;
    }
}
