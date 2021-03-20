const sgMail = require('@sendgrid/mail');
const keys = require('../../../../config/keys');
sgMail.setApiKey(keys.sendGridAPIKey);

const msg = {
  to: 'estanob@gmail.com',
  from: 'oneroof.mern@gmail.com',
  subject: 'Testing Node Email Service',
  text: 'This is awesome email sent from node app',
};

sgMail.send(msg, function (err, info) {
  if (err) {
    console.log('Email not sent');
  } else {
    console.log("Email sent successfully");
  }
});