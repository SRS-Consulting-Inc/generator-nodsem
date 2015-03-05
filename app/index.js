'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var NodsemGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },


  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the Nodsem generator!'
    ));


var prompts = [{
    type: 'list',
    name: 'uiselect',
    message: 'which ui framework do you like to use?',
    choices: [{
      name: 'angulurjs',
      value: 2
    }, {
      name: 'emberjs',
      value: 1
    }]
  },
   {
    type: 'list',
    name: 'ui',
    message: 'which css framework do you like to use?',
    choices: [{
      name: 'semanticui',
      value: 2
    }, {
      name: 'twitterbootstrap',
      value: 1
    }]
  },
  {
    type: 'list',
    name: 'taskrunner',
    message: 'which taskrunner do you like to use?',
    choices: [{
      name: 'grunt',
      value: 2
    }, {
      name: 'gulp',
      value: 1
    }]
  },
  {
    type: 'list',
    name: 'dbselect',
    message: 'which database do you like to use?',
    choices: [{
      name: 'mysql',
      value: 3
    }, {
      name: 'sqlite',
      value: 2
    }, {
      name: 'mongodb',
      value: 1
    }]
  }
    ];

  this.prompt(prompts, function (answers) {
    this.angulurjs = (answers.uiselect === 2);      
    this.emberjs = (answers.uiselect === 1);   
    this.semanticui = (answers.ui === 2);
    this.twitterbootstrap = (answers.ui === 1);
    this.grunt = (answers.taskrunner === 2);
    this.gulp =  (answers.taskrunner === 1);  
    this.mysql = (answers.dbselect === 3);
    this.sqlite = (answers.dbselect === 2);  
    this.mongodb = (answers.dbselect === 1);     
    this.mochaOption = answers.mochaOption;
    this.gruntOption = answers.gruntOption;

    done();
  }.bind(this));
},


  writing: {
    app: function () {

        if(this.emberjs && this.semanticui)
      {

      this.copy('html/semanticlogin.html', 'public/login.html'); 
      this.copy('css/libs/normalize.css', 'public/css/libs/normalize.css');  
      this.copy('js/libs/handlebars-1.1.2.js', 'public/js/libs/handlebars-1.1.2.js');
      this.copy('js/libs/ember-1.5.1.js', 'public/js/libs/ember-1.5.1.js');
      this.copy('js/app.js', 'public/js/app.js');
      this.copy('js/model/routes.js', 'public/js/model/routes.js');
      this.copy('js/controller/logincontroller.js', 'public/js/controller/logincontroller.js');
      this.copy('tests/runner.css', 'public/tests/runner.css'); 
      this.copy('tests/runner.js', 'public/tests/runner.js');
      this.copy('tests/semantictests.js', 'public/tests/tests.js');
      this.copy('tests/vendor/qunit-1.12.0.css', 'public/tests/vendor/qunit-1.12.0.css');
      this.copy('tests/vendor/qunit-1.12.0.js', 'public/tests/vendor/qunit-1.12.0.js');
      }


        if(this.emberjs && this.twitterbootstrap)
      {

      this.copy('html/bootstraplogin.html', 'public/login.html');
      this.copy('css/libs/normalize.css', 'public/css/libs/normalize.css');  
      this.copy('css/libs/style.css', 'public/css/libs/style.css');  
      this.copy('js/libs/handlebars-1.1.2.js', 'public/js/libs/handlebars-1.1.2.js');
      this.copy('js/libs/ember-1.5.1.js', 'public/js/libs/ember-1.5.1.js');
      this.copy('js/app.js', 'public/js/app.js');
      this.copy('js/model/routes.js', 'public/js/model/routes.js');
      this.copy('js/controller/logincontroller.js', 'public/js/controller/logincontroller.js');
      this.copy('tests/runner.css', 'public/tests/runner.css'); 
      this.copy('tests/runner.js', 'public/tests/runner.js');
      this.copy('tests/bootstraptests.js', 'public/tests/tests.js');
      this.copy('tests/vendor/qunit-1.12.0.css', 'public/tests/vendor/qunit-1.12.0.css');
      this.copy('tests/vendor/qunit-1.12.0.js', 'public/tests/vendor/qunit-1.12.0.js');
      this.copy('img/avatar.png', 'public/img/avatar.png');  

      }
 
       if(this.angulurjs && this.semanticui)
      {

      this.copy('html/angularsemantic.html', 'public/login.html');
      this.copy('js/angularapp.js', 'public/js/app.js');
      this.copy('js/controller/angulurlogincontroller.js', 'public/js/controller/logincontroller.js');
      this.copy('js/libs/angular.js', 'public/js/libs/angular.js');
      this.copy('js/libs/angular-route.js', 'public/js/libs/angular-route.js');
      this.copy('html/angularmain.html', 'public/js/view/main.html');
      this.copy('html/dashboard.html', 'public/js/view/dashboard.html');
      this.copy('html/angularsignup.html', 'public/js/view/signup.html');
      this.copy('html/semanticforgotpassword.html', 'public/js/view/forgotpassword.html');
      this.copy('html/semanticchangepassword.html', 'public/js/view/changepassword.html');
       
      }

       if(this.angulurjs && this.twitterbootstrap)
      {

      this.copy('html/angularbootstrap.html', 'public/login.html');
      this.copy('css/libs/style.css', 'public/css/libs/style.css'); 
      this.copy('js/angularapp.js', 'public/js/app.js');
      this.copy('js/controller/angulurlogincontroller.js', 'public/js/controller/logincontroller.js');
      this.copy('js/libs/angular.js', 'public/js/libs/angular.js');
      this.copy('js/libs/angular-route.js', 'public/js/libs/angular-route.js');
      this.copy('html/main.html', 'public/js/view/main.html');
      this.copy('html/bootstrapdashboard.html', 'public/js/view/dashboard.html');
      this.copy('html/signup.html', 'public/js/view/signup.html');
      this.copy('html/bootstrapforgotpassword.html', 'public/js/view/forgotpassword.html');
      this.copy('html/bootstrapchangepassword.html', 'public/js/view/changepassword.html');
      this.copy('img/avatar.png', 'public/img/avatar.png');
  
      }

      if (this.mysql) 
      {
          this.copy('routes/mysqlservices.js', 'routes/services.js');   

      }
      if (this.sqlite) 
      {
          this.copy('routes/sqliteservices.js', 'routes/services.js');   

      }
      if (this.mongodb) 
      {
          this.copy('routes/mongodbservices.js', 'routes/services.js'); 
          this.copy('routes/databaseoperations.js', 'routes/databaseoperations.js');   

      }
     if (this.semanticui)
      {
        
          this.copy('css/libs/semantic.min.css', 'public/css/libs/semantic.min.css');   
          this.copy('js/libs/semantic.min.js', 'public/js/libs/semantic.min.js');    
     }

     if (this.twitterbootstrap) 
     {
          this.copy('css/libs/bootstrap.min.css', 'public/css/libs/bootstrap.min.css');
          this.copy('css/libs/signin.css', 'public/css/libs/signin.css');
          this.copy('js/libs/bootstrap.min.js', 'public/js/libs/bootstrap.min.js');     
     }

     if (this.emberjs && this.grunt) 
     {
      this.copy('Gruntfile.js', 'Gruntfile.js'); 
      this.copy('test.js', 'test/test.js');
      this.copy('require_helper.js', 'test/require_helper.js');
      this.copy('app.js', 'app.js');
     }

     if (this.angulurjs && this.grunt) 
     {
      this.copy('AngularGruntfile.js', 'Gruntfile.js');
      this.copy('test.js', 'test/test.js');
      this.copy('require_helper.js', 'test/require_helper.js');  
      this.copy('app.js', 'app.js');
     }

     if (this.emberjs && this.gulp) 
     {
      this.copy('Embergulpfile.js', 'gulpfile.js');
      this.copy('gulptest.js', 'gulp/test.js');
      this.copy('gulpapp.js', 'app.js');
     }

     if (this.angulurjs && this.gulp) 
     {
      this.copy('Angulurgulpfile.js', 'gulpfile.js');
      this.copy('gulptest.js', 'gulp/test.js'); 
      this.copy('gulpapp.js', 'app.js');  
     }

               
      this.dest.mkdir('routes');
      this.copy('package.json', 'package.json');  
      this.installDependencies();

     
    }
  },
  end: function () {
   
  
  }
});

module.exports = NodsemGenerator;
