import React from 'react';
import { Container, Header, Item, Grid, Label, Icon, Segment } from 'semantic-ui-react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {projectsActions} from '../projects';
import commonStyles from '../common/styles';

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

  getYearsText(from, to) {
    if (from === to) {
      return from;
    }
    return from + ' to ' + to;
  }

  getHeader(as, text, bold) {
    bold = bold ? bold : false;
    const boldValue = bold ? 'bold' : 'normal';
    return (
      <Header
        style={{fontWeight: boldValue}}
        as={as} >
        {text}
      </Header>
    );
  }

  getLink(link) {
    return (
      <a href={link} target="_blank" >{link}</a>
    );
  }

  getProjectDetailGridRow(text, value, isLink) {
    return (
      <Grid.Row style={commonStyles.padding(0, 0, 6, 0)} >
        <Grid.Column width={2} style={commonStyles.paddingAll(0)} >
          {this.getHeader('h3', text, true)}
        </Grid.Column>
        <Grid.Column width={14}>
          {isLink && this.getLink(value)}
          {!isLink && this.getHeader('h3', value)}
        </Grid.Column>
      </Grid.Row>
    );
  }

  getBiggestAccomplishments(accomplishments) {
    return (
      <div>
        {
          accomplishments && accomplishments.map((accomplishment, index) => (
            <Header key={index} size="medium" style={{fontWeight: 'normal'}} >
              <Icon name="arrow right"/>
              {accomplishment}
            </Header>
          ))
        }
      </div>
    );
  }

  getTechnologies(technologies) {
    return (
      <Item.Extra>
        {technologies && technologies.map((technology, index) => (
          <Label
            key={index}
            size="large"
            style={commonStyles.margin(0, 5, 0, 0)}
            color="teal" >
            {technology}
          </Label>
        ))}
      </Item.Extra>
    );
  }

  createProjectItem(projectItem, index) {

    return (
      <Item key={index} >
        <Item.Content style={{textAlign: 'left'}} >
          <Item.Header>
            {this.getHeader('h2', projectItem.name, true)}
          </Item.Header>
          <Item.Meta>
            {this.getYearsText(projectItem.from, projectItem.to)}
          </Item.Meta>
          <Item.Description>
            <Grid style={commonStyles.margin(10, 0, 10, 0)} >
              {this.getProjectDetailGridRow('Description', projectItem.description)}
              {projectItem.country && this.getProjectDetailGridRow('Country', projectItem.country)}
              {projectItem.client && this.getProjectDetailGridRow('Client', projectItem.client)}
              {projectItem.teamSize && this.getProjectDetailGridRow('Team Size', projectItem.teamSize)}
              {projectItem.link && this.getProjectDetailGridRow('Link', projectItem.link, true)}
            </Grid>
          </Item.Description>
          <Item.Description>
            {projectItem.accomplishments && this.getHeader('h3', 'Biggest Accomplishments', true)}
            {this.getBiggestAccomplishments(projectItem.accomplishments)}
          </Item.Description>
          {this.getTechnologies(projectItem.technologies)}
        </Item.Content>
      </Item>
    );
  }

  createProjectGroup(projectGroupItem, index) {
    return (
      <Container key={index} style={commonStyles.margin(40)} >
        <Segment inverted style={{backgroundColor: commonStyles.BLUE}} >
          <Header
            inverted
            textAlign="left"
            as="h1" >
            Role: {projectGroupItem.groupName}
          </Header>
        </Segment>
        <Item.Group divided>
          {
            projectGroupItem.projects.map((projectItem, index) => this.createProjectItem(projectItem, index))
          }
        </Item.Group>
      </Container>
    );
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
          data && data.map((projectGroupItem, index) => this.createProjectGroup(projectGroupItem, index))
        }
      </Container>
    );
  }

}

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
