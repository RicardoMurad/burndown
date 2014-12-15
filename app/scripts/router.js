Burndown.Router.map(function () {

  this.resource('historias', function(){

    this.resource('historium', { path: '/:historium_id' }, function(){
      this.route('edit');
    });

    this.route('create');
  });

});
