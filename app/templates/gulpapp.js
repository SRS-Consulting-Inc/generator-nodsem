var express = require('express');
var services = require('./routes/services');
var bodyParser=require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({extended: true}));

  app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
    next();
  });
  app.set('jsonp callback', true);

app.get('/',function(req,res){
res.redirect("login.html");
});
app.post('/signup', services.signup);
app.post('/signin', services.signin);
app.post('/forgotpassword', services.forgotpassword);
app.post('/changepassword', services.changepassword);

app.use(express.static(__dirname+"/public"));

app.listen(3000);
console.log('Listening on port 3000...');