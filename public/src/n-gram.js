class NGram {
    constructor(history) {
        this.history = history;
        this.predictions = [];
    }

    addPrediction(token) {
        // find corresponding prediction for given token
        const predictionIndex = this.findPredictionByToken(token);
        if (predictionIndex !== -1) {
            // prediction exists, so increase frequency
            const prediction = this.predictions[predictionIndex];
            prediction.incrementFrequency();
        } else {
            // prediction does not exist, so create new one
            const prediction = new NGramPrediction(token);
            this.predictions.push(prediction);
        }
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

    findPredictionByToken(token) {
        for (let i = 0; i < this.predictions.length; i++) {
            if (this.predictions[i].matchesToken(token)) {
                return i;
            }
        }
        return -1;
    }
}
