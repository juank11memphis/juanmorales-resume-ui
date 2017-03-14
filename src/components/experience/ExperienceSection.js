import React from 'react';
import { Container, Header, Grid, Segment } from 'semantic-ui-react';

import commonStyles from '../common/styles';
import ExperienceMenu from './ExperienceMenu';
import ExperienceDetail from './ExperienceDetail';

class ExperienceSection extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = { activeItem: null };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(experienceItem) {
    this.setState({ activeItem: experienceItem });
  }

  getActiveItem() {
    const {activeItem} = this.state;
    return activeItem ? activeItem : this.getFirstItem();
  }

  getFirstItem() {
    const {data} = this.props;
    return (data && data.length > 0) ? data[0] : null;
  }

  render(){
    const {pageData, data} = this.props;
    const activeItem = this.getActiveItem();
    return (
      <Container id="experience" style={commonStyles.margin(20)} >
        <Header
          as="h1"
          textAlign="center" >
          {pageData.title}
        </Header>
        <Grid style={commonStyles.margin(20)} >

          <Grid.Column width={4}>
            <ExperienceMenu items={data} activeItem={activeItem} onClick={this.handleItemClick} />
          </Grid.Column>

          <Grid.Column stretched width={12}>
            <Segment>
              { activeItem && <ExperienceDetail item={activeItem} />}
            </Segment>
          </Grid.Column>

        </Grid>
      </Container>
    );
  }

}

ExperienceSection.defaultProps = {
  pageData: {},
  data: []
};

ExperienceSection.propTypes = {
  pageData: React.PropTypes.object.isRequired,
  data: React.PropTypes.array.isRequired
};

export default ExperienceSection;
