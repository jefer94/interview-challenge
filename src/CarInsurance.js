const Name = require('./ProductName')

/**
 * @typedef {object} Product
 * @param {string} name - Promotion type.
 * @param {number} sellIn - Sell in X days.
 * @param {number} price - Price.
 */

/** Represent a car insurance. */
module.exports = class CarInsurance {
  /**
   * Car insurance constructor.
   *
   * @param {Product[]} products 
   */
  constructor(products = []) {
    this.products = products;
  }

  /**
   * Decrement sellIn for one product.
   *
   * @param {number} index - Array index.
   */
  decrementProductSellIn(index) {
    this.products[index].sellIn -= 1
  }

  /**
   * Increment price for one product.
   *
   * @param {number} index - Array index.
   * @param {number} add - Value to add to price.
   */
  incrementProductPrice(index, add) {
    const price = this.products[index].price
    if (price <= 50 && price + add > 50) this.products[index].price = 50
    else if (price >= 0 && price <= 50) this.products[index].price += add
  }

  /**
   * Decrement price for one product.
   *
   * @param {number} index - Array index.
   * @param {number} subtract - Value to subtract to price.
   */
  decrementProductPrice(index, subtract) {
    if (this.products[index].price !== 0) this.products[index].price -= subtract
    else if (this.products[index].price < subtract) this.products[index].price = 0
  }

  /**
   * Reset price for one product.
   *
   * @param {number} index - Array index.
   */
  resetProductPrice(index) {
    this.products[index].price = 0
  }

  /**
   * Update products price.
   *
   * @returns {Product[]} Current products.
   */
  updatePrice() {
    for (var i = 0; i < this.products.length; i++) {
      switch (this.products[i].name) {
        case Name.lowCoverage:
          if (this.products[i].sellIn <= 0) this.resetProductPrice(i)
          else this.decrementProductPrice(i, 1)
          this.decrementProductSellIn(i)
          break
        
        case Name.mediumCoverage:
          if (this.products[i].sellIn <= 0) this.decrementProductPrice(i, 2)
          else this.decrementProductPrice(i, 1)
          this.decrementProductSellIn(i)
          break

        case Name.fullCoverage:
          if (this.products[i].sellIn <= 0) this.incrementProductPrice(i, 2)
          else this.incrementProductPrice(i, 1)
          this.decrementProductSellIn(i)
          break

        case Name.megaCoverage:
          if (this.products[i].sellIn < 0) this.incrementProductPrice(i, 2)
          else this.incrementProductPrice(i, 1)
          break

        case Name.superSale:
          this.decrementProductPrice(i, 1)
          this.decrementProductSellIn(i)
          break

        case Name.specialFullCoverage:
          console.log(this.products[i].sellIn)
          if (this.products[i].sellIn < 1) this.resetProductPrice(i)
          else if (this.products[i].sellIn <= 5) this.incrementProductPrice(i, 3)
          else if (this.products[i].sellIn <= 10) this.incrementProductPrice(i, 2)
          else this.incrementProductPrice(i, 1)
          // else this.incrementProductPrice(i, 1)
          this.decrementProductSellIn(i, 1)
          break
      }
    }

    return this.products;
  }
}
