import { Factory } from 'ember-cli-mirage';

// export default Factory.extend([
//   { id: 'GR1', name: 'Green tea', price: '£3.11' },
//   { id: 'ST1', name: 'Strawberries', price: '£5.00' },
//   { id: 'CF1', name: 'Coffee', price: '£11.23' },
// ]);

export default Factory.extend({
  id() {
    return 'teste';
  },

  name() {
    return 'teste';
  },

  price() {
    return 'teste';
  },
});
