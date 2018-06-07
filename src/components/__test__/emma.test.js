const fns = require('./functions')

describe('product qty function', () => {
  test('quantityDown should should return 3 when passed 4', () => {
    let result = fns.quantityDown(4)
    expect(result).toEqual(3)
  })
  test('quantityDown should return 1 when passed 1',() => {
    let result = fns.quantityDown(1)
    expect(result).toEqual(1)
  })
  test('quantityDown should return NaN when passed a string',() => {
    let result = fns.quantityDown('hi')
    expect(result).toEqual(NaN)
  })
  test('quantityDown should return a number when passed a number',() => {
    let result = fns.quantityDown(12)
    expect(typeof result).toEqual('number')
  })
  test('quantityDown should return 1 when passed in -1',() => {
    let result = fns.quantityDown(-1)
    expect(result).toEqual(1)
  })
})
