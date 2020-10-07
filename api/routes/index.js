var express = require('express');
var { ImapConnector } = require('./../features/email/imap/ImapConnector.ts').ImapConnector;





var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  //imapConnector.default.connect();

  var imapConnector = new ImapConnector();
  console.log('Message: ', imapConnector);

  console.log(imapConnector.doSomething("abs"));
  

  res.render('index', { title: 'Express0' });
});

module.exports = router;
