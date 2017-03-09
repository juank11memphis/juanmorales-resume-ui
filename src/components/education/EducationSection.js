import React from 'react';
import { Container, Header, Card, Icon } from 'semantic-ui-react';

import commonStyles from '../common/styles';

class EducationSection extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  createQualificationLabel(qualification, index) {
    return (
      <Card.Description
        style={commonStyles.margin(0,0,5,0)}
        key={index} >
        <Icon name="arrow right" />{qualification}
      </Card.Description>
    );
  }

  createEducationCard(educationItem, index) {
    return (
      <Card key={index} centered >
        <Card.Content style={commonStyles.minMaxHeight(70, 70)} >
          <Card.Header>{educationItem.institution}</Card.Header>
          {educationItem.country && <Card.Meta>{educationItem.country}</Card.Meta>}
        </Card.Content>
        <Card.Content>
          {
            educationItem.qualifications.map( (techItem, index) => this.createQualificationLabel(techItem, index) )
          }
        </Card.Content>
      </Card>
    );
  }

  render(){
    const {pageData, data} = this.props;
    return (
      <Container id="education" style={commonStyles.margin(20)} >
        <Header
          as="h1"
          textAlign="center" >
          {pageData.title}
        </Header>
        <Card.Group>
          {
            data && data.map( (educationItem, index) => this.createEducationCard(educationItem, index))
          }
        </Card.Group>
      </Container>
    );
  }

}

EducationSection.defaultProps = {
  pageData: {},
  data: []
};

EducationSection.propTypes = {
  pageData: React.PropTypes.object.isRequired,
  data: React.PropTypes.array.isRequired
};

export default EducationSection;
