import React from 'react';
import { Label } from 'semantic-ui-react';

import commonStyles from '../../common/styles';

const ProjectItemTechnologies = (props) => {

  const {item} = props;

  const getTechnologies = () => {
    return (
      <div>
        {item.technologies.map((technology, index) => (
          <Label
            key={index}
            size="large"
            style={commonStyles.margin(0, 5, 0, 0)}
            color="teal" >
            {technology}
          </Label>
        ))}
      </div>
    );
  };

  return (
    <div>
      {getTechnologies()}
    </div>
  );

};

ProjectItemTechnologies.propTypes = {
  item: React.PropTypes.object.isRequired
};

export default ProjectItemTechnologies;
