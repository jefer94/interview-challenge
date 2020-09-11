const ProductModule = require('../src/Product')
const CarInsuranceModule = require('../src/CarInsurance')
const { Product, CarInsurance } = require('../src/co')

test('Co Product', () => {
  expect(Product).toBe(ProductModule)
})

test('Co CarInsurance', () => {
  expect(CarInsurance).toBe(CarInsuranceModule)
})