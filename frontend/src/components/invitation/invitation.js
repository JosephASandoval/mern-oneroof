const sgMail = require('@sengrid/mail');
sgMail.setApiKey("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");

const msg = {
  to: 'estanob@gmail.com',
  from: 'josephasandoval17@gmail.com',
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