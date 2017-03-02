import React from 'react';
import { Container } from 'semantic-ui-react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {skillsActions, SkillsSection} from '../skills';

class HomePage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.loadSkillsData = this.loadSkillsData.bind(this);
  }

  componentWillMount() {
    this.loadSkillsData();
  }

  loadSkillsData() {
    const {skillsActions} = this.props;
    skillsActions.loadSkillsData();
  }

  render() {
    const {skills} = this.props;
    return (
      <Container>
        <SkillsSection skills={skills} />
      </Container>
    );
  }

}

HomePage.propTypes = {
  skills: React.PropTypes.object.isRequired,
  skillsActions: React.PropTypes.object.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
