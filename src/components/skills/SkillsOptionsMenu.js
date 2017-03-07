import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

class SkillsOptionsMenu extends Component {

  constructor(props, context){
    super(props, context);
    this.state = {
      activeItem: null
    };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.options !== nextProps.options) {
      this.setState({activeItem: null});
    }
  }

  handleItemClick(optionItem) {
    this.setState({ activeItem: optionItem });
    this.props.onChange(optionItem.value);
  }

  createMenuItem = (optionItem, index, activeItem) => {
    const menuItemEl = (
      <Menu.Item
        key={index}
        active={activeItem === optionItem}
        onClick={() => this.handleItemClick(optionItem)} >
        {optionItem.text}
      </Menu.Item>
    );
    return menuItemEl;
  };

  getActiveItem() {
    const {activeItem} = this.state;
    return activeItem ? activeItem : this.getFirstItem();
  }

  getFirstItem() {
    const {options} = this.props;
    return (options && options.length > 0) ? options[0] : null;
  }

  render() {
    const {options} = this.props;
    let activeItem = this.getActiveItem();

    return (
      <Menu compact >
        {
          options && options.map( (optionItem, index) => this.createMenuItem(optionItem, index, activeItem))
        }
      </Menu>
    );
  }
}

SkillsOptionsMenu.defaultProps = {
  options: null
};

SkillsOptionsMenu.propTypes = {
  options: React.PropTypes.array.isRequired,
  onChange: React.PropTypes.func.isRequired
};

export default SkillsOptionsMenu;
