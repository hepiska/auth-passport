var express = require('express');
var router = express.Router();
var passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;
let User = require('../models/users');
let crypto=require('crypto');
let userControl = require('../controler/user');
let jwt = require('jsonwebtoken')

passport.use(new LocalStrategy({
    usernameField: 'email',
    session: false
  },
  function(email, password, done) {
    User.findOne({
      email:email,
    },function(err,user){
      //console.log(user.password);
      if (err) {
        console.log(err)
      }
      if (user) {
        if (user.password===crypto.createHmac('sha256',user.salt)
            .update(password).digest('hex')) {
            done(null,user);
        } else {
          done(null,false)
        }
      } else {
        done(null,false)
      }
    })
  }
));




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login',passport.authenticate('local',{session:false}),
function(req,res){
  let user=res.req.user;
  let token=jwt.sign({
            userid:user.id,
            username:user.username,
            role:user.role
          },'rahasia',{ expiresIn: 10 * 60 });
  res.send(token)
})

 router.post('/signup',userControl.insertUser)
 router.get('/view',userControl.reads)
module.exports = router;
