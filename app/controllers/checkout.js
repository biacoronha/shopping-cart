import Ember from 'ember';

export default Ember.Controller.extend({
  cart: Ember.inject.service(),
  actions: {
    removeItem(itemId) {
      console.log('You removed an item');
      this.cart.remove(itemId);
    },
    clear() {
      this.cart.clear();
    },
  },
});
