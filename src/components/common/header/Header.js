import React, {Component} from 'react';
import { IndexLink, Link } from 'react-router';
import { Menu, Container, Image } from 'semantic-ui-react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import logo from '../../../styles/logo.png';
import * as headerActions from './headerActions';

class Header extends Component {

  state = {
    activeItem: null
  };

  componentWillMount() {
    const {loadHeaderData} = this.props.headerActions;
    loadHeaderData();
  }

  DEFAULT_MENU_ITEM = 'home';

  handleItemClick = (event, { name }) => {
    this.setState({ activeItem: name });
  };

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
    const {headerData} = this.props;
    let { activeItem } = this.state;
    if (activeItem === null) {
      activeItem = this.context.router.getCurrentLocation().pathname;
      activeItem = activeItem.substring(1, activeItem.length);
    }
    activeItem = activeItem ? activeItem : this.DEFAULT_MENU_ITEM;

    return (
      <Container>
        <Menu size="large" inverted pointing secondary >
          <Image src={logo} width="50" height="50" />
          <Menu.Menu position="right">
            {
              headerData.menuItems.map( (menuItem, index) => this.createMenuItem(menuItem, index, activeItem))
            }
          </Menu.Menu>
        </Menu>
        {headerData.title}
        {headerData.subtitle}
      </Container>
    );
  }
}

Header.contextTypes = {
  router: React.PropTypes.object.isRequired
};

Header.propTypes = {
  headerData: React.PropTypes.object.isRequired,
  headerActions: React.PropTypes.object.isRequired
};

function mapStateToProps(reduxState){
  return {
    headerData: reduxState.header
  };
}

function mapDispatchToProps(dispatch){
  return {
    headerActions: bindActionCreators(headerActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

