import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {projectsActions} from '../../projects';
import commonStyles from '../../common/styles';
import ProjectsGroup from './ProjectsGroup';

class ProjectsPage extends React.Component {

  componentWillMount() {
    this.loadPageData();
    this.loadData();
    window.scrollTo(0, 0);
  }

  loadPageData() {
    const {projectsActions} = this.props;
    projectsActions.loadProjectsPageData();
  }

  loadData() {
    const {projectsActions} = this.props;
    projectsActions.loadProjectsData();
  }

  render() {
    const {pageData, data} = this.props;
    return (
      <Container style={commonStyles.margin(20)} textAlign="center" >
        <Header
          as="h1"
          textAlign="center" >
          {pageData.title}
        </Header>
        {
          data.map((groupItem, index) => <ProjectsGroup key={index} groupItem={groupItem} />)
        }
      </Container>
    );
  }

}

ProjectsPage.defaultProps = {
  pageData: {},
  data: []
};

ProjectsPage.propTypes = {
  projectsActions: React.PropTypes.object.isRequired,
  pageData: React.PropTypes.object.isRequired,
  data: React.PropTypes.array.isRequired,
};

function mapStateToProps(reduxState){
  return {
    pageData: reduxState.projects.pageData,
    data: reduxState.projects.data
  };
}

function mapDispatchToProps(dispatch){
  return {
    projectsActions: bindActionCreators(projectsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsPage);
