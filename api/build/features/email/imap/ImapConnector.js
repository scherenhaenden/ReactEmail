"use strict";
var Imap = require('imap'), inspect = require('util').inspect;
var ImapConnector = /** @class */ (function () {
    function ImapConnector() {
    }
    ImapConnector.prototype.doSomething = function (input) {
        return input;
    };
    return ImapConnector;
}());
module.exports = { ImapConnector: ImapConnector };

/*const imapConnector = function (user, password, host, port, tls, authTimeout) {

    var imapConnector2 = new Imap({
        user : user,
        password : password,
        host : host,
        port : port,
        tls : tls,
        authTimeout : authTimeout,
        });

        //this.imapConnector = imapConnector2;
        return imapConnector2;
}

//var imapConnector;

var connect = function connect() {

    //imapConnector.connect();

}




*/
/*
  function openInbox(cb) {
    imapConnector.openBox('INBOX', true, cb);
  }

  imapConnector.once('ready', function() {
    openInbox(function(err, box) {
      if (err) throw err;
      var f = imapConnector.seq.fetch('1:3', {
        bodies: 'HEADER.FIELDS (FROM TO SUBJECT DATE)',
        struct: true
      });
      f.on('message', function(msg, seqno) {
        console.log('Message #%d', seqno);
        var prefix = '(#' + seqno + ') ';
        msg.on('body', function(stream, info) {
          var buffer = '';
          stream.on('data', function(chunk) {
            buffer += chunk.toString('utf8');
          });
          stream.once('end', function() {
            console.log(prefix + 'Parsed header: %s', inspect(Imap.parseHeader(buffer)));
          });
        });
        msg.once('attributes', function(attrs) {
          console.log(prefix + 'Attributes: %s', inspect(attrs, false, 8));
        });
        msg.once('end', function() {
          console.log(prefix + 'Finished');
        });
      });
      f.once('error', function(err) {
        console.log('Fetch error: ' + err);
      });
      f.once('end', function() {
        console.log('Done fetching all messages!');
        imapConnector.end();
      });
    });
  });
   
  imapConnector.once('error', function(err) {
    console.log(err);
  });
   
  imapConnector.once('end', function() {
    console.log('Connection ended');
  });*/
//exports.imapConnector = imapConnector;
