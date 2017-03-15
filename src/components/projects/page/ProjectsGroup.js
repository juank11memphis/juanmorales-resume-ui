import React from 'react';
import { Container, Segment, Header, Item } from 'semantic-ui-react';

import commonStyles from '../../common/styles';
import ProjectItem from './ProjectItem';

const ProjectsGroup = (props) => {

  const {groupItem} = props;

  return (
    <Container style={commonStyles.margin(40)} >
      <Segment inverted style={{backgroundColor: commonStyles.BLUE}} >
        <Header
          inverted
          textAlign="left"
          as="h1" >
          Role: {groupItem.groupName}
        </Header>
      </Segment>
      <Item.Group divided>
        {
          groupItem.projects.map((item, index) => <ProjectItem key={index} item={item} />)
        }
      </Item.Group>
    </Container>
  );

};

ProjectsGroup.propTypes = {
  groupItem: React.PropTypes.object.isRequired
};

export default ProjectsGroup;
