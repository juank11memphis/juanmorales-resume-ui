import React from 'react';
import { Container, Header, Accordion } from 'semantic-ui-react';

import commonStyles from '../common/styles';
import ExperienceDetail from './ExperienceDetail';

const ExperienceSection = (props) => {

  const {pageData, data} = props;

  const getAccordionTitle = (item) => {
    const yearsText = item.years > 1 ? ' years' : ' year';
    const titleStyle = {
      fontWeight: 'bold',
      color: 'black'
    };
    return (
      <span style={titleStyle} >
        {item.companyName + ' / ' + item.years + yearsText}
      </span>
    );
  };

  const getAccordionContent = (item) => {
    return (
      <ExperienceDetail item={item} />
    );
  };

  const getAccordionPanels = () => {
    const panels = data.map( (item, index) => {
      return {
        key: `panel-${index}`,
        title: getAccordionTitle(item),
        content: getAccordionContent(item)
      };
    });
    return panels;
  };

  return (
    <Container id="experience" style={commonStyles.margin(20)} >
      <Header
        as="h1"
        textAlign="center" >
        {pageData.title}
      </Header>
      <Accordion
        fluid
        panels={getAccordionPanels()}
        styled
        defaultActiveIndex={0} />
    </Container>
  );

};

ExperienceSection.defaultProps = {
  pageData: {},
  data: []
};

ExperienceSection.propTypes = {
  pageData: React.PropTypes.object.isRequired,
  data: React.PropTypes.array.isRequired
};

export default ExperienceSection;
