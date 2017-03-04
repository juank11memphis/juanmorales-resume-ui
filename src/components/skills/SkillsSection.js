import React from 'react';
import { Container, Header, Dropdown } from 'semantic-ui-react';

import commonStyles from '../common/styles';
import SkillsOptionsMenu from './SkillsOptionsMenu';
import SkillsList from './SkillsList';
import {SearchInput} from '../common/searchinput';

class SkillsSection extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = { isSearching: false };
    this.onSkillsByChange = this.onSkillsByChange.bind(this);
    this.onSkillsOptionsMenuChange = this.onSkillsOptionsMenuChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  onSkillsByChange(event, data) {
    this.setState({
      selectedSkillsBy: data.value,
      selectedSkillMenuOption: null,
      isSearching: false
    });
    this.refs.inputSearch.clear();
  }

  onSkillsOptionsMenuChange(skillMenuOption) {
    this.setState({
      selectedSkillMenuOption: skillMenuOption
    });
  }

  onSearch(searchText) {
    if (searchText && searchText.length > 0) {
      this.setState({ isSearching: true, searchText });
    } else {
      this.setState({ isSearching: false, selectedSkillMenuOption: null });
    }
  }

  getSkillsByValue() {
    const {pageData} = this.props.skills;
    let {selectedSkillsBy} = this.state;
    const skillsBy = selectedSkillsBy ? selectedSkillsBy : pageData.skillsByDefaultValue;
    return skillsBy;
  }

  getSelectedSkillsMenuOption(menuOptions) {
    let {selectedSkillMenuOption} = this.state;
    if (!selectedSkillMenuOption) {
      return menuOptions[0].value;
    }
    return selectedSkillMenuOption;
  }

  getSkillsList() {
    const {isSearching} = this.state;
    if (isSearching) {
      return this.getSkillsListBySearchText();
    } else {
      return this.getFilteredSkillsList();
    }
  }

  getFilteredSkillsList() {
    const {data} = this.props.skills;
    const skillsBy = this.getSkillsByValue();
    const options = data.options[skillsBy];
    if (!skillsBy || !options) {
      return [];
    }
    const selectedSkillMenuOption = this.getSelectedSkillsMenuOption(options);
    let filteredItems = data.items.filter( item => {
      const filterPropValue = item[skillsBy];
      return filterPropValue === selectedSkillMenuOption;
    });
    return filteredItems.sort( (item, nextItem) => nextItem.expertiseValue - item.expertiseValue);
  }

  getSkillsListBySearchText() {
    const {data} = this.props.skills;
    const {searchText} = this.state;
    return data.items.filter( item => {
      const name = item.name.toLowerCase();
      const search = searchText.toLowerCase();
      return name.search(search) > -1;
    });
  }

  render(){
    const {pageData, data} = this.props.skills;
    const {selectedSkillsBy, isSearching} = this.state;
    let options = selectedSkillsBy ? data.options[selectedSkillsBy] : data.options[pageData.skillsByDefaultValue];
    options = options ? options : [];

    return (
      <Container style={commonStyles.margin(20)} >
        <Container textAlign="center" >
          <Header
            as="h1"
            textAlign="center" >
            {pageData.title}
          </Header>
          <Header
            as="h2"
            style={commonStyles.inlineBlockElement}
            textAlign="center" >
            {pageData.skillsByText}
          </Header>
          <Dropdown
            selection
            options={pageData.skillsByOptions}
            style={commonStyles.inlineBlockElement}
            defaultValue={pageData.skillsByDefaultValue}
            onChange={this.onSkillsByChange} />
          <SearchInput
            ref="inputSearch"
            onSearch={this.onSearch}
            style={commonStyles.inlineBlockElement} />
        </Container>
        <Container textAlign="center" style={commonStyles.margin(20)} >
          {!isSearching && <SkillsOptionsMenu options={options} onChange={this.onSkillsOptionsMenuChange} />}
          <SkillsList items={this.getSkillsList()} />
        </Container>
      </Container>
    );
  }

}

SkillsSection.propTypes = {
  skills: React.PropTypes.object.isRequired
};

export default SkillsSection;
