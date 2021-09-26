import Route from '@ember/routing/route';

export default class ItemsRoute extends Route {
  model() {
    return this.store.findAll('item');
  }
}
