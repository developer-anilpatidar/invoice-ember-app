import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    dateFrom: {
      refreshModel:true
    },
    dateTo: {
      refreshModel: true
    }
  },

  model(params) {
    return this.store.query('invoice', params);
  }
});
