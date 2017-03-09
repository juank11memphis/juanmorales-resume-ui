import React, { Component } from 'react';
import { Segment, Container } from 'semantic-ui-react';
import Alert from 'react-s-alert';

import { Header } from './common/header';
import {Footer} from './common/footer';

import commonStyles from './common/styles';

class App extends Component {

  render() {
    const footerContainerStyles = Object.assign(
      {},
      commonStyles.margin(40, 0, 0, 0),
      { backgroundColor: commonStyles.DEEP_BLUE }
    );
    return (
      <div className="main-container" >
        <Segment
          style={{ backgroundColor: commonStyles.DEEP_BLUE }}
          inverted
          vertical
          textAlign="center" >
          <Header />
        </Segment>
        <Container>
          {this.props.children}
        </Container>
        <Segment
          style={footerContainerStyles}
          inverted
          vertical
          textAlign="center" >
          <Footer />
        </Segment>
        <Alert stack={{limit: 3}} />
      </div>
    );
  }

}

App.propTypes = {
  children: React.PropTypes.object.isRequired
};

export default App;
