    'use strict';

    angular.module('clientApp')
    .controller('MainCtrl',
    function ($scope, $location,$http) { 

    var username=getCookie("username");
     if(username != "")
      {
       $location.path('/dashboard')
      }
     
    //user signin
    $scope.login = function () {

    $("#validatemessage").html("");
    var email=$("#signinemail").val();
    var password=$("#signinpassword").val();

    if(email == "" || password == "")
    {

     $("#validatemessage").html("Enter the required fields");
    }
    else
    {

     var adddetails={};

     adddetails.email=email;
     adddetails.password=password;

      $http.post("/signin",adddetails)
     .success(function(response) 
    {
       
    if(response.result < 1)
      {                                        
        $("#validatemessage").html("Invalid email or password");
      }
     else
      {
        var sessionname=response.sessionname[0].username;
        setCookie("username", sessionname, 30);
        $location.path('/dashboard')    
      }	

    });

    }            
    };
      $scope.signup = function () {
      $location.path('/signup')
    };

    });

    angular.module('clientApp')
    .controller('signupCtrl',
    function ($scope, $location,$http) {
    $scope.signin = function () {
      $location.path('/')
    };
    
    //user signup
    $scope.register = function () {
        
        $("#validatemessage").html("");
        var name=$("#name").val();
        var username=$("#username").val();
        var email=$("#email").val(); 
        var password=$("#password").val();
        var reg =/^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;

    if(name == "" || username == "" || email == "" || password == "")
    {

      $("#validatemessage").html("Enter the required fields");
    }
    else if(!reg.test(email))
    {
      $("#validatemessage").html("Enter valid email");
     }
    else
    {

       var adddetails={};
           adddetails.name=name;
           adddetails.email=email;
           adddetails.username=username;
           adddetails.password=password;

       $http.post("/signup",adddetails)
     .success(function(response) 
      {

        if(response.status=="0")
         {
           $("#validatemessage").html("User already exist");   
         }
         else
         {
           alert("succusfully registered");
           $location.path('/') 
         }    
              
      });

    }
    }; 

    });

    angular.module('clientApp')
    .controller('DashboardCtrl',
    function ($scope, $location) {
    var username=getCookie("username");
     if(username == "")
      {
       $location.path('/')
      }
  
      $scope.name=username;
    
     $scope.signout = function () {
      document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
      $location.path('/')
    };

    });

//set cookie for username
function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}

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
