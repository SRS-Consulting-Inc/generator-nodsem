

App.IndexRoute = Ember.Route.extend({
  afterModel:function(){

   var username=getCookie("username");
   if(username != "")
      {
        this.transitionTo("home");
      } 
  else{
      this.transitionTo("signin");
      }

  }

});

App.SigninRoute = Ember.Route.extend({
  afterModel:function(){
   var username=getCookie("username");
   if(username != "")
      {
        this.transitionTo("home");
      } 
  else{
      this.transitionTo("signin");
      }

  }

});

App.SignupRoute = Ember.Route.extend({
  afterModel:function(){
   var username=getCookie("username");
   if(username != "")
      {
        this.transitionTo("home");
      } 
  else{
      this.transitionTo("signup");
      }

  }

});

App.HomeRoute = Ember.Route.extend({
  model:function(){
  
   var username=getCookie("username");
   if(username == "")
      {
        this.transitionTo("index");
      } 

  return [{"name":username}];
 
  }

});

App.ForgotpasswordRoute = Ember.Route.extend({
  afterModel:function(){
   var username=getCookie("username");
   if(username != "")
      {
        this.transitionTo("home");
      } 
  else{
      this.transitionTo("forgotpassword");
      }

  }

});

App.ChangepasswordRoute = Ember.Route.extend({
  afterModel:function(){
   var username=getCookie("username");
   if(username == "")
      {
        this.transitionTo("signin");
      } 
  else{
      this.transitionTo("changepassword");
      }

  }

});

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}