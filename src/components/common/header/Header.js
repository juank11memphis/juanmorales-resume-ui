import React, {Component} from 'react';
import { IndexLink, Link } from 'react-router';
import { Menu, Container, Image, Header } from 'semantic-ui-react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import logo from '../../../styles/img/logo.png';
import * as headerActions from './headerActions';
import commonStyles from '../../common/styles';

class AppHeader extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = { activeItem: null };
    this.useActiveItemFromPageData = false;
    this.onLogoClick = this.onLogoClick.bind(this);
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

  DEFAULT_MENU_ITEM = 'home';

  handleItemClick = (event, { name }) => {
    this.setState({ activeItem: name });
  };

  onLogoClick() {
    const {headerActions} = this.props;
    const path = '/';
    this.context.router.push(path);
    headerActions.setActiveItem('home');
  }

  createMenuItem = (menuItem, index, activeItem) => {
    let indexType = menuItem.home === true ? IndexLink : Link;
    const menuItemEl = (
      <Menu.Item
        key={index}
        as={indexType}
        to={menuItem.to}
        name={menuItem.name}
        active={activeItem === menuItem.name}
        onClick={this.handleItemClick} >
        {menuItem.text}
      </Menu.Item>
    );
    return menuItemEl;
  };

  render() {
    const {pageData} = this.props;
    let { activeItem } = this.state;
    if (this.useActiveItemFromPageData && pageData.activeItem) {
      activeItem = pageData.activeItem;
      this.useActiveItemFromPageData = false;
    }
    if (activeItem === null) {
      activeItem = this.context.router.getCurrentLocation().pathname;
      activeItem = activeItem.substring(1, activeItem.length);
    }
    activeItem = activeItem ? activeItem : this.DEFAULT_MENU_ITEM;

    return (
      <Container style={commonStyles.size(null, 454)} >
        <Menu size="large" inverted pointing secondary >
          <Image
            src={logo}
            width="50"
            height="50"
            style={{cursor: 'pointer'}}
            onClick={this.onLogoClick} />
          <Menu.Menu position="right">
            {
              pageData.menuItems.map( (menuItem, index) => this.createMenuItem(menuItem, index, activeItem))
            }
          </Menu.Menu>
        </Menu>
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

