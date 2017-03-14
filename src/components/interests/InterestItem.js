import React from 'react';
import { Image } from 'semantic-ui-react';

import commonStyles from '../common/styles';

const InterestItem = (props) => {

  const {item} = props;

  const imageContainerStyle = Object.assign(
    {},
    commonStyles.inlineBlockElement,
    { marginRight: '30px' }
  );

  const imageStyle = Object.assign(
    {},
    commonStyles.size(60, 'auto'),
    { margin: '0 auto' }
  );

  return (
    <div style={imageContainerStyle} >
      <Image src={item.icon} style={imageStyle} />
      {item.name}
    </div>
  );

};

InterestItem.propTypes = {
  item: React.PropTypes.object.isRequired
};

export default InterestItem;
