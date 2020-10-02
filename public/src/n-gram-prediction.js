class NGramPrediction {
    constructor(token) {
        this.token = token;
        this.frequency = 1;
    }

    matchesToken(token) {
        return this.token === token;
    }

    incrementFrequency() {
        this.frequency++;
    }
}
