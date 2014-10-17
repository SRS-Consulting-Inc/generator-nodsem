var express = require('express');
var services = require('./routes/services');
  
var app = express();

app.configure(function () {
    app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());
});

app.configure(function() {
  app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
    next();
  });
  app.set('jsonp callback', true);
});
 
app.get('/',function(req,res){
res.redirect("login.html");
});
app.post('/signup', services.signup);
app.post('/signin', services.signin);

app.use(express.bodyParser({uploadDir:'./public/uploads/'}));
app.use(express.static(__dirname+"/public"));
app.use('/coverage', express.static(__dirname +  
'/../test/coverage/reports'));
app.use(app.router);
app.listen(3000);
console.log('Listening on port 3000...');
