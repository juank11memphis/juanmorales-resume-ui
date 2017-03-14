import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {contactActions} from '../contact';
import commonStyles from '../common/styles';
import ContactForm from './ContactForm';
import ContactSuccess from './ContactSuccess';

class ContactPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.onSendForm = this.onSendForm.bind(this);
    this.state = { messageSent: false };
  }

  componentWillMount() {
    this.loadPageData();
  }

  loadPageData() {
    const {contactActions} = this.props;
    contactActions.loadContactPageData();
  }

  onSendForm(formData) {
    const {contactActions} = this.props;
    contactActions.sendContactMessage(formData)
      .then( (response) => this.onSendFormResponse(response.result));
  }

  onSendFormResponse(result) {
    if (result.success === true) {
      this.setState({ messageSent: true });
    }
  }

  render() {
    const {pageData} = this.props;
    const {messageSent} = this.state;
    return (
      <Container style={commonStyles.margin(20)} textAlign="center"  >
        <Header
          as="h1" >
          {pageData.title}
        </Header>
        <Header
          as="h3" >
          {pageData.subtitle}
        </Header>
        { !messageSent && <ContactForm onSend={this.onSendForm} /> }
        { messageSent && <ContactSuccess /> }
      </Container>
    );
  }

}

ContactPage.propTypes = {
  contactActions: React.PropTypes.object.isRequired,
  pageData: React.PropTypes.object.isRequired
};

function mapStateToProps(reduxState){
  return {
    pageData: reduxState.contact.pageData
  };
}

function mapDispatchToProps(dispatch){
  return {
    contactActions: bindActionCreators(contactActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);
