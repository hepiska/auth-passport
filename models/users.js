var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var userSchema = new Schema ({
  "username":String,
  "email":String,
  "password":String,
  "role":String,
  "salt":String
});

var User = mongoose.model('User', userSchema);

module.exports = User;
