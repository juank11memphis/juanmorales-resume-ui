import React from 'react';
import ReactDOM from 'react-dom';
import {Input} from 'semantic-ui-react';

class SearchInput extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.doneTyping = this.doneTyping.bind(this);
    this.typingTimer = undefined;
  }

  componentDidMount() {
    const inputDomEl = ReactDOM.findDOMNode(this);
    inputDomEl.addEventListener('keyup', this.onKeyUp);
    inputDomEl.addEventListener('keydown', this.onKeyDown);
  }

  onKeyUp(event) {
    const {interval} = this.props;
    clearTimeout(this.typingTimer);
    this.typingTimer = setTimeout(() => this.doneTyping(event.target.value), interval);
  }

  onKeyDown() {
    clearTimeout(this.typingTimer);
  }

  doneTyping(searchText) {
    const {onSearch} = this.props;
    onSearch(searchText);
  }

  clear() {
    const inputDomEl = ReactDOM.findDOMNode(this);
    inputDomEl.firstChild.value = '';
  }

  render(){
    return (
      <Input
        icon="search"
        placeholder="Search..." />
    );
  }

}

SearchInput.defaultProps = {
  interval: 500
};

SearchInput.propTypes = {
  interval: React.PropTypes.number,
  onSearch: React.PropTypes.func.isRequired
};

export default SearchInput;
