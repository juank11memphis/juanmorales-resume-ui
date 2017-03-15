import React from 'react';
import { Item } from 'semantic-ui-react';

import {UIUtil} from '../../../util';
import ProjectItemDetails from './ProjectItemDetails';
import ProjectItemAccomplishments from './ProjectItemAccomplishments';
import ProjectItemTechnologies from './ProjectItemTechnologies';

const ProjectItem = (props) => {

  const {item} = props;

  return (
    <Item>
      <Item.Content style={{textAlign: 'left'}} >
        <Item.Header>
          {UIUtil.getHeader('h2', item.name, true)}
        </Item.Header>
        <Item.Meta>
          {UIUtil.getYearsFromToText(item.from, item.to)}
        </Item.Meta>
        <Item.Description>
          <ProjectItemDetails item={item} />
        </Item.Description>
        <Item.Description>
          {item.accomplishments && <ProjectItemAccomplishments item={item} />}
        </Item.Description>
        <Item.Extra>
          {item.technologies && <ProjectItemTechnologies item={item} />}
        </Item.Extra>
      </Item.Content>
    </Item>
  );

};

ProjectItem.propTypes = {
  item: React.PropTypes.object.isRequired
};

export default ProjectItem;
