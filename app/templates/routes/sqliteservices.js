  var Sequelize = require('sequelize')
  ,sequelize = new Sequelize('nodsem', 'username', 'password', {

  dialect: 'sqlite',

  storage: 'nodsem.db'
  }), User= sequelize.define('profile', {
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
