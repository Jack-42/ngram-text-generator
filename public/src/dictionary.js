class Dictionary {
    constructor() {
        this.tokenIDs = {};
        this.count = 0;
    }

    addToken(token) {
        if (token in this.tokenIDs) {
            return;
        }
        this.tokenIDs[token] = this.count;
        this.count++;
    }

    getIDOfToken(token) {
        if (token in this.tokenIDs) {
            return this.tokenIDs[token];
        }
        return -1;
    }
}
