import React from 'react';

import {SocialLink} from '../sociallink';

const FooterSocialLinks = (props) => {

  const {items} = props;

  return (
    <div>
      {
        items.map(
          (sociaLinkItem, index) => (<SocialLink key={index} item={sociaLinkItem} />)
        )
      }
    </div>
  );
};

FooterSocialLinks.propTypes = {
  items: React.PropTypes.array.isRequired
};

export default FooterSocialLinks;
