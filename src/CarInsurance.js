const Name = require('./ProductName');
const ProductHandler = require('./ProductHandler')

/**
 * @typedef {object} Product
 * @param {string} name - Promotion type.
 * @param {number} sellIn - Sell in X days.
 * @param {number} price - Price.
 */

/** Represent a car insurance. */
module.exports = class CarInsurance extends ProductHandler {
  /**
   * Car insurance constructor.
   * @param {Product[]} products 
   */
  constructor(products = []) {
    super(products)
  }

  /**
   * Update products price.
   * @returns {Product[]} Current products.
   */
  updatePrice() {
    for (var i = 0; i < this.products.length; i++) {
      const { name } = this.products[i]
      if (name === Name.lowCoverage) this.lowCoverage(i)
      else if (name === Name.mediumCoverage) this.mediumCoverage(i)
      else if (name === Name.fullCoverage) this.fullCoverage(i)
      // else if (name === Name.megaCoverage) this.megaCoverage(i)
      else if (name === Name.superSale) this.superSale(i)
      else if (name === Name.specialFullCoverage) this.specialFullCoverage(i)
    }

    return this.products;
  }

  /**
   * Low coverage.
   * @param {number} index - Array index.
   */
  lowCoverage(index) {
    if (this.products[index].sellIn <= 0) this.resetProductPrice(index)
    else this.decrementProductPrice(index, 1)
    this.decrementProductSellIn(index)
  }

  /**
   * Medium coverage.
   * @param {number} index - Array index.
   */
  mediumCoverage(index) {
    if (this.products[index].sellIn <= 0) this.decrementProductPrice(index, 2)
    else this.decrementProductPrice(index, 1)
    this.decrementProductSellIn(index)
  }

  /**
   * Full coverage.
   * @param {number} index - Array index.
   */
  fullCoverage(index) {
    if (this.products[index].sellIn <= 0) this.incrementProductPrice(index, 2)
    else this.incrementProductPrice(index, 1)
    this.decrementProductSellIn(index)
  }

  // /**
  //  * Mega coverage.
  //  * @param {number} index - Array index.
  //  */
  // megaCoverage(index) {}

  /**
   * Super sale.
   * @param {number} index - Array index.
   */
  superSale(index) {
    this.decrementProductPrice(index, 1)
    this.decrementProductSellIn(index)
  }

  /**
   * Special full coverage.
   * @param {number} index - Array index.
   */
  specialFullCoverage(index) {
    if (this.products[index].sellIn < 1) this.resetProductPrice(index)
    else if (this.products[index].sellIn <= 5) this.incrementProductPrice(index, 3)
    else if (this.products[index].sellIn <= 10) this.incrementProductPrice(index, 2)
    else this.incrementProductPrice(index, 1)
    this.decrementProductSellIn(index, 1)
  }
}
