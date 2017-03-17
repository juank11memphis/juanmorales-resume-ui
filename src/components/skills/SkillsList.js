import React from 'react';
import {Progress} from 'semantic-ui-react';

import commonStyles from '../common/styles';

const SkillsList = (props) => {

  const {items} = props;

  const renderGridRow = (item, index) => (
    <Progress key={index} percent={item.expertiseValue * 20} success>
      <div style={{fontSize: '1.3em'}} >
      {item.name}
      </div>
    </Progress>
  );

  const skillsContainerStyles = Object.assign(
    {},
    commonStyles.marginAll('0 auto'),
    commonStyles.padding(20, 0, 20, 0),
    commonStyles.minMaxWidth(null, 600)
  );

  return (
    <div style={skillsContainerStyles} >
      {
        items.map( (item, index) => renderGridRow(item, index))
      }
    </div>
  );
};

SkillsList.propTypes = {
  items: React.PropTypes.array.isRequired
};

export default SkillsList;
