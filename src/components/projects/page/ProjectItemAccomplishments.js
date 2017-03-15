import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

import {UIUtil} from '../../../util';

const ProjectItemAccomplishments = (props) => {

  const {item} = props;

  const getBiggestAccomplishments = () => {
    return (
      <div>
        {
          item.accomplishments.map((accomplishment, index) => (
            <Header key={index} size="medium" style={{fontWeight: 'normal'}} >
              <Icon name="arrow right"/>
              {accomplishment}
            </Header>
          ))
        }
      </div>
    );
  };

  return (
    <div>
      {UIUtil.getHeader('h3', 'Biggest Accomplishments', true)}
      {getBiggestAccomplishments()}
    </div>
  );

};

ProjectItemAccomplishments.propTypes = {
  item: React.PropTypes.object.isRequired
};

export default ProjectItemAccomplishments;
