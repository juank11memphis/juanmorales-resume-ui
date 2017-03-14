import React, {Component} from 'react';
import { Container, Header } from 'semantic-ui-react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as footerActions from './footerActions';
import commonStyles from '../../common/styles';
import {SocialLink} from '../sociallink';

class AppFooter extends Component {

  componentWillMount() {
    const {footerActions} = this.props;
    footerActions.loadPageData();
  }

  render() {
    const {pageData} = this.props;
    return (
      <Container
        textAlign="center"
        style={commonStyles.size(null, 250)} >
        <Header as="h1" inverted >{pageData.socialLinksTitle}</Header>
        {
          pageData.socialLinks && pageData.socialLinks.map(
            (sociaLinkItem, index) => (<SocialLink key={index} item={sociaLinkItem} />)
          )
        }
        <Header as="h4" inverted >{pageData.rightsText}</Header>
        <Header as="h4" inverted >{pageData.developedByText}</Header>
        <Header as="h4" inverted >{pageData.poweredByText}</Header>
      </Container>
    );
  }
}

AppFooter.propTypes = {
  pageData: React.PropTypes.object.isRequired,
  footerActions: React.PropTypes.object.isRequired
};

function mapStateToProps(reduxState){
  return {
    pageData: reduxState.footer.pageData
  };
}

function mapDispatchToProps(dispatch){
  return {
    footerActions: bindActionCreators(footerActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppFooter);

