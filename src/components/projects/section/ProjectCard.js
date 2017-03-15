import React from 'react';
import { Card, Label } from 'semantic-ui-react';

import commonStyles from '../../common/styles';

const ProjectCard = (props) => {

  const {item, onClick} = props;

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
    <Card link onClick={onClick} centered >
      <Card.Content style={commonStyles.minMaxHeight(70, 70)} >
        <Card.Header>{item.name}</Card.Header>
        <Card.Meta>Role: {item.role}</Card.Meta>
      </Card.Content>
      <Card.Content>
        <Card.Description>{item.description}</Card.Description>
        <br />
        {
          item.technologies.map( (techItem, index) => createTechnologyLabel(techItem, index) )
        }
      </Card.Content>
    </Card>
  );

};

ProjectCard.propTypes = {
  item: React.PropTypes.object.isRequired,
  onClick: React.PropTypes.func.isRequired
};

export default ProjectCard;
