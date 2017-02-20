import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

// import { Header } from './common';

class App extends Component {
  render() {

    /*
    <Segment inverted vertical textAlign="center" >
      <Header />
      {this.props.children}
    </Segment>
    */

    return (
      <Segment inverted vertical textAlign="center" >
        <div >hello</div>
      </Segment>
    );
  }
}

// App.propTypes = {
//   children: React.PropTypes.object.isRequired
// };

export default App;
