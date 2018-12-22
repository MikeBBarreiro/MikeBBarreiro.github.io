'use strict'
require('dotenv').config();
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
// var emailjs = require('./email');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// app.use(morgan('dev'));
app.use(express.static(__dirname + '/static'));
app.use(bodyParser.urlencoded({extended:true}));

const nodemailer = require('nodemailer');

app.get('/', function(req,res){
  res.render('home');
});

app.post('/', function(req,res){
  console.log(req.body);
  // emailjs.email();
  
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  nodemailer.createTestAccount((err, account) => {
      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
          // host: 'smtp.ethereal.email',
          service: 'Gmail',
          // port: 587,
          // secure: false, // true for 465, false for other ports
          auth: {
              user: process.env.GMAIL_USER, // generated ethereal user
              pass: process.env.GMAIL_PASS // generated ethereal password
          }
      });

      // setup email data with unicode symbols
      let mailOptions = {
          from: req.body.email, // sender address
          to: process.env.EMAIL, // list of receivers
          //to: 'o5091446@nwytg.net' //https://10minutemail.com for email testing
          subject: 'Message from ' + req.body.name + ' ' + req.body.email, // Subject line
          //text: 'Hello world? Can you see me!!!??', // plain text body
          html: '<b>Message from Portfolio Website:</b><br/><p>'+req.body.message+'</p>' // html body
      };

      // send mail with defined transport object
      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message sent: %s', info.messageId);
          // Preview only available when sending through an Ethereal account
          console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

          // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
          // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
      });
    res.render('home');

  });
});

app.listen(process.env.PORT || 5000, function(){
  console.log('port running');
});
// var express = require('express');
// var router = express.Router();
//
// router.get('/', function(req, res){
//
//   res.send('ok');
//
// });
//
// module.exports = router;
