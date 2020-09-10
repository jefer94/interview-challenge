module.exports = class Product {
  constructor(name, sellIn, price) {
    this.check(name, sellIn, price)
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }

  check(name, sellIn, price) {
    // if (price < 0) throw 'The price of a product is never negative.'
    // if (price > 50) throw 'The price of a product is never more than 50.'
  }
}