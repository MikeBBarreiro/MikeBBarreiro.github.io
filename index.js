'use strict'
require('dotenv').config();
const nodemailer = require('nodemailer');
// const { google } = require("googleapis");
// const OAuth2 = google.auth.OAuth2;
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
// var emailjs = require('./email');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// app.use(morgan('dev'));
app.use(express.static(__dirname + '/static'));
//Store all HTML files in view folder.
// app.use(express.static(__dirname + '/views'));
app.use(bodyParser.urlencoded({extended:true}));

// const oauth2Client = new OAuth2(
//      "825108508646-4dh2m640tbrcc953ff15co73fi491pkv.apps.googleusercontent.com", // ClientID
//      "AIr2LGlT84rS-Di2pXsxW37O", // Client Secret
//      "https://developers.google.com/oauthplayground" // Redirect URL
// );
//
// oauth2Client.setCredentials({
//      refresh_token: "1/I4Lfwn_pD2UZK8zMn65iTpfh1eyYOj5QSEEShhcZHhiLeKeSZNyC66L1VFkVNdwf"
// });
// const tokens = await oauth2Client.refreshAccessToken()
// const accessToken = tokens.credentials.access_token

app.get('/', function(req,res){
  res.render('index');
  // res.sendFile('index.html');
  //res.sendFile(path.join(__dirname+'/index.html'));
});

app.post('/', function(req,res){
  console.log(req.body);
  // emailjs.email();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
      // host: 'smtp.ethereal.email',
      service: 'Gmail',
      // port: 587,
      // secure: false, // true for 465, false for other ports
      port: 465,
      secure: true,
      auth: {
        type: "OAuth2",
        user: process.env.GMAIL_USER, // generated ethereal user
        pass: process.env.GMAIL_PASS, // generated ethereal password
        clientId: "825108508646-4dh2m640tbrcc953ff15co73fi491pkv.apps.googleusercontent.com",
        clientSecret: "AIr2LGlT84rS-Di2pXsxW37O",
        refreshToken: "1/I4Lfwn_pD2UZK8zMn65iTpfh1eyYOj5QSEEShhcZHhiLeKeSZNyC66L1VFkVNdwf",
        accessToken: "ya29.Glt7Br1YaIEExWRJDWu5zqyTtrSIf2I2RcRqR6gKt_nIZWx4SCo6EINpG5Y18Vj5FqbVwuT7Q4_Pi16AAhCa7RD0h4BEyfmM8Bk1O4OOGiQHGS2SFYHL3rqR79z6"
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
res.render('index');
// res.sendFile('index.html')

  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  nodemailer.createTestAccount((err, account) => {

  });
});

app.listen(process.env.PORT || 5000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
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
