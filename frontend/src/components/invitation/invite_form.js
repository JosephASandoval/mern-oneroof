import React from 'react';
const sgMail = require('@sendgrid/mail');
const keys = require('../../sendgrid_api_key');
sgMail.setApiKey(keys.sendGridAPIKey);

const InvitationForm = () => {
  return (
    <h1>Hello World</h1>
  )
}

export default InvitationForm;