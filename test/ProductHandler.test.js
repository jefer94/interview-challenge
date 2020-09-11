const ProductHandler = require("../src/ProductHandler")
const Product = require("../src/Product")

test('Product empty', () => {
  const car = new ProductHandler()

  expect(car.products).toEqual([])
})

test('Product handler reset price', () => {
  const car = new ProductHandler([new Product('Foo', 2, 2)])

  expect(car.products).toEqual([{
    name: 'Foo',
    sellIn: 2,
    price: 2
  }])

  car.resetProductPrice(0)

  expect(car.products).toEqual([{
    name: 'Foo',
    sellIn: 2,
    price: 0
  }])
})

test('Product handler increment price', () => {
  const car = new ProductHandler([new Product('Foo', 2, 2)])

  expect(car.products).toEqual([{
    name: 'Foo',
    sellIn: 2,
    price: 2
  }])

  car.incrementProductPrice(0, 10)

  expect(car.products).toEqual([{
    name: 'Foo',
    sellIn: 2,
    price: 12
  }])
})

test('Product handler decrement sell in', () => {
  const car = new ProductHandler([new Product('Foo', 2, 2)])

  expect(car.products).toEqual([{
    name: 'Foo',
    sellIn: 2,
    price: 2
  }])

  car.decrementProductSellIn(0)

  expect(car.products).toEqual([{
    name: 'Foo',
    sellIn: 1,
    price: 2
  }])
})

test('Product handler decrement price', () => {
  const car = new ProductHandler([new Product('Foo', 2, 10)])

  expect(car.products).toEqual([{
    name: 'Foo',
    sellIn: 2,
    price: 10
  }])

  car.decrementProductPrice(0, 5)

  expect(car.products).toEqual([{
    name: 'Foo',
    sellIn: 2,
    price: 5
  }])
})

test('Product handler increment price limit', () => {
  const car = new ProductHandler([new Product('Foo', 2, 10)])

  expect(car.products).toEqual([{
    name: 'Foo',
    sellIn: 2,
    price: 10
  }])

  car.incrementProductPrice(0, 1150)

  expect(car.products).toEqual([{
    name: 'Foo',
    sellIn: 2,
    price: 50
  }])
})

test('Product handler decrement price limit', () => {
  const car = new ProductHandler([new Product('Foo', 2, 10)])

  expect(car.products).toEqual([{
    name: 'Foo',
    sellIn: 2,
    price: 10
  }])

  car.decrementProductPrice(0, 1150)

  expect(car.products).toEqual([{
    name: 'Foo',
    sellIn: 2,
    price: 0
  }])
})
