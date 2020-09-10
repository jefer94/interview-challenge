const Name = require('../src/ProductName')

test('Enum low coverage', () => {
  expect(Name.lowCoverage).toBe('Low Coverage')
})

test('Enum medium coverage', () => {
  expect(Name.mediumCoverage).toBe('Medium Coverage')
})

test('Enum full coverage', () => {
  expect(Name.fullCoverage).toBe('Full Coverage')
})

test('Enum mega coverage', () => {
  expect(Name.megaCoverage).toBe('Mega Coverage')
})

test('Enum super sale', () => {
  expect(Name.superSale).toBe('Super Sale')
})

test('Enum special full coverage', () => {
  expect(Name.specialFullCoverage).toBe('Special Full Coverage')
})