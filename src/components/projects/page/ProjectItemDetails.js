import React from 'react';
import { Grid, Icon } from 'semantic-ui-react';

import commonStyles from '../../common/styles';
import {UIUtil} from '../../../util';

const ProjectItemDetails = (props) => {

  const {item} = props;

  const getIconLink = (link) => {
    return (
      <Icon
        onClick={() => window.open(link, '_blank')}
        link
        name="world"
        size="large" />
    );
  };

  const getProjectDetailGridRow = (text, value, isLink) => {
    return (
      <Grid.Row style={commonStyles.padding(0, 0, 6, 0)} >
        <Grid.Column
          computer={2}
          tablet={2}
          mobile={6}
          style={commonStyles.paddingAll(0)}
        >
          {UIUtil.getHeader('h3', text, true)}
        </Grid.Column>
        <Grid.Column
          computer={14}
          tablet={14}
          mobile={10}
        >
          {isLink && getIconLink(value)}
          {!isLink && UIUtil.getHeader('h3', value)}
        </Grid.Column>
      </Grid.Row>
    );
  };

  return (
    <Grid style={commonStyles.margin(10, 0, 10, 0)} >
      {getProjectDetailGridRow('Description', item.description)}
      {item.country && getProjectDetailGridRow('Country', item.country)}
      {item.client && getProjectDetailGridRow('Client', item.client)}
      {item.teamSize && getProjectDetailGridRow('Team Size', item.teamSize)}
      {item.link && getProjectDetailGridRow('Link', item.link, true)}
    </Grid>
  );

};

ProjectItemDetails.propTypes = {
  item: React.PropTypes.object.isRequired
};

export default ProjectItemDetails;
