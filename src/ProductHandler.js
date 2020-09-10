const Name = require('./ProductName')

/**
 * @typedef {object} Product
 * @param {string} name - Promotion type.
 * @param {number} sellIn - Sell in X days.
 * @param {number} price - Price.
 */

/** Represent a car insurance. */
module.exports = class ProductHandler {
  /**
   * ProductHandler constructor.
   * @param {Product[]} products 
   */
  constructor(products = []) {
    this.products = products;
  }

  /**
   * Decrement sellIn for one product.
   * @param {number} index - Array index.
   */
  decrementProductSellIn(index) {
    this.products[index].sellIn -= 1
  }

  /**
   * Increment price for one product.
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
   * @param {number} index - Array index.
   * @param {number} subtract - Value to subtract to price.
   */
  decrementProductPrice(index, subtract) {
    if (this.products[index].price !== 0) this.products[index].price -= subtract
    else if (this.products[index].price < subtract) this.products[index].price = 0
  }

  /**
   * Reset price for one product.
   * @param {number} index - Array index.
   */
  resetProductPrice(index) {
    this.products[index].price = 0
  }
}
