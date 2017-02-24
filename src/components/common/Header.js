import React, {Component} from 'react';
import { IndexLink } from 'react-router';
import { Menu, Container, Image } from 'semantic-ui-react';

import logo from '../../styles/logo.png';

class Header extends Component {

  state = {
    activeItem: null
  };

  DEFAULT_MENU_ITEM = 'home';

  handleItemClick = (event, { name }) => this.setState({ activeItem: name });

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

export default Header;
