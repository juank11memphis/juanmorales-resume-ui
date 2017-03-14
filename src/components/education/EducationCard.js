import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

import commonStyles from '../common/styles';

const EducationCard = (props) => {

  const {item} = props;

  const createQualificationLabel = (qualification, index) => {
    return (
      <Card.Description
        style={commonStyles.margin(0,0,5,0)}
        key={index} >
        <Icon name="arrow right" />{qualification}
      </Card.Description>
    );
  };

  return (
    <Card centered >
      <Card.Content style={commonStyles.minMaxHeight(70, 70)} >
        <Card.Header>{item.institution}</Card.Header>
        {item.country && <Card.Meta>{item.country}</Card.Meta>}
      </Card.Content>
      <Card.Content>
        {
          item.qualifications.map( (qualificationItem, index) => createQualificationLabel(qualificationItem, index) )
        }
      </Card.Content>
    </Card>
  );

};

EducationCard.propTypes = {
  item: React.PropTypes.object.isRequired
};

export default EducationCard;
