const fns = require('../utilities/stevenUnitTestFunctions')

describe("handleQuantity tests", () => {
    test("handleQuantity should return 1 if passed a string of anything but a number", () => {
        let result = fns.handleQuantity("Two")

        expect(result).toBe(1)
    });
    test("handleQuantity should return 3 if passed a string of '3'", () => {
        let result = fns.handleQuantity("3")

        expect(result).toBe(3)
    })
    test("handleQuantity should return 2 if passed a number 2", () => {
        let result = fns.handleQuantity(2)

        expect(result).toBe(2)
    })
    test("handleQuantity should always return a number", () => {
        let result1 = fns.handleQuantity("Two")
        let result2 = fns.handleQuantity("3")
        let result3 = fns.handleQuantity(2)
        

        expect(typeof result1).toBe('number')
        expect(typeof result2).toBe('number')
        expect(typeof result3).toBe('number')                
    })
    test("handleQuantity should return 1 if passed a number 0 or string '0'", () => {
        let result1 = fns.handleQuantity(0)
        let result2 = fns.handleQuantity('0')
        

        expect(result1).toBe(1)
        expect(result2).toBe(1)        
    })
    test("handleQuantity should return 1 if passed a negative number or srting", () => {
        let result1 = fns.handleQuantity(-3)
        let result2 = fns.handleQuantity('-3')
        

        expect(result1).toBe(1)
        expect(result2).toBe(1)        
    })
})