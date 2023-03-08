const BandFilter = require ('./bandPassFilter.js')

describe('Filter can be initialised', () => {
    const freq = new BandFilter([]); //dont assume you will get an emprt array

    test('Filter can be initialised with an empty array', () => {
        expect(freq.input).toEqual([]);
    });
});

describe('Filter can return a frequency', () => {
    const freq = new BandFilter([60]);

    test('Filter can return a frequency', () => {
        const freq = new BandFilter([60]);
        expect(freq.process()).toEqual([60]);
    });

    test('Filter can return two frequencies', () => {
        const freq = new BandFilter([60, 100]);
        expect(freq.process()).toEqual([60, 100]);
    });

    test('Filter can iterate over frequency and return it', () => {
        const freq = new BandFilter([60]);
        expect(freq.process()).toEqual([60]);
    });

    test('Filter can iterate over an array of frequencies and return them', () => {
        const freq = new BandFilter([60, 100]);
        expect(freq.process()).toEqual([60, 100]);
    });
});
