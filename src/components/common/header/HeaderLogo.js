import React from 'react';
import {Image} from 'semantic-ui-react';

import logo from '../../../styles/img/logo.png';

const HeaderLogo = (props) => {
  const {onClick} = props;
  return (
    <Image
      src={logo}
      width="50"
      height="50"
      style={{cursor: 'pointer'}}
      onClick={onClick} />
  );
};

HeaderLogo.propTypes = {
  onClick: React.PropTypes.func.isRequired
};

export default HeaderLogo;
