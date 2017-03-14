import React from 'react';
import {Container, Button, Form, Message } from 'semantic-ui-react';

import {Validators} from '../../util';

class ContactForm extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = { formErrors: [] };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const {onSend} = this.props;
    const formData = this.getFormData();
    const errors = this.getErrors(formData);
    this.setState({ formErrors: errors });
    if (errors.length === 0) {
      onSend(formData);
    }
  }

  getFormData() {
    const formData = {};
    for (const key in this.refs) {
      const input = this.refs[key];
      formData[input.name] = input.value;
    }
    return formData;
  }

  getErrors(formData) {
    let errors = [];
    if (!formData.name) {
      errors.push('Name is required');
    }
    if (!formData.email) {
      errors.push('Email is required');
    } else if (!Validators.isEmail(formData.email)) {
      errors.push('Please enter a valid email');
    }
    if (!formData.message) {
      errors.push('Message is required');
    } else if (formData.message.length < 8) {
      errors.push('Message must be at least 8 characters long');
    }
    return errors;
  }

  getErrorMessageEl() {
    return (
      <Message
        size="mini"
        error
        list={this.state.formErrors}
      />
    );
  }

  render() {
    const {formErrors} = this.state;
    return (
      <Container textAlign="left" >
        <Form
          error
          size="huge"
          onSubmit={this.onSubmit} >
          <Form.Field >
            <label>Name</label>
            <input name="name" ref="fieldName" />
          </Form.Field>
          <Form.Field >
            <label>Email</label>
            <input name="email" ref="fieldEmail" />
          </Form.Field>
          <Form.Field >
            <label>Message</label>
            <textarea name="message" ref="fieldMessage" />
          </Form.Field>
          { formErrors.length > 0 && this.getErrorMessageEl() }
          <Button type="submit" >Submit</Button>
        </Form>
      </Container>
    );
  }

}

ContactForm.propTypes = {
  onSend: React.PropTypes.func.isRequired
};

export default ContactForm;
