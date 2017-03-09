import React from 'react';
import { Container, Header, Image } from 'semantic-ui-react';

import commonStyles from '../common/styles';

class InterestsSection extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  createInterestItemColumn(interestItem, index) {
    const imageContainerStyle = Object.assign({}, commonStyles.inlineBlockElement, { marginRight: '30px' });
    const imageStyle = Object.assign({}, commonStyles.size(60, 'auto'), { margin: '0 auto' });
    return (
      <div key={index} style={imageContainerStyle} >
        <Image src={interestItem.icon} style={imageStyle} />
        {interestItem.name}
      </div>
    );
  }

  render(){
    const {pageData, data} = this.props;
    return (
      <Container style={commonStyles.margin(20)} >
        <Header
          as="h1"
          textAlign="center" >
          {pageData.title}
        </Header>
        <Container textAlign="center" style={commonStyles.margin(30, 0, 0, 0)} >
            {
              data && data.map( (interestItem, index) => this.createInterestItemColumn(interestItem, index))
            }
        </Container>
      </Container>
    );
  }

}

InterestsSection.defaultProps = {
  pageData: {},
  data: []
};

InterestsSection.propTypes = {
  pageData: React.PropTypes.object.isRequired,
  data: React.PropTypes.array.isRequired
};

export default InterestsSection;
