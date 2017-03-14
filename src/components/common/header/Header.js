import React, {Component} from 'react';
import { Container, Header } from 'semantic-ui-react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as headerActions from './headerActions';
import commonStyles from '../../common/styles';
import HeaderMenu from './HeaderMenu';

class AppHeader extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = { activeItem: null };
    this.DEFAULT_MENU_ITEM = 'home';
    this.useActiveItemFromPageData = false;
    this.onLogoClick = this.onLogoClick.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  componentWillMount() {
    const {headerActions} = this.props;
    headerActions.loadPageData();
  }

  componentWillReceiveProps(nextProps) {
    if ( nextProps.pageData.activeItem ) {
      this.useActiveItemFromPageData = true;
    }
  }

  handleItemClick(event, { name }) {
    this.setState({ activeItem: name });
  }

  onLogoClick() {
    const path = '/';
    this.context.router.push(path);
    this.setState({ activeItem:null });
  }

  getMenuActiveItem() {
    const {pageData} = this.props;
    let { activeItem } = this.state;

    /*
     * useActiveItemFromPageData is used when moving to a new route using this.context.router.push(path),
     * that means we are going to a new route without clicking directly on a menu item, that is why
     * we need a way to sync the current route with the proper menu item.
     * when useActiveItemFromPageData is true it means the action headerActions.setActiveItem was called
     */
    if (this.useActiveItemFromPageData && pageData.activeItem) {
      activeItem = pageData.activeItem;
      this.useActiveItemFromPageData = false;
    }

    if (activeItem === null) {
      activeItem = this.getActiveItemFromUrl();
    }
    activeItem = activeItem ? activeItem : this.DEFAULT_MENU_ITEM;
    return activeItem;
  }

  getActiveItemFromUrl() {
    const currentLocation = this.context.router.getCurrentLocation();
    let activeItem;
    if (currentLocation.pathname === '/' && currentLocation.hash.length > 0) {
      activeItem = currentLocation.hash.substring(1, currentLocation.hash.length);
    } else {
      activeItem = currentLocation.pathname.substring(1, currentLocation.pathname.length);
    }
    return activeItem;
  }

  render() {
    const {pageData} = this.props;
    const activeItem = this.getMenuActiveItem();
    return (
      <Container style={commonStyles.size(null, 454)} >

        <HeaderMenu
          items={pageData.menuItems}
          activeItem={activeItem}
          onClick={this.handleItemClick}
          onLogoClick={this.onLogoClick} />

        <div className="ui middle aligned grid" style={commonStyles.size(null, 400)} >
          <div className="eight column wide">
            <Header as="h1" inverted >{pageData.title}</Header>
            <Header as="h3" inverted >{pageData.subtitle}</Header>
          </div>
        </div>

      </Container>
    );
  }
}

AppHeader.contextTypes = {
  router: React.PropTypes.object.isRequired
};

AppHeader.propTypes = {
  pageData: React.PropTypes.object.isRequired,
  headerActions: React.PropTypes.object.isRequired
};

function mapStateToProps(reduxState){
  return {
    pageData: reduxState.header.pageData
  };
}

function mapDispatchToProps(dispatch){
  return {
    headerActions: bindActionCreators(headerActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
