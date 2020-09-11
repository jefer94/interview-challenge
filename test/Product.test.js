const Product = require("../src/Product")

test('Product object', () => {
  expect(new Product('Foo', 6, 6)).toEqual({
    name: 'Foo',
    sellIn: 6,
    price: 6
  })
})