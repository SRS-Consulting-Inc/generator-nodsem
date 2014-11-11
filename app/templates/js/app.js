
App = Ember.Application.create({
  ready:function(){
  }
});

App.Router.map(function() {
   this.resource('signin');
   this.resource('signup');
   this.resource('home');
   this.resource('forgotpassword');
   this.resource('changepassword');
});





