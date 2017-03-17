import React from 'react';
import {Image} from 'semantic-ui-react';

import logo from '../../../styles/img/logo.png';

const HeaderLogo = (props) => {
  const {onClick, floatRight} = props;
  let style = {
    cursor: 'pointer',
    display: 'inline-block'
  };
  if (floatRight) {
    style.float = 'right';
  }
  return (
    <Image
      src={logo}
      width="50"
      height="50"
      style={style}
      onClick={onClick} />
  );
};

HeaderLogo.defaultProps = {
  floatRight: false
};

HeaderLogo.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  floatRight: React.PropTypes.bool
};

export default HeaderLogo;
