import React from 'react';
import { Container } from 'semantic-ui-react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {headerActions} from '../common/header';
import {homeActions} from '../home';
import {skillsActions, SkillsSection} from '../skills';
import {experienceActions, ExperienceSection} from '../experience';
import {ProjectsSection} from '../projects';

class HomePage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.onViewMore = this.onViewMore.bind(this);
  }

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

  onViewMore() {
    const {headerActions} = this.props;
    const path = 'projects';
    this.context.router.push(path);
    headerActions.setActiveItem(path);
  }

  render() {
    const {skillsData, experienceData, pageData} = this.props;
    return (
      <Container>
        <SkillsSection data={skillsData} pageData={pageData.skills} />
        <ExperienceSection data={experienceData} pageData={pageData.experience} />
        <ProjectsSection data={[]} pageData={pageData.projects} onViewMore={this.onViewMore} />
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
    headerActions: bindActionCreators(headerActions, dispatch),
    homeActions: bindActionCreators(homeActions,dispatch),
    skillsActions: bindActionCreators(skillsActions, dispatch),
    experienceActions: bindActionCreators(experienceActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
