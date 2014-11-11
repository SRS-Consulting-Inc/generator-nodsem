
'use strict';

angular.module('clientApp', ['ngRoute'])
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'js/view/main.html',
    controller: 'MainCtrl'
  })
  .when('/dashboard', {
    templateUrl: 'js/view/dashboard.html',
    controller: 'DashboardCtrl'
  })
  .when('/signup', {
    templateUrl: 'js/view/signup.html',
    controller: 'signupCtrl'
  })
  .when('/forgotpassword', {
    templateUrl: 'js/view/forgotpassword.html',
    controller: 'forgotpasswordCtrl'
  })
  .when('/changepassword', {
    templateUrl: 'js/view/changepassword.html',
    controller: 'changepasswordCtrl'
  })
});