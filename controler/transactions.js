let Transaction = require('../models/transactions');
var mongoose = require('mongoose');
module.exports ={
 reads:function(req,res){
   Transaction.find({

   },
   function(err,transactions){
     if (err) {
       res.send(err)
     } else {
       res.send(transactions)
     }
   }).populate('Booklist').exec(function(err,transaction){
     console.log(transaction);
   })
 },

 create:function(req,res){
   var newTransaction = new Transaction({
      memberid:req.body.memberid,
      days:req.body.days,
      out_date:req.body.out_date,
      due_date:req.body.due_date,
      in_date:req.body.in_date,
      fine:req.body.fine,
      Booklist:[]
   })
   booklist=req.body.Booklist.split(',');

   booklist.map(function(booklist){
     newTransaction.Booklist.push(mongoose.Types.ObjectId(booklist))
   })
   newTransaction.save(function(err,succ){
     if (err) {
       res.send(err)
     };
     res.send('insert succees')
   })

 },
 delete:function(req,res){
  //  console.log(req.params.id);
   Transaction.findOneAndRemove({
     memberid:  'm001'
   },
     function(err,data){
       res.send(data)
   })
 },
 read:function(req,res){
   Transaction.findById(
     req.params.id
   ).populate('Booklist')
     .exec(function(err,book){
       res.send(book)
     })
 }

}
