const { Product, CarInsurance } = require('../src/co');
const Name = require('../src/ProductName')

// Behavior test

test('Empty case with empty arr', () => {
  const car = new CarInsurance([])

  const products = car.updatePrice()
  expect(products).toEqual([])
})

test('Empty case without argument', () => {
  const car = new CarInsurance()

  const products = car.updatePrice()
  expect(products).toEqual([])
})

test('Case 1 Medium Coverage', () => {
  const sellIn = 10
  const price = 20
  const car = new CarInsurance([ new Product(Name.mediumCoverage, sellIn, price) ])

  for (let i = 1; i <= 10; i++) {
    const products = car.updatePrice()
    expect(products).toEqual([{
      name: Name.mediumCoverage,
      sellIn: sellIn - i,
      price: price - i
    }])
  }

  for (let i = 11; i <= 15; i++) {
    const products = car.updatePrice()
    expect(products).toEqual([{
      name: Name.mediumCoverage,
      sellIn: sellIn - i,
      price: 10 - ((i - 10) * 2)
    }])
  }

  for (let i = 16; i <= 30; i++) {
    const products = car.updatePrice()
    expect(products).toEqual([{
      name: Name.mediumCoverage,
      sellIn: sellIn - i,
      price: 0
    }])
  }
})

test('Case 2 Full Coverage', () => {
  const sellIn = 2
  const price = 0
  const car = new CarInsurance([ new Product(Name.fullCoverage, sellIn, price) ])

  for (let i = 1; i <= 2; i++) {
    const products = car.updatePrice()
    expect(products).toEqual([{
      name: Name.fullCoverage,
      sellIn: sellIn - i,
      price: i
    }])
  }

  for (let i = 3; i <= 26; i++) {
    const products = car.updatePrice()
    expect(products).toEqual([{
      name: Name.fullCoverage,
      sellIn: sellIn - i,
      price: 2 + ((i - 2) * 2)
    }])
  }

  for (let i = 27; i <= 30; i++) {
    const products = car.updatePrice()
    expect(products).toEqual([{
      name: Name.fullCoverage,
      sellIn: sellIn - i,
      price: 50
    }])
  }
})

test('Case 3 Low coverage', () => {
  const sellIn = 5
  const price = 7
  const car = new CarInsurance([ new Product(Name.lowCoverage, sellIn, price) ])

  for (let i = 1; i <= 5; i++) {
    const products = car.updatePrice()
    expect(products).toEqual([{
      name: Name.lowCoverage,
      sellIn: sellIn - i,
      price: price - i
    }])
  }

  const products = car.updatePrice()
  expect(products).toEqual([{
    name: Name.lowCoverage,
    sellIn: -1,
    price: 0
  }])

  for (let i = 7; i <= 30; i++) {
    const products = car.updatePrice()
    expect(products).toEqual([{
      name: Name.lowCoverage,
      sellIn: sellIn - i,
      price: 0
    }])
  }
})

test('Case 4 Mega Coverage', () => megaCoverage(0, 80))

test('Case 5 Mega Coverage', () => megaCoverage(-1, 80))

function megaCoverage(sellIn, price) {
  const car = new CarInsurance([ new Product(Name.megaCoverage, sellIn, price) ])

  for (let i = 1; i <= 30; i++) {
    const products = car.updatePrice()
    expect(products).toEqual([{
      name: Name.megaCoverage,
      sellIn,
      price
    }])
  }
}


test('Case 6 Special Full Coverage', () => {
  const sellIn = 15
  const price = 20
  const car = new CarInsurance([ new Product(Name.specialFullCoverage, sellIn, price) ])

  for (let i = 1; i <= 5; i++) {
    const products = car.updatePrice()
    expect(products).toEqual([{
      name: Name.specialFullCoverage,
      sellIn: sellIn - i,
      price: price + i
    }])
  }

  for (let i = 6; i <= 10; i++) {
    const products = car.updatePrice()
    expect(products).toEqual([{
      name: Name.specialFullCoverage,
      sellIn: sellIn - i,
      price: 25 + ((i - 5) * 2)
    }])
  }

  for (let i = 11; i <= 15; i++) {
    const products = car.updatePrice()
    expect(products).toEqual([{
      name: Name.specialFullCoverage,
      sellIn: sellIn - i,
      price: 35 + ((i - 10) * 3)
    }])
  }

  for (let i = 16; i <= 30; i++) {
    const products = car.updatePrice()
    expect(products).toEqual([{
      name: Name.specialFullCoverage,
      sellIn: sellIn - i,
      price: 0
    }])
  }
})

test('Case 7 Special Full Coverage', () => {
  const sellIn = 10
  const price = 49
  const car = new CarInsurance([ new Product(Name.specialFullCoverage, sellIn, price) ])

  for (let i = 1; i <= 6; i++) {
    const products = car.updatePrice()
    expect(products).toEqual([{
      name: Name.specialFullCoverage,
      sellIn: sellIn - i,
      price: 50
    }])
  }

  for (let i = 7; i <= 10; i++) {
    const products = car.updatePrice()
    expect(products).toEqual([{
      name: Name.specialFullCoverage,
      sellIn: sellIn - i,
      price: 50
    }])
  }

  for (let i = 11; i <= 30; i++) {
    const products = car.updatePrice()
    expect(products).toEqual([{
      name: Name.specialFullCoverage,
      sellIn: sellIn - i,
      price: 0
    }])
  }
})

test('Case 8 Special Full Coverage', () => {
  const sellIn = 5
  const price = 49
  const car = new CarInsurance([ new Product(Name.specialFullCoverage, sellIn, price) ])

  for (let i = 1; i <= 5; i++) {
    const products = car.updatePrice()
    expect(products).toEqual([{
      name: Name.specialFullCoverage,
      sellIn: sellIn - i,
      price: 50
    }])
  }

  for (let i = 6; i <= 30; i++) {
    const products = car.updatePrice()
    expect(products).toEqual([{
      name: Name.specialFullCoverage,
      sellIn: sellIn - i,
      price: 0
    }])
  }
})

test('Case 9 Super Sale', () => {
  const sellIn = 3
  const price = 6
  const car = new CarInsurance([ new Product(Name.superSale, sellIn, price) ])

  for (let i = 1; i <= 3; i++) {
    const products = car.updatePrice()
    expect(products).toEqual([{
      name: Name.superSale,
      sellIn: sellIn - i,
      price: price - i
    }])
  }

  const products = car.updatePrice()
  expect(products).toEqual([{
    name: Name.superSale,
    sellIn: -1,
    price: 1
  }])

  for (let i = 5; i <= 30; i++) {
    const products = car.updatePrice()
    expect(products).toEqual([{
      name: Name.superSale,
      sellIn: sellIn - i,
      price: 0
    }])
  }
})