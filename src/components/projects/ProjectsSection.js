import React from 'react';
import { Container, Header, Card, Label } from 'semantic-ui-react';

import commonStyles from '../common/styles';

class ProjectsSection extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  createProjectCard(projectItem, index) {
    const {onViewMore} = this.props;

    const createTechnologyLabel = (techItem, index) => {
      return (
        <Label
          key={index}
          style={commonStyles.margin(0, 5, 5, 0)}
          color="teal" >
          {techItem}
        </Label>
      );
    };

    return (
      <Card key={index} link onClick={onViewMore} centered >
        <Card.Content style={commonStyles.minMaxHeight(70, 70)} >
          <Card.Header>{projectItem.name}</Card.Header>
          <Card.Meta>Role: {projectItem.role}</Card.Meta>
        </Card.Content>
        <Card.Content>
          <Card.Description>{projectItem.description}</Card.Description>
          <br />
          {
            projectItem.technologies.map( (techItem, index) => createTechnologyLabel(techItem, index) )
          }
        </Card.Content>
      </Card>
    );
  }

  render(){
    const {pageData, data, onViewMore} = this.props;
    return (
      <Container style={commonStyles.margin(20)} >
        <Header
          as="h1"
          textAlign="center" >
          {pageData.title}
        </Header>
        <Card.Group>
          {
            data && data.map( (projectItem, index) => this.createProjectCard(projectItem, index))
          }
        </Card.Group>
        <Header
          as="h3"
          textAlign="center"
          style={commonStyles.link}
          onClick={onViewMore} >
          {pageData.viewMoreText}
        </Header>
      </Container>
    );
  }

}

ProjectsSection.contextTypes = {
  router: React.PropTypes.object.isRequired
};

ProjectsSection.defaultProps = {
  pageData: {},
  data: []
};

ProjectsSection.propTypes = {
  pageData: React.PropTypes.object.isRequired,
  data: React.PropTypes.array.isRequired,
  onViewMore: React.PropTypes.func.isRequired
};

export default ProjectsSection;
