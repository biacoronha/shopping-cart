import Ember from 'ember';

export default Ember.Controller.extend({
  cart: Ember.inject.service(),
  actions: {
    buyItem(item) {
      console.log(`You bought ${item.qntToAdd} item(s)`);
      item.qntInCart = item.qntToAdd;
      this.cart.add(item.id);
      this.applyDiscounts(item);
      item.itemPriceTotal = item.price * item.qntInCart
    },
    increaseQntToBuy(item) {
      item.qntToAdd++;
    },
    decreaseQntToBuy(item) {
      if(item.qntToAdd !== 0) {
          item.qntToAdd--;
      }
    }
  },
  applyDiscounts(item) {
    if(item.code === 'GR1') {
      item.qntInCart = item.qntInCart * 2;
      item.applyDiscount = true;
      item.discountTotal = item.newPrice * item.qntInCart
    }
    else if (item.code === 'SR1') {
      if(item.qntInCart >= 3) {
        item.applyDiscount = true;
        item.discountTotal = item.newPrice * item.qntInCart
      }
    }
    else if (item.code === 'CF1') {
      if(item.qntInCart >= 3) {
        item.applyDiscount = true;
        item.discountTotal = item.newPrice * item.qntInCart
      }
    }
  }
});

