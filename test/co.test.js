const { Product, CarInsurance } = require('../src/co');

test('should foo', () => {
  const car = new CarInsurance([ new Product('foo', 0, 0) ])
  const products = car.updatePrice()
  expect(products[0].name).toBe('foo')
})