import React, { Component } from 'react';
import { Segment, Container } from 'semantic-ui-react';

import { Header } from './common/header';

class App extends Component {
  render() {
    return (
      <div className="main-container" >
        <Segment inverted vertical textAlign="center" >
          <Header />
        </Segment>
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.object.isRequired
};

export default App;
