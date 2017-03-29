var express = require('express');
var router = express.Router();
var booksControl = require('../controler/books');
var constumerControl = require('../controler/costumers');
var transactionsControl = require('../controler/transactions');
let auth = require('../helper/auth')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/books',auth.authadmin, booksControl.create );
router.get('/books',auth.authuser, booksControl.reads );
router.put('/books/:id',auth.authadmin, booksControl.update )
router.delete('/books/:id',auth.authadmin, booksControl.delete )

router.post('/costumers',auth.authadmin, constumerControl.create );
router.get('/costumers',auth.authadmin, constumerControl.reads );
router.put('/costumers/:id',auth.authadmin, constumerControl.update )
router.delete('/costumers/:id',auth.authadmin, constumerControl.delete );

router.get('/transactions',auth.authadmin, transactionsControl.reads );
router.get('/transactions/:id',auth.authadmin, transactionsControl.read )
router.post('/transactions',auth.authadmin, transactionsControl.create );

module.exports = router;
