App.SignupController=Ember.Controller.extend({
actions:{
  //user signup
  signupclick:function()
  {
    $("#validatemessage").html("");    
    var that=this;
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

   $.ajax ({
             type: "POST",
             url:'/signup', 
             data:adddetails,                  

             success: function(data) {    
             
                  if(data.status=="0")
                 {
                   $("#validatemessage").html("User already exist");   
                 }
                 else
                 {
                   alert("succusfully registered");
                   that.transitionToRoute('index');  
                 }      
               },
             error: function(data) {
                  alert("Msg: "+ data.status + ": " + data.statusText);

               }          
           }); 

      }
   }
 }
   
});

App.SigninController=Ember.Controller.extend({

actions:{
  //user signin
signinclick:function()
{
    $("#validatemessage").html("");
    var that=this;  
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

    $.ajax ({

             type: "POST",
             url:'/signin', 
             data:adddetails,                  

             success: function(data) {  

                if(data.result < 1)
                  {                                        
                    $("#validatemessage").html("Invalid email or password");
                  }
                else
                  {
                    var sessionname=data.sessionname[0].username;
                    setCookie("username", sessionname, 30);
                    that.transitionToRoute('home');    
                  }
                         
                   },
               error: function(data) {
                     alert("Msg: "+ data.status + ": " + data.statusText);

                   }                  
            }); 

        }

     }
   }

});

App.HomeController=Ember.Controller.extend({

  actions: {
      signout : function(){
         var that=this;  
         document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
         that.transitionToRoute('index');  
      }
  }
  
});

//set cookie for username
function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}
