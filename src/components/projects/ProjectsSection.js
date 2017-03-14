import React from 'react';
import { Container, Header, Card } from 'semantic-ui-react';

import commonStyles from '../common/styles';
import ProjectCard from './ProjectCard';

const ProjectsSection = (props) => {

  const {pageData, data, onViewMore} = props;

  return (
    <Container style={commonStyles.margin(20)} >
      <Header
        as="h1"
        textAlign="center" >
        {pageData.title}
      </Header>
      <Card.Group>
        {
          data && data.map( (item, index) => <ProjectCard key={index} item={item} onClick={onViewMore} />)
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

};

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
