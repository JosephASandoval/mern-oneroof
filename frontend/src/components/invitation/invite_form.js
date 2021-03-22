import React from 'react';
const sgMail = require('@sendgrid/mail');
const keys = require('../../sendgrid_api_key');
sgMail.setApiKey(keys.sendGridAPIKey);

const InvitationForm = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <form>
        <label>To:
          <input type="text" placeholder="Recipient email here" />
        </label>
        <br/>
        <label>Message:
          <input type="textarea" placeholder={`You've been invited to {}!`} />
        </label>
        <br/>
        <button className='invitation-send-button'>Send Invitation</button>
      </form>
    </div>
  )
}

export default InvitationForm;