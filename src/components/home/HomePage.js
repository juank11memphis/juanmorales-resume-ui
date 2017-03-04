import React from 'react';
import { Container } from 'semantic-ui-react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {skillsActions, SkillsSection} from '../skills';
import {experienceActions, ExperienceSection} from '../experience';

class HomePage extends React.Component {

  componentWillMount() {
    this.loadSkillsData();
    this.loadExperienceData();
  }

  loadSkillsData() {
    const {skillsActions} = this.props;
    skillsActions.loadSkillsData();
  }

  loadExperienceData() {
    const {experienceActions} = this.props;
    experienceActions.loadExperienceData();
  }

  render() {
    const {skills, experience} = this.props;
    return (
      <Container>
        <SkillsSection skills={skills} />
        <ExperienceSection experience={experience} />
      </Container>
    );
  }

}

HomePage.propTypes = {
  skills: React.PropTypes.object.isRequired,
  skillsActions: React.PropTypes.object.isRequired,
  experience: React.PropTypes.object.isRequired,
  experienceActions: React.PropTypes.object.isRequired
};

function mapStateToProps(reduxState){
  return {
    skills: reduxState.skills,
    experience: reduxState.experience
  };
}

function mapDispatchToProps(dispatch){
  return {
    skillsActions: bindActionCreators(skillsActions, dispatch),
    experienceActions: bindActionCreators(experienceActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
