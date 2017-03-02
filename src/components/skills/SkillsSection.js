import React from 'react';
import { Container, Header, Dropdown } from 'semantic-ui-react';

import {styles} from './skillsSectionStyles';

const SkillsSection = (props) => {

  const {pageData} = props.skills;

  return (
    <Container style={styles.mainContainer} >
      <Header as="h1" textAlign="center" >{pageData.title}</Header>
      <Container textAlign="center" >
        <Header
          as="h2"
          textAlign="center"
          style={styles.inlineBlockElement} >
          {pageData.sortByText}
        </Header>
        <Dropdown
          selection
          options={pageData.skillsByOptions}
          style={styles.inlineBlockElement}
          defaultValue={pageData.skillsByDefaultValue} />
      </Container>
    </Container>
  );

};

SkillsSection.propTypes = {
  skills: React.PropTypes.object.isRequired
};

export default SkillsSection;
