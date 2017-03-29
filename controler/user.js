let User = require('../models/users');
let shortid= require('short-id');
let crypto = require('crypto')

module.exports ={
  insertUser: function(req,res) {
    console.log(req.body);
      let salt = shortid.generate();
      User.create({
        username: req.body.username,
        email: req.body.email,
        salt: salt,
        role:req.body.role,
        password: crypto.createHmac('sha256', salt)
            .update(req.body.password).digest('hex')
      },function(err,succ){
        if (err) {
          res.send(err)
        } else {
          res.send('insert data succes')
        }
      })
  },

 reads:function(req,res){
   User.find({

   },
   function(err,users){
     if (err) {
       res.send(err)
     } else {
       res.send(users)
     }
   })
 }


}
