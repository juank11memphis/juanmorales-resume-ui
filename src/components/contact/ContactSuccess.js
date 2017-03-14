import React from 'react';
import {Message} from 'semantic-ui-react';

const ContactSuccess = () => {

  return (
    <Message
      size="massive"
      info>
      <Message.Header>Thanks a lot for your message!</Message.Header>
      <p>I will do my best to answer in the next 48 hours</p>
      <p>Please don't hesitate to contact me again in case you need it</p>
    </Message>
  );
};

export default ContactSuccess;
