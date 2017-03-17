import React from 'react';
import {Grid} from 'semantic-ui-react';

import HeaderMobileSidebar from './HeaderMobileSidebar';
import HeaderMobileMenuButton from './HeaderMobileMenuButton';

class HeaderMobile extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = { visible: false };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    const {pageData, onLogoClick, onMenuItemClick, activeItem} = this.props;
    const {visible} = this.state;
    return (
      <Grid.Row only="tablet mobile">
        <Grid.Column>
          <div>

            <HeaderMobileMenuButton
              onClick={this.toggleVisibility}
              onLogoClick={onLogoClick} />

            <HeaderMobileSidebar
              activeItem={activeItem}
              pageData={pageData}
              isVisible={visible}
              onMenuItemClick={(event, comp) => {
                this.toggleVisibility();
                onMenuItemClick(event, comp);
              }} />

          </div>
        </Grid.Column>
      </Grid.Row>
    );
  }

}

HeaderMobile.propTypes = {
  pageData: React.PropTypes.object.isRequired,
  activeItem: React.PropTypes.string.isRequired,
  onMenuItemClick: React.PropTypes.func.isRequired,
  onLogoClick: React.PropTypes.func.isRequired
};

export default HeaderMobile;
