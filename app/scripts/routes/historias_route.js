Burndown.HistoriasRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').find('historia');
  }
});

