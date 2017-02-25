import React from 'react';
import { Container } from 'semantic-ui-react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {skillsActions} from '../skills';

class HomePage extends React.Component {

  componentWillMount() {
    const {skillsActions} = this.props;
    skillsActions.loadSkillsData();
  }

  render() {
    console.log('HomePage -> Render...', this.props.skillsData);
    return (
      <Container>
        Home page is gonna be here very very very soon....
      </Container>
    );
  }

}

HomePage.propTypes = {
  skillsData: React.PropTypes.object.isRequired,
  skillsActions: React.PropTypes.object.isRequired,
};

function mapStateToProps(reduxState){
  return {
    skillsData: reduxState.skills
  };
}

function mapDispatchToProps(dispatch){
  return {
    skillsActions: bindActionCreators(skillsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
