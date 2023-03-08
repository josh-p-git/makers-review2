class BandFilter {
    constructor(input) {
        this.input = input;
        this.alteredFreq = [];
    }

    process() {
        this.input.forEach(i => this.alteredFreq.push(i))
        return this.alteredFreq;

    }
};

module.exports = BandFilter;