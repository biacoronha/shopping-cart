import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Service.extend({
  store: Ember.inject.service(),
  itemIds: storageFor('cart'),
  item: Ember.computed('itemIds.[]', function () {
    if(this.itemIds.length == 0){
      return []
    } else {
      return this.get('store').query('item', {ids: this.itemIds.content});
    } 
  }),
  add(itemId) {
    this.itemIds.addObject(itemId);
  },
  remove(item) {
    if(item.qntInCart !== 0) {
      item.qntInCart--;
    } 
    item.itemPriceTotal = item.price * item.qntInCart;
    this.itemIds.removeObject(parseInt(item.id));
    this.removeDiscount(item);
  },
  itemsInCart: Ember.computed.mapBy('item', 'qntInCart'),
  totalQntInCart: Ember.computed.sum('itemsInCart'),  

  itemPrices: Ember.computed.mapBy('item', 'itemPriceTotal'),
  total: Ember.computed.sum('itemPrices'),

  discountPrices:Ember.computed.mapBy('item', 'discountTotal'),
  totalDiscount: Ember.computed.sum('discountPrices'),

  showDiscountTotal: Ember.computed.bool('totalDiscount'),

  newTotal: Ember.computed( function() {
    return this.total - this.totalDiscount
  }),

  removeDiscount(item) {
    if(item.code === 'GR1') {
      item.applyDiscount = false;
    }
    else if (item.code === 'SR1') {
      if(item.qntInCart >= 3) {
        item.applyDiscount = false;
      }
    }
    else if (item.code === 'CF1') {
      if(item.qntInCart >= 3) {
        item.applyDiscount = false;
      }
    }
  },
});
