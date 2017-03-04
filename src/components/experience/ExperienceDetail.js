import React from 'react';
import {Header, Icon} from 'semantic-ui-react';

const ExperienceDetail = (props) => {

  const {item} = props;

  return (
    <div>
      <Header as="h2" >
        {item.role}
      </Header>
      <Header size="medium" >
        {item.from + ' - ' + item.to}
      </Header>
      <Header size="medium" >
        {item.country}
      </Header>
      {item.responsabilities.map( (responsability, index) => (
        <Header key={index} size="small" >
          <Icon name="arrow right" />
          {responsability}
        </Header>
      ))}
    </div>
  );
};

ExperienceDetail.propTypes = {
  item: React.PropTypes.object.isRequired
};

export default ExperienceDetail;
