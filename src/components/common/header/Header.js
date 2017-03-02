import React, {Component} from 'react';
import { IndexLink, Link } from 'react-router';
import { Menu, Container, Image, Header } from 'semantic-ui-react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Radium from 'radium';

import logo from '../../../styles/logo.png';
import * as headerActions from './headerActions';
import {styles} from './headerStyles';

@Radium
class AppHeader extends Component {

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
    const {headerPageData} = this.props;
    let { activeItem } = this.state;
    if (activeItem === null) {
      activeItem = this.context.router.getCurrentLocation().pathname;
      activeItem = activeItem.substring(1, activeItem.length);
    }
    activeItem = activeItem ? activeItem : this.DEFAULT_MENU_ITEM;

    return (
      <Container style={styles.mainContainer} >
        <Menu size="large" inverted pointing secondary >
          <Image src={logo} width="50" height="50" />
          <Menu.Menu position="right">
            {
              headerPageData.menuItems.map( (menuItem, index) => this.createMenuItem(menuItem, index, activeItem))
            }
          </Menu.Menu>
        </Menu>
        <div className="ui middle aligned grid" style={styles.textContainer} >
          <div className="eight column wide">
            <Header as="h1" inverted >{headerPageData.title}</Header>
            <Header as="h3" inverted >{headerPageData.subtitle}</Header>
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
  headerPageData: React.PropTypes.object.isRequired,
  headerActions: React.PropTypes.object.isRequired
};

function mapStateToProps(reduxState){
  return {
    headerPageData: reduxState.header.pageData
  };
}

function mapDispatchToProps(dispatch){
  return {
    headerActions: bindActionCreators(headerActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);

