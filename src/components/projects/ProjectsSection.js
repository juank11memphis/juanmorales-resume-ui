import React from 'react';
import { Container, Header } from 'semantic-ui-react';

import commonStyles from '../common/styles';

class ProjectsSection extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render(){
    const {pageData, onViewMore} = this.props;
    return (
      <Container style={commonStyles.margin(20)} >
        <Header
          as="h1"
          textAlign="center" >
          {pageData.title}
        </Header>
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
