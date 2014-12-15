Burndown.HistoriaRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('historia', params.historia_id);
  }
});

