var basePath       = location.href,
    basePathString =  basePath.split("/"),
    routeName      = basePathString[4],
    visitRoute     = "/"+routeName;

//Set up for the Qunit testing
App.setupForTesting();
App.rootElement = '#ember-testing';
  Ember.Test.registerHelper('getController',  
        function(app, controllerName) {
          return app.__container__.lookup('controller:' + controllerName);
        }
      );
  App.injectTestHelpers();


//Defining the Module for testing  
  module("Qunit Ember Framework - Application  Test", {
  setup: function() {
    App.reset();
    App.injectTestHelpers();
   
  }
});

/*============= Qunit test for Signin form Rendering==================*/
if(routeName=="signin"){

    test('Testing Login Page Rendering', function() {
              visit(visitRoute);
              andThen(function() {
                equal(currentURL(), '/signin',"signin page  is rendered");
                equal(currentRouteName(), 'signin',"signin  Route is working Fine");
              });
            });

    test("Sign in Negative Test case-pass", function() {
      visit(visitRoute)
      .fillIn("input#signinemail", "")
      .fillIn("input#signinpassword", "")
      .click("button#signin-btn")
      .then(function(result) {
        var msg =  find('#validatemessage').text();
         equal(msg, 'Enter the required fields',"Sigin process failed due to " + msg);
      });
    });

    test("Sign in Positive Test case - pass", function() {
    visit(visitRoute)
    .fillIn("input#signinemail", "devagi@gmail.com")
    .fillIn("input#signinpassword", "srs")
    .click("button#signin-btn")
    .then(function(result) {
      var msg =  find('#validatemessage').text();
     
          if(msg==""){
          equal(currentURL(), '/home',"Dashboard page is rendered");
          equal(currentRouteName(), 'home',currentRouteName()+" is found in Dashboard");
        }
  else{
          equal(msg, 'Invalid email or password',"Registration failed - Error text captured as " + msg);
        }
    });
  });
}
/*======================== Ends here ===========================================*/

/*============= Qunit Test for Signup Form Functionality =======================*/
if(routeName=="signup")
{
  test('Testing Signup Page Rendering', function() {
            visit(visitRoute);
            andThen(function() {
              equal(currentURL(), '/signup',"signup page  is rendered");
              equal(currentRouteName(), 'signup',"signup  Route is working Fine");
              equal(currentPath(), 'signup',"Current path is  signup path");
             
            });
          });

     test("Signup in Negative Test case - pass", function() {
      visit(visitRoute)
      .fillIn("input#name", "")
      .fillIn("input#username", "")
      .fillIn("input#email", "")
      .fillIn("input#password", "")
      .click("button#signup-btn")
      .then(function(result) {
        var msg =  find('#validatemessage').text();
        if(msg=="Enter the required fields"){
         equal(msg, 'Enter the required fields',"Sigup process failed - captured the Error msg- " + msg);
        }
      });
    });

     
    test("Signup in Positive Test case - pass", function() {
    visit(visitRoute)
    .fillIn("input#name", "admin")
    .fillIn("input#username", "SRSadmin")
    .fillIn("input#email", "admin@srsconsultinginc.com")
    .fillIn("input#password", "srs")
    .click("button#signup-btn")
    .then(function(result) {
       var msg =  find('#validatemessage').text();
       if(msg==""){
                equal(currentRouteName(), 'signin',"Successfully signed up and redirected to  sigin page,captured "+currentRouteName()+"Route");     
       }else if(msg=="Enter valid email"){
    equal(msg, 'Enter valid email',"Registration failed - Error text captured as " + msg);
  }
  else{
           equal(msg, 'User already exist',"Sigup process failed - captured the Error msg- " + msg);
       }
    });
  });

}
/*======================== Ends here =========================================*/

/*============= Qunit test for Home/Dashboard page  Rendering==================*/
if(routeName=="home"){
  

    test('Testing Dashboard Page Rendering', function() {
              visit(visitRoute);
              andThen(function() {
                equal(currentURL(), '/home',"Dashboard page  is rendered");
                equal(currentRouteName(), 'home',"home  Route is working Fine");
              });
            });
}
/*============== Ends here =================================================*/    
  