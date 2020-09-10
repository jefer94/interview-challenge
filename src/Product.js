/** Represent a product */
module.exports = class Product {
  /**
   * Product constructor.
   *
   * @param {string} name - Promotion type.
   * @param {number} sellIn - Sell in X days.
   * @param {number} price - Price.
   */
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }
}