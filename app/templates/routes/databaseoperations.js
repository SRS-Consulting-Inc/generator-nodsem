var mongo = require('mongodb');

//Connection part to connect to mongodb
var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;
 
var server = new Server('localhost', 27017, {auto_reconnect: true});
    databaseconnection = new Db('nodsem', server);
 
    databaseconnection.open(function(err, databaseconnection) {
   if(!err) {
        console.log("Connected to 'nodsem' database");
        databaseconnection.collection('', {strict:true}, function(err, collection) {
         
       });
    }
});

module.exports = databaseconnection;


