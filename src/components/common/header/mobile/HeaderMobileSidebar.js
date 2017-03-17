import React from 'react';
import { IndexLink, Link } from 'react-router';
import {Header, Segment, Menu, Sidebar} from 'semantic-ui-react';

import commonStyles from '../../../common/styles';

const HeaderMobileSidebarMenu = (props) => {
  const {pageData, isVisible, onMenuItemClick, activeItem} = props;

  const createMenuItem = (menuItem, index) => {
    let indexType = menuItem.home === true ? IndexLink : Link;
    const menuItemEl = (
      <Menu.Item
        key={index}
        as={indexType}
        to={menuItem.to}
        name={menuItem.name}
        active={activeItem === menuItem.name}
        onClick={onMenuItemClick} >
        {menuItem.text}
      </Menu.Item>
    );
    return menuItemEl;
  };

  return (
    <Sidebar.Pushable as={Segment} style={{ background: 'none' }} >
      <Sidebar as={Menu} animation="overlay" width="thin" visible={isVisible} icon="labeled" vertical inverted>
        {
          pageData.menuItems.map( (menuItem, index) => createMenuItem(menuItem, index))
        }
      </Sidebar>
      <Sidebar.Pusher>
        <div className="ui middle aligned grid" style={commonStyles.size(null, 400)} >
          <div className="eight column wide">
            <Header as="h1" inverted >{pageData.title}</Header>
            <Header as="h3" inverted >{pageData.subtitle}</Header>
          </div>
        </div>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};

HeaderMobileSidebarMenu.propTypes = {
  activeItem: React.PropTypes.string.isRequired,
  pageData: React.PropTypes.object.isRequired,
  onMenuItemClick: React.PropTypes.func.isRequired,
  isVisible: React.PropTypes.bool.isRequired
};

export default HeaderMobileSidebarMenu;
