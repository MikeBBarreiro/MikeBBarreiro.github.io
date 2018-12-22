// 'use strict'
//
// module.exports.email = function(){
//   // require('dotenv').config();
//   // const nodemailer = require('nodemailer');
//
//   console.log('EMAIL start');
//
//   var name = $('#name').val();
//   var fe = $('#fromEmail').val();
//   var message = $('#message').val();
//
//   Generate test SMTP service account from ethereal.email
//   Only needed if you don't have a real mail account for testing
//   nodemailer.createTestAccount((err, account) => {
//       // create reusable transporter object using the default SMTP transport
//       let transporter = nodemailer.createTransport({
//           // host: 'smtp.ethereal.email',
//           service: 'Gmail',
//           // port: 587,
//           // secure: false, // true for 465, false for other ports
//           auth: {
//               user: process.env.GMAIL_USER, // generated ethereal user
//               pass: process.env.GMAIL_PASS // generated ethereal password
//           }
//       });
//
//       // setup email data with unicode symbols
//       let mailOptions = {
//           from: fe, // sender address
//           to: process.env.EMAIL, // list of receivers
//           //to: 'o5091446@nwytg.net' //https://10minutemail.com for email testing
//           subject: 'Message from' + name, // Subject line
//           //text: 'Hello world? Can you see me!!!??', // plain text body
//           html: '<b>Message from Portfolio Website:</b><br/><p>'+message+'</p>' // html body
//       };
//
//       // send mail with defined transport object
//       transporter.sendMail(mailOptions, (error, info) => {
//           if (error) {
//               return console.log(error);
//           }
//           console.log('Message sent: %s', info.messageId);
//           // Preview only available when sending through an Ethereal account
//           console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
//
//           // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
//           // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
//       });
//
//   console.log('EMAIL End');
//   });
//
// }
