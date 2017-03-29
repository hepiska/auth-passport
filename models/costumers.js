var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var costumersSchema = new Schema ({
  "name":String,
  "memberid":String,
  "address":String,
  "zipcode":String,
  "phone": Number
});

var Costumer = mongoose.model('Costumer', costumersSchema);

module.exports = Costumer;
