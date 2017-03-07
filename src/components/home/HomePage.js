import React from 'react';
import { Container } from 'semantic-ui-react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {homeActions} from '../home';
import {skillsActions, SkillsSection} from '../skills';
import {experienceActions, ExperienceSection} from '../experience';

class HomePage extends React.Component {

  componentWillMount() {
    this.loadPageData();
    this.loadSkillsData();
    this.loadExperienceData();
  }

  loadPageData() {
    const {homeActions} = this.props;
    homeActions.loadHomePageData();
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
    const {skillsData, experienceData, pageData} = this.props;
    return (
      <Container>
        <SkillsSection data={skillsData} pageData={pageData.skills} />
        <ExperienceSection data={experienceData} pageData={pageData.experience} />
      </Container>
    );
  }

}

HomePage.propTypes = {
  homeActions: React.PropTypes.object.isRequired,
  pageData: React.PropTypes.object.isRequired,
  skillsData: React.PropTypes.object.isRequired,
  skillsActions: React.PropTypes.object.isRequired,
  experienceData: React.PropTypes.array.isRequired,
  experienceActions: React.PropTypes.object.isRequired
};

function mapStateToProps(reduxState){
  return {
    pageData: reduxState.home.pageData,
    skillsData: reduxState.skills.data,
    experienceData: reduxState.experience.data
  };
}

function mapDispatchToProps(dispatch){
  return {
    homeActions: bindActionCreators(homeActions,dispatch),
    skillsActions: bindActionCreators(skillsActions, dispatch),
    experienceActions: bindActionCreators(experienceActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
