import React from 'react';
import {Button, Icon} from 'semantic-ui-react';

import HeaderLogo from '../HeaderLogo';

const HeaderMobileMenuButton = (props) => {
  const {onClick, onLogoClick} = props;
  return (
    <div style={{textAlign: 'left'}} >
      <Button onClick={onClick} icon inverted >
        <Icon name="align justify" />
      </Button>
      <HeaderLogo onClick={onLogoClick} floatRight={true} />
    </div>
  );
};

HeaderMobileMenuButton.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  onLogoClick: React.PropTypes.func.isRequired,
};

export default HeaderMobileMenuButton;
