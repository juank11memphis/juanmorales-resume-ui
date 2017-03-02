import React from 'react';
import { Container, Header, Dropdown } from 'semantic-ui-react';

import {styles} from './skillsSectionStyles';
import SkillsOptionsMenu from './SkillsOptionsMenu';
import SkillsList from './SkillsList';

class SkillsSection extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {};
    this.onSkillsByChange = this.onSkillsByChange.bind(this);
    this.onSkillsOptionsMenuChange = this.onSkillsOptionsMenuChange.bind(this);
    this.getFilteredSkillsList = this.getFilteredSkillsList.bind(this);
  }

  onSkillsByChange(event, data) {
    this.setState({
      selectedSkillsBy: data.value,
      selectedSkillMenuOption: null
    });
  }

  onSkillsOptionsMenuChange(skillMenuOption) {
    this.setState({
      selectedSkillMenuOption: skillMenuOption
    });
  }

  getFilteredSkillsList() {
    const {pageData, data} = this.props.skills;
    const {skillsByDefaultValue} = pageData;
    let {selectedSkillsBy, selectedSkillMenuOption} = this.state;
    const skillsBy = selectedSkillsBy ? selectedSkillsBy : skillsByDefaultValue;
    const options = data.options[skillsBy];
    if (!skillsBy || !options) {
      return [];
    }
    if (!selectedSkillMenuOption) {
      selectedSkillMenuOption = options[0].value;
    }
    let filteredItems = data.items.filter( item => {
      const filterPropValue = item[skillsBy];
      return filterPropValue === selectedSkillMenuOption;
    });
    return filteredItems.sort( (item, nextItem) => nextItem.expertiseValue - item.expertiseValue);
  }

  render(){
    const {pageData, data} = this.props.skills;
    const {selectedSkillsBy} = this.state;
    let options = selectedSkillsBy ? data.options[selectedSkillsBy] : data.options[pageData.skillsByDefaultValue];
    options = options ? options : [];

    return (
      <Container style={styles.containerWithMarginTop} >
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
        <Container textAlign="center" style={styles.containerWithMarginTop} >
          <SkillsOptionsMenu options={options} onChange={this.onSkillsOptionsMenuChange} />
          <SkillsList items={this.getFilteredSkillsList()} />
        </Container>
      </Container>
    );
  }

}

SkillsSection.propTypes = {
  skills: React.PropTypes.object.isRequired
};

export default SkillsSection;
