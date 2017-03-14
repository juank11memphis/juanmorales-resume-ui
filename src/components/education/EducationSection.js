import React from 'react';
import { Container, Header, Card } from 'semantic-ui-react';

import commonStyles from '../common/styles';
import EducationCard from './EducationCard';

const EducationSection = (props) => {

  const {pageData, data} = props;

  return (
    <Container id="education" style={commonStyles.margin(20)} >
      <Header
        as="h1"
        textAlign="center" >
        {pageData.title}
      </Header>
      <Card.Group>
        {
          data && data.map( (item, index) => (<EducationCard key={index} item={item} />) )
        }
      </Card.Group>
    </Container>
  );

};

EducationSection.defaultProps = {
  pageData: {},
  data: []
};

EducationSection.propTypes = {
  pageData: React.PropTypes.object.isRequired,
  data: React.PropTypes.array.isRequired
};

export default EducationSection;
