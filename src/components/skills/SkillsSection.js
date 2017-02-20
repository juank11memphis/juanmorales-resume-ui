import React from 'react';
import { Container } from 'semantic-ui-react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as skillsActions from './skillsActions';

class SkillsSection extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <Container >
        Skills section is gonna be here very very very very soon
      </Container>
    );
  }

}

SkillsSection.propTypes = {
  skills: React.PropTypes.object.isRequired,
  actions: React.PropTypes.object.isRequired
};

function mapStateToProps(reduxState){
  return {
    skills: reduxState.skills
  };
}

function mapDispatchToProps(dispatch){
  return {
    skillsActions: bindActionCreators(skillsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SkillsSection);
