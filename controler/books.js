let Book = require('../models/books');

module.exports ={
 create:function(req,res){
   Book.create({
     isbn:req.body.isbn,
     title:req.body.title,
     author:req.body.author,
     category:req.body.category,
     stock: req.body.stock
   },function(err,succ){
      if (err) {
        res.send(err);
      } else {
        res.send('insert success');
      }
   })
 },

 reads:function(req,res){
   Book.find({

   },
   function(err,books){
     if (err) {
       res.send(err)
     } else {
       res.send(books)
     }
   })
 },
 update:function(req,res){
   Book.findOne({
     isbn:req.params.id
   },function(err,book){
     if (err) {
       res.send(err)
     } else {
      // res.send(book)
      //console.log(req.body);
       book.isbn=req.body.isbn||book.isbn;
       book.title=req.body.title||book.title;
       book.author=req.body.author||book.author;
       book.category=req.body.category||book.category;
       book.stock=req.body.stock||book.stock;
       console.log(book);
       book.save(function (err, book) {
            if (err) {
                res.status(500).send(err)
            }
            res.send('update success');
        });

     }
   })

 },

 delete:function(req,res){
   Book.findOne({
     isbn:req.params.id
   },
     function(err){
   }).remove(function(err,succ){
     if(err){res.send(err)}
     res.send('delete success');
   })
 }

}
