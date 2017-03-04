import React from 'react';
import { Container, Header, Grid, Menu, Segment } from 'semantic-ui-react';

import commonStyles from '../common/styles';
import ExperienceDetail from './ExperienceDetail';

class ExperienceSection extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = { activeItem: null };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.experience === nextProps.experience) {
      return;
    }
    const {data} = nextProps.experience;
    if (data && data.length > 0) {
      this.setState({
        activeItem: data[0]
      });
    }
  }

  handleItemClick(experienceItem) {
    this.setState({ activeItem: experienceItem });
  }

  createMenuItem(experienceItem, index) {
    const yearsText = experienceItem.years > 1 ? ' years' : ' year';
    const menuItemEl = (
      <Menu.Item
        key={index}
        name={experienceItem.id+''}
        active={this.state.activeItem.id === experienceItem.id}
        onClick={() => this.handleItemClick(experienceItem)} >
        {experienceItem.companyName + '\n' + experienceItem.years + yearsText}
      </Menu.Item>
    );
    return menuItemEl;
  }

  render(){
    const {pageData, data} = this.props.experience;
    const {activeItem} = this.state;
    return (
      <Container style={commonStyles.margin(20)} >
        <Header
          as="h1"
          textAlign="center" >
          {pageData.title}
        </Header>
        <Grid style={commonStyles.margin(20)} >
          <Grid.Column width={4}>
            <Menu fluid vertical tabular>
              {
                data && data.map( (experienceItem, index) => this.createMenuItem(experienceItem, index))
              }
            </Menu>
          </Grid.Column>

          <Grid.Column stretched width={12}>
            <Segment>
              {activeItem && <ExperienceDetail item={activeItem} />}
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }

}

ExperienceSection.propTypes = {
  experience: React.PropTypes.object.isRequired
};

export default ExperienceSection;
