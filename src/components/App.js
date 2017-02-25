import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

import { Header } from './common/header';

class App extends Component {
  render() {
    return (
      <Segment className="main-container" inverted vertical textAlign="center" >
        <Header />
        {this.props.children}
      </Segment>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.object.isRequired
};

export default App;
