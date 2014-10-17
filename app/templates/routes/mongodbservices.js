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