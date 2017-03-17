import React from 'react';
import { IndexLink, Link } from 'react-router';
import { Menu } from 'semantic-ui-react';

import HeaderLogo from '../HeaderLogo';

const HeaderMenu = (props) => {

  const {items, activeItem, onClick, onLogoClick} = props;

  const createMenuItem = (menuItem, index) => {
    let indexType = menuItem.home === true ? IndexLink : Link;
    const menuItemEl = (
      <Menu.Item
        key={index}
        as={indexType}
        to={menuItem.to}
        name={menuItem.name}
        active={activeItem === menuItem.name}
        onClick={onClick} >
        {menuItem.text}
      </Menu.Item>
    );
    return menuItemEl;
  };

  return (
    <Menu size="large" inverted pointing secondary >
      <HeaderLogo onClick={onLogoClick} />
      <Menu.Menu position="right">
        {
          items.map( (menuItem, index) => createMenuItem(menuItem, index))
        }
      </Menu.Menu>
    </Menu>
  );
};

HeaderMenu.propTypes = {
  items: React.PropTypes.array.isRequired,
  activeItem: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired,
  onLogoClick: React.PropTypes.func.isRequired
};

export default HeaderMenu;
