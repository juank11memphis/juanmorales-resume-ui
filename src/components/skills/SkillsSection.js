import React from 'react';
import { Container, Header, Dropdown } from 'semantic-ui-react';

import {styles} from './skillsSectionStyles';
import SkillsOptionsMenu from './SkillsOptionsMenu';

class SkillsSection extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {};
    this.onSkillsByChange = this.onSkillsByChange.bind(this);
  }

  onSkillsByChange(event, data) {
    this.setState({
      selectedSkillsBy: data.value
    });
  }

  render(){
    const {pageData, data} = this.props.skills;
    const {selectedSkillsBy} = this.state;
    let options = selectedSkillsBy ? data.options[selectedSkillsBy] : data.options[pageData.skillsByDefaultValue];
    options = options ? options : [];

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
            defaultValue={pageData.skillsByDefaultValue}
            onChange={this.onSkillsByChange} />
        </Container>
        <Container textAlign="center" style={styles.optionsContainer} >
          <SkillsOptionsMenu options={options} />
        </Container>
      </Container>
    );
  }

}

SkillsSection.propTypes = {
  skills: React.PropTypes.object.isRequired
};

export default SkillsSection;
