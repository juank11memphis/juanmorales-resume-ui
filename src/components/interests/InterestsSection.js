import React from 'react';
import { Container, Header } from 'semantic-ui-react';

import commonStyles from '../common/styles';
import InterestItem from './InterestItem';

const InterestsSection = (props) => {

  const {pageData, data} = props;

  return (
    <Container style={commonStyles.margin(20)} >
      <Header
        as="h1"
        textAlign="center" >
        {pageData.title}
      </Header>
      <Container textAlign="center" style={commonStyles.margin(30, 0, 0, 0)} >
          {
            data && data.map( (item, index) => <InterestItem key={index} item={item} />)
          }
      </Container>
    </Container>
  );

};

InterestsSection.defaultProps = {
  pageData: {},
  data: []
};

InterestsSection.propTypes = {
  pageData: React.PropTypes.object.isRequired,
  data: React.PropTypes.array.isRequired
};

export default InterestsSection;
