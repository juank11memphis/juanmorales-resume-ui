import React from 'react';
import {Icon} from 'semantic-ui-react';
import Alert from 'react-s-alert';

import commonStyles from '../styles';

const SocialLink = (props) => {

  const {item} = props;

  const onSocialLinkClick = (sociaLinkItem) => {
    if (sociaLinkItem.link) {
      window.open(sociaLinkItem.link, '_blank');
    }
    if (sociaLinkItem.message) {
      Alert.info(sociaLinkItem.message, {
        position: 'top-right',
        effect: 'jelly',
        timeout: 5000
      });
    }
  };

  const imageContainerStyle = Object.assign(
    {},
    commonStyles.inlineBlockElement,
    { marginRight: '10px' }
  );

  return (
    <div style={imageContainerStyle} >
      <Icon
        onClick={() => onSocialLinkClick(item)}
        link
        name={item.icon}
        size="huge" />
    </div>
  );
};

SocialLink.propTypes = {
  item: React.PropTypes.object.isRequired
};

export default SocialLink;
