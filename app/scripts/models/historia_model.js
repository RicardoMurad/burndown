/*global Ember*/
Burndown.Historia = DS.Model.extend({
  titulo: DS.attr('string'),
  pontos: DS.attr('number'),
  data: DS.attr( 'date')

});



Burndown.Historia.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});


Burndown.Historia.FIXTURES = [

  {
    id: 0,
    titulo: 'Titulo 01',
    pontos: 100,
    data:   '2014-05-27T12:54:01'

  },

  {
    id: 1,
    titulo: 'Titulo 03',
    pontos: 100,
    data:   '2014-06-27T12:54:01'
  }

];
