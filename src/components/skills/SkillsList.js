import React from 'react';
import {Progress, Header, Grid} from 'semantic-ui-react';

import {styles} from './skillsSectionStyles';

const SkillsList = (props) => {

  const {items} = props;

  const renderGridRow = (item, index) => (
      <Grid.Row style={styles.skillsListRow} key={index} >
        <Grid.Column width={5}>
          <Header as="h3">
            {item.name}
          </Header>
        </Grid.Column>
        <Grid.Column width={11}>
          <Progress percent={item.expertiseValue * 20} success />
        </Grid.Column>
      </Grid.Row>
  );

  return (
    <Grid style={styles.containerWithMarginTop} >
      {
        items.map( (item, index) => renderGridRow(item, index))
      }
    </Grid>
  );
};

SkillsList.propTypes = {
  items: React.PropTypes.array.isRequired
};

export default SkillsList;
