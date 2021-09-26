//models/monster.js
import DS from 'ember-data';

export default DS.Model.extend({
  code: DS.attr('string'),
  name: DS.attr('string'),
  price: DS.attr('number'),
  qntInCart: DS.attr('number'),
  qntToAdd: DS.attr('number'),
  itemPriceTotal: DS.attr('number'),
  newPrice: DS.attr('number'),
  applyDiscount: DS.attr('boolean'),
  discountTotal: DS.attr('number')
});
