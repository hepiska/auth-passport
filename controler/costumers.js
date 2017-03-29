let Costumer = require('../models/costumers');
module.exports ={
 create:function(req,res){
   //console.log(req.body);
   Costumer.create({
     name:req.body.name,
     memberid:req.body.memberid,
     address:req.body.address,
     zipcode:req.body.zipcode,
     phone: req.body.phone
   },function(err,succ){
      if (err) {
        res.send(err);
      } else {
        res.send('insert success');
      }
   })
 },

 reads:function(req,res){
   Costumer.find({

   },
   function(err,costumers){
     if (err) {
       res.send(err)
     } else {
       res.send(costumers)
     }
   })
 },
 update:function(req,res){
   Costumer.findOne({
     memberid:req.params.id
   },function(err,costumer){
     if (err) {
       res.send(err)
     } else {
      // res.send(costumer)
      //console.log(req.body);
       costumer.name=req.body.name||costumer.name;
       costumer.memberid=req.body.memberid||costumer.memberid;
       costumer.address=req.body.address||costumer.address;
       costumer.zipcode=req.body.zipcode||costumer.zipcode;
       costumer.phone=req.body.phone||costumer.phone;
       console.log(costumer);
       costumer.save(function (err, costumer) {
            if (err) {
                res.status(500).send(err)
            }
            res.send('update success');
        });

     }
   })

 },

 delete:function(req,res){
  //  console.log(req.params.id);
   Costumer.findOneAndRemove({
     memberid:  'm001'
   },
     function(err,data){
       res.send(data)
   })
 }

}
