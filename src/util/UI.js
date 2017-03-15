import React from 'react';
import {Header} from 'semantic-ui-react';

export function getYearsFromToText(from, to) {
  if (from === to) {
    return from;
  }
  return from + ' to ' + to;
}

export function getLink(link) {
  return (
    <a href={link} target="_blank" >{link}</a>
  );
}

export function getHeader(as = 'h1', text, bold = false) {
  const boldValue = bold ? 'bold' : 'normal';
  return (
    <Header
      style={{fontWeight: boldValue}}
      as={as} >
      {text}
    </Header>
  );
}
