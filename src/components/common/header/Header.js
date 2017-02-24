import React, {Component} from 'react';
import { IndexLink } from 'react-router';
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
  }

  render() {
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
            <Menu.Item
              as={IndexLink}
              to="/"
              name="home"
              active={activeItem === 'home'}
              onClick={this.handleItemClick} >
              Home
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Container>
    );
  }
}

Header.contextTypes = {
  router: React.PropTypes.object.isRequired
};

Header.propTypes = {
  header: React.PropTypes.object.isRequired,
  headerActions: React.PropTypes.object.isRequired
};

function mapStateToProps(reduxState){
  return {
    header: reduxState.header
  };
}

function mapDispatchToProps(dispatch){
  return {
    headerActions: bindActionCreators(headerActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

