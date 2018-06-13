const fns = require('../utilities/dan-functions');

test('validateClickHome should always be false', () => {
    let result = fns.validateClickHome();
    expect(result).toBe(false);
});

test('Returns the category Leashes with 14 products in Array', () => {
    return fns.fetchCategoryLeashes()
    .then(res => {
        expect(res.length).toBe(14)})
})

test('Returns the category Harnesses with 12 products in Array', () => {
    return fns.fetchCategoryHarnesses()
    .then(res => {
        expect(res.length).toBe(12)})
})

test('Returns the category Boots with 7 products in Array', () => {
    return fns.fetchCategoryBoots()
    .then(res => {
        expect(res.length).toBe(7)})
})

test('Returns the category packs with 9 products in Array', () => {
    return fns.fetchCategoryPacks()
    .then(res => {
        expect(res.length).toBe(9)})
})