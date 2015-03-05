  var nodemailer = require("nodemailer");

    // Create a SMTP transport object
  var transport = nodemailer.createTransport("SMTP", {
        service: 'Gmail',
        auth: {
            user: "esseasy@gmail.com",
            pass: "esssrs!234"
        }
    });

  var Sequelize = require('sequelize')
    , sequelize = new Sequelize('nodsem', 'root', 'root', {
       define: {
                freezeTableName: true
               },
        dialect: "mysql", // or 'sqlite', 'postgres', 'mariadb'
        port:    3306, // or 5432 (for postgres)
      })
    , User= sequelize.define('profile', {
      name: Sequelize.STRING,
      username: Sequelize.STRING,
      email:Sequelize.STRING,
      password:Sequelize.STRING
                  })
      sequelize
      .sync({ force: false })
      .complete(function(err) {
       if (!!err) {
         console.log('An error occurred while creating the table:', err)
       }
      }) 

  //user signup
  exports.signup = function(req, res) {

    var name=req.body.name;
    var username=req.body.username;
    var email=req.body.email;
    var password=req.body.password;
     
    User.findAll({where:{email:email}}).success(function(results) {

         if(results.length > 0)
         {            
          res.send({status:"0"});
         }
         else
         {
          User
           .create({
                  name: name,
                  username: username,
                  email:email,
                  password:password
                 })
            res.send({status:"1"});
           }           
         })
    }

    //user signin
    exports.signin = function(req, res) {

      var email=req.body.email;
      var password=req.body.password;

         User.findAll({where:{email:email,password:password}}).success(function(results) {

          res.send({result:results.length,sessionname:results});
       })

    }
    
    //Forgot password
    exports.forgotpassword = function(req, res) {

      var forgotpasswordemail=req.body.forgotpasswordemail;
      var newpassword=req.body.newpassword;

       User.findAll({where:{email:forgotpasswordemail}}).success(function(results) {

         if(results.length == 0)
         {            
          res.send({status:"0"});
         }
         else
         {

       User.update(

         { password: newpassword },
         { where: { email : forgotpasswordemail } }    

       ).success(function() {

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
     
       }).error(function(err) { 
       console.log("Project update failed !");       
        });
          
       }                   
    })     
  }

  exports.changepassword = function(req, res) {

      var email=req.body.useremail;
      var password=req.body.userpassword;

      
       User.update(

         { password: password },
         { where: { email : email } }    

       ).success(function() {

         res.sendStatus(200); 
     
       }).error(function(err) { 
      
         res.sendStatus(400); 
        });

  }