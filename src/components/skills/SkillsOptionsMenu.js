import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

class SkillsOptionsMenu extends Component {

  constructor(props, context){
    super(props, context);
    this.state = { activeItem: null };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.options !== nextProps.options) {
      this.setState({ activeItem: null });
    }
  }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name });
  }

  createMenuItem = (optionItem, index, activeItem) => {
    const menuItemEl = (
      <Menu.Item
        key={index}
        name={optionItem.value}
        active={activeItem === optionItem.value}
        onClick={this.handleItemClick} >
        {optionItem.text}
      </Menu.Item>
    );
    return menuItemEl;
  };

  render() {
    const {options} = this.props;
    let { activeItem } = this.state;
    activeItem = activeItem ? activeItem : (options.length > 0 ? options[0].value : null );

    return (
      <Menu compact >
        {
          options && options.map( (optionItem, index) => this.createMenuItem(optionItem, index, activeItem))
        }
      </Menu>
    );
  }
}

SkillsOptionsMenu.propTypes = {
  options: React.PropTypes.array.isRequired
};

export default SkillsOptionsMenu;
