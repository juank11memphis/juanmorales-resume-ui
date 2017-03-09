import React from 'react';
import { Container } from 'semantic-ui-react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {headerActions} from '../common/header';
import {homeActions} from '../home';
import {skillsActions, SkillsSection} from '../skills';
import {experienceActions, ExperienceSection} from '../experience';
import {ProjectsSection, projectsActions} from '../projects';
import {EducationSection, educationActions} from '../education';
import {InterestsSection, interestsActions} from '../interests';

class HomePage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.onViewMore = this.onViewMore.bind(this);
  }

  componentWillMount() {
    this.loadPageData();
    this.loadSkillsData();
    this.loadExperienceData();
    this.loadProjectsData();
    this.loadEducationData();
    this.loadInterestsData();
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

  loadProjectsData() {
    const {projectsActions} = this.props;
    projectsActions.loadFeaturedProjectsData();
  }

  loadEducationData() {
    const {educationActions} = this.props;
    educationActions.loadEducationData();
  }

  loadInterestsData() {
    const {interestsActions} = this.props;
    interestsActions.loadInterestsData();
  }

  onViewMore() {
    const {headerActions} = this.props;
    const path = 'projects';
    this.context.router.push(path);
    headerActions.setActiveItem(path);
  }

  render() {
    const {
      skillsData,
      experienceData,
      pageData,
      featuredProjectsData,
      educationData,
      interestsData
    } = this.props;
    return (
      <Container>
        <SkillsSection data={skillsData} pageData={pageData.skills} />
        <ExperienceSection data={experienceData} pageData={pageData.experience} />
        <ProjectsSection data={featuredProjectsData} pageData={pageData.projects} onViewMore={this.onViewMore} />
        <EducationSection data={educationData} pageData={pageData.education} />
        <InterestsSection pageData={pageData.interests} data={interestsData} />
      </Container>
    );
  }

}

HomePage.contextTypes = {
  router: React.PropTypes.object.isRequired
};

HomePage.propTypes = {
  headerActions: React.PropTypes.object.isRequired,
  homeActions: React.PropTypes.object.isRequired,
  pageData: React.PropTypes.object.isRequired,
  skillsData: React.PropTypes.object.isRequired,
  skillsActions: React.PropTypes.object.isRequired,
  experienceData: React.PropTypes.array.isRequired,
  experienceActions: React.PropTypes.object.isRequired,
  featuredProjectsData: React.PropTypes.array.isRequired,
  projectsActions: React.PropTypes.object.isRequired,
  educationActions: React.PropTypes.object.isRequired,
  educationData: React.PropTypes.array.isRequired,
  interestsActions: React.PropTypes.object.isRequired,
  interestsData: React.PropTypes.array.isRequired
};

function mapStateToProps(reduxState){
  return {
    pageData: reduxState.home.pageData,
    skillsData: reduxState.skills.data,
    experienceData: reduxState.experience.data,
    featuredProjectsData: reduxState.projects.featured,
    educationData: reduxState.education.data,
    interestsData: reduxState.interests.data
  };
}

function mapDispatchToProps(dispatch){
  return {
    headerActions: bindActionCreators(headerActions, dispatch),
    homeActions: bindActionCreators(homeActions,dispatch),
    skillsActions: bindActionCreators(skillsActions, dispatch),
    experienceActions: bindActionCreators(experienceActions, dispatch),
    projectsActions: bindActionCreators(projectsActions, dispatch),
    educationActions: bindActionCreators(educationActions, dispatch),
    interestsActions: bindActionCreators(interestsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
