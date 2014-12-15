Burndown.HistoriaEditController = Ember.ObjectController.extend({
  needs: 'historia',
  actions: {
    save: function(){
      self = this
      this.get('buffer').forEach(function(attr){
        self.get('controllers.historia.model').set(attr.key, attr.value);
      });

      this.transitionToRoute('historia',this.get('model'));
    }
  }
});
