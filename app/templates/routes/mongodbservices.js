     var nodemailer = require("nodemailer");
   
       // Create a SMTP transport object
      var transport = nodemailer.createTransport("SMTP", {
        service: 'Gmail',
        auth: {
            user: "esseasy@gmail.com",
            pass: "esssrs!234"
        }
    });


	var mongo = require('mongodb');
	var db=require('./databaseoperations');

    //user signup
	exports.signup = function(req, res) {

		var wine=req.body;
		var email=req.body.email;

        var delay=1000;

        setTimeout(function(){
		db.collection('profile', function(err, collection) {
		collection.find({email:email}).toArray(function(err, items) {
		if(items.length > 0)
		{
		res.send({status:"0"});
		}
		else
		{

		db.collection('profile', function(err, collection) {
		collection.insert(wine, {safe:true}, function(err, result) {
		if (err) {
		callback({'error':'An error has occurred'});
		} 
	    else 
	     {
		console.log('Success: ' + JSON.stringify(result[0]));
		 res.send({status:"1"});
		 }		    
	    });	
	  });	
	 }
    });	
  });
},delay);

}

   //user signin
	exports.signin = function(req, res) {

		var email=req.body.email;
		var password=req.body.password;

		db.collection('profile', function(err, collection) {
		collection.find({email:email,password:password}).toArray(function(err, items) {
		 res.send({result:items.length,sessionname:items});
	      });
	    });
	  }

  
	   //Forgot password
    exports.forgotpassword = function(req, res) {

      var forgotpasswordemail=req.body.forgotpasswordemail;
      var newpassword=req.body.newpassword;

     db.collection('profile', function(err, collection) {
        collection.find({email:forgotpasswordemail}).toArray(function(err, items) {
            if(items.length == 0)
              {            
                 res.send({status:"0"});
              }
             else
              {

           db.collection('profile', function(err, collection) {			  
           collection.update({email:forgotpasswordemail},{$set:{password:newpassword}},{ upsert: false },function(err, result) {	
		   if (err) {
		     res.sendStatus(400);
		    } 	
	    
	       });
	     });

                var mailOptions = {
		        from:"nodsem<ess@srsconsultinginc.com>",
		        to:forgotpasswordemail, 
		        subject: "new password", 
		        html: "<b>Your password is reseted your new password is "+newpassword+"</b>" // html body    
                 }  
	
		          transport.sendMail(mailOptions, function(error){
		          if(error){
		             console.log('Error occured');
		             console.log(error.message);
		            return;
		           }
		             console.log('Message sent successfully!');

		          });


                 res.send({status:"1"}); 
              }
	  		    
	    });	
	  });

    }

 exports.changepassword = function(req, res) {

     var email=req.body.useremail;
     var password=req.body.userpassword;    

       db.collection('profile', function(err, collection) {			  
           collection.update({email:email},{$set:{password:password}},{ upsert: false },function(err, result) {	
		   if (err) {
		     res.sendStatus(400);
		    } 
		    else
		    {
               res.sendStatus(200);   
		    }	
	    
	       });
	     });
 }

    
	

 
