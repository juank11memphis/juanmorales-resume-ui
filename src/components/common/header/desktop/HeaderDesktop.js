import React from 'react';
import {Grid, Header} from 'semantic-ui-react';

import HeaderDesktopMenu from './HeaderDesktopMenu';
import commonStyles from '../../../common/styles';

const HeaderDesktop = (props) => {
  const {pageData, activeItem, onMenuItemClick, onLogoClick} = props;
  return (
    <Grid.Row only="computer">
      <Grid.Column>
        <HeaderDesktopMenu
          items={pageData.menuItems}
          activeItem={activeItem}
          onClick={onMenuItemClick}
          onLogoClick={onLogoClick} />

        <div className="ui middle aligned grid" style={commonStyles.size(null, 400)} >
          <div className="eight column wide">
            <Header as="h1" inverted >{pageData.title}</Header>
            <Header as="h3" inverted >{pageData.subtitle}</Header>
          </div>
        </div>
      </Grid.Column>
    </Grid.Row>
  );
};

HeaderDesktop.propTypes = {
  pageData: React.PropTypes.object.isRequired,
  activeItem: React.PropTypes.string.isRequired,
  onMenuItemClick: React.PropTypes.func.isRequired,
  onLogoClick: React.PropTypes.func.isRequired
};

export default HeaderDesktop;
