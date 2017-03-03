import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

class SkillsOptionsMenu extends Component {

  constructor(props, context){
    super(props, context);
    if (this.props.options.length > 0) {
      this.state = { activeItem: this.props.options[0].value };
    } else {
      this.state = { activeItem: null };
    }
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.options !== nextProps.options) {
      const activeItem = nextProps.options.length > 0 ? nextProps.options[0].value : null;
      this.setState({ activeItem: activeItem });
    }
  }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name });
    this.props.onChange(name);
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
  options: React.PropTypes.array.isRequired,
  onChange: React.PropTypes.func.isRequired
};

export default SkillsOptionsMenu;
