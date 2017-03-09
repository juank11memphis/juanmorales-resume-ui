import React from 'react';
import { Container, Header, Dropdown } from 'semantic-ui-react';

import commonStyles from '../common/styles';
import SkillsOptionsMenu from './SkillsOptionsMenu';
import SkillsList from './SkillsList';
import {SearchInput} from '../common/searchinput';

class SkillsSection extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      isSearching: false,
      selectedSkillsBy: null,
      selectedSkillMenuOption: null
    };
    this.onSkillsByChange = this.onSkillsByChange.bind(this);
    this.onSkillsOptionsMenuChange = this.onSkillsOptionsMenuChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  onSkillsByChange(event, {value}) {
    this.setState({
      selectedSkillsBy: value,
      selectedSkillMenuOption: this.getFirstSkillsMenuOption(value),
      isSearching: false
    });
    this.refs.inputSearch.clear();
  }

  onSkillsOptionsMenuChange(skillMenuOptionValue) {
    this.setState({
      selectedSkillMenuOption: skillMenuOptionValue
    });
  }

  onSearch(searchText) {
    const selectedSkillsBy = this.getSelectedSkillsBy();
    if (searchText && searchText.length > 0) {
      this.setState({ isSearching: true, searchText });
    } else {
      this.setState({
        isSearching: false,
        selectedSkillMenuOption: this.getFirstSkillsMenuOption(selectedSkillsBy)
      });
    }
  }

  getSelectedSkillsBy() {
    const {selectedSkillsBy} = this.state;
    return selectedSkillsBy ? selectedSkillsBy : this.getFirstSkillsByItem();
  }

  getFirstSkillsByItem() {
    const {pageData} = this.props;
    const {skillsByOptions} = pageData;
    return (skillsByOptions && skillsByOptions.length > 0) ? skillsByOptions[0].value : null;
  }

  getSelectedSkillMenuOption() {
    const {selectedSkillMenuOption} = this.state;
    return selectedSkillMenuOption ? selectedSkillMenuOption : this.getFirstSkillsMenuOption();
  }

  getFirstSkillsMenuOption(selectedSkillsBy) {
    selectedSkillsBy = selectedSkillsBy ? selectedSkillsBy : this.getSelectedSkillsBy();
    const {data} = this.props;
    const menuOptions = data.options[selectedSkillsBy];
    return menuOptions[0].value;
  }

  getSkillsMenuOptions() {
    const {data} = this.props;
    const selectedSkillsBy = this.getSelectedSkillsBy();
    return data.options[selectedSkillsBy] || [];
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
    const {data} = this.props;
    const selectedSkillsBy = this.getSelectedSkillsBy();
    const options = data.options[selectedSkillsBy];
    if (!options) {
      return [];
    }
    const selectedSkillMenuOption = this.getSelectedSkillMenuOption();
    let filteredItems = data.items.filter( item => {
      const filterPropValue = item[selectedSkillsBy];
      return filterPropValue === selectedSkillMenuOption;
    });
    return filteredItems.sort( (item, nextItem) => nextItem.expertiseValue - item.expertiseValue);
  }

  getSkillsListBySearchText() {
    const {data} = this.props;
    const {searchText} = this.state;
    return data.items.filter( item => {
      const name = item.name.toLowerCase();
      const search = searchText.toLowerCase();
      return name.search(search) > -1;
    });
  }

  render(){
    const {pageData} = this.props;
    const {isSearching} = this.state;
    let skillsMenuOptions = this.getSkillsMenuOptions();

    return (
      <Container id="skills" style={commonStyles.margin(20)} >
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
            defaultValue="category"
            onChange={this.onSkillsByChange} />
          <SearchInput
            ref="inputSearch"
            onSearch={this.onSearch}
            style={commonStyles.inlineBlockElement} />
        </Container>
        <Container textAlign="center" style={commonStyles.margin(20)} >
          {
            (!isSearching && skillsMenuOptions && skillsMenuOptions.length > 0) &&
              <SkillsOptionsMenu options={skillsMenuOptions} onChange={this.onSkillsOptionsMenuChange} />
          }
          <SkillsList items={this.getSkillsList()} />
        </Container>
      </Container>
    );
  }

}

SkillsSection.defaultProps = {
  pageData: {},
  data: {}
};

SkillsSection.propTypes = {
  pageData: React.PropTypes.object.isRequired,
  data: React.PropTypes.object.isRequired
};

export default SkillsSection;
