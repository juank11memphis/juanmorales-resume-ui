import React, {Component} from 'react';
import { Container, Header, Icon } from 'semantic-ui-react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Alert from 'react-s-alert';

import * as footerActions from './footerActions';
import commonStyles from '../../common/styles';

class AppFooter extends Component {

  constructor(props, context) {
    super(props, context);
    this.onSocialLinkClick = this.onSocialLinkClick.bind(this);
  }

  componentWillMount() {
    const {footerActions} = this.props;
    footerActions.loadPageData();
  }

  onSocialLinkClick(sociaLinkItem) {
    if (sociaLinkItem.link) {
      window.open(sociaLinkItem.link, '_blank');
    }
    if (sociaLinkItem.message) {
      Alert.info(sociaLinkItem.message, {
        position: 'top-right',
        effect: 'jelly',
        timeout: 5000
      });
    }
  }

  createSocialLinkItem(sociaLinkItem, index) {
    const imageContainerStyle = Object.assign(
      {},
      commonStyles.inlineBlockElement,
      { marginRight: '30px' }
    );
    return (
      <div key={index} style={imageContainerStyle} >
        <Icon
          onClick={() => this.onSocialLinkClick(sociaLinkItem)}
          link
          name={sociaLinkItem.icon}
          size="huge" />
      </div>
    );
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
            (sociaLinkItem, index) => this.createSocialLinkItem(sociaLinkItem, index)
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

