import React from 'react';
import { Menu } from 'semantic-ui-react';

const ExperienceMenu = (props) => {

  const {items, activeItem, onClick} = props;

  const createMenuItem = (item, index) => {
    const yearsText = item.years > 1 ? ' years' : ' year';
    const menuItemEl = (
      <Menu.Item
        key={index}
        active={activeItem.id === item.id}
        onClick={() => onClick(item)} >
        {item.companyName + '\n' + item.years + yearsText}
      </Menu.Item>
    );
    return menuItemEl;
  };

  return (
    <Menu fluid vertical tabular>
      {
        items && items.map( (item, index) => createMenuItem(item, index))
      }
    </Menu>
  );

};

ExperienceMenu.propTypes = {
  items: React.PropTypes.array.isRequired,
  activeItem: React.PropTypes.object,
  onClick: React.PropTypes.func.isRequired
};

export default ExperienceMenu;
