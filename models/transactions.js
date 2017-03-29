var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var transactionsSchema = new Schema ({
  "memberid":String,
  "days":String,
  "out_date":Date,
  "due_date":Date,
  "in_date":Date,
  "fine":Number,
  "Booklist":[{ type: Schema.Types.ObjectId, ref: 'Book'}]
});

var Transaction = mongoose.model('Transaction', transactionsSchema);

module.exports = Transaction;
