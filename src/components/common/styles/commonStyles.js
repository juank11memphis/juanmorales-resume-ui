export const styles = {

  DEEP_BLUE: '#24292e',

  margin: (top, right, bottom, left) => {
    let styleObj = {};
    top && (styleObj.marginTop = top + 'px');
    right && (styleObj.marginRight = right + 'px');
    bottom && (styleObj.marginBottom = bottom + 'px');
    left && (styleObj.marginLeft = left + 'px');
    return styleObj;
  },

  marginAll: (padding) => {
    return {
      margin: padding + 'px'
    };
  },

  padding: (top, right, bottom, left) => {
    let styleObj = {};
    top && (styleObj.paddingTop = top + 'px');
    right && (styleObj.paddingRight = right + 'px');
    bottom && (styleObj.paddingBottom = bottom + 'px');
    left && (styleObj.paddingLeft = left + 'px');
    return styleObj;
  },

  paddingAll: (padding) => {
    return {
      padding: padding + 'px'
    };
  },

  size: (width, height) => {
    let styleObj = {};

    if (width && typeof width === 'number') {
      styleObj.width = width + 'px';
    } else if (width) {
      styleObj.width = width;
    }

    if (height && typeof height === 'number') {
      styleObj.height = height + 'px';
    } else if (height) {
      styleObj.height = height;
    }

    return styleObj;
  },

  minMaxHeight: (min, max) => {
    let styleObj = {};
    min && (styleObj.minHeight = min + 'px');
    max && (styleObj.maxHeight = max + 'px');
    return styleObj;
  },

  inlineBlockElement: {
    display: 'inline-block',
    marginRight: '10px'
  },

  link: {
    cursor: 'pointer',
    textDecoration: 'underline',
    color: '#214887'
  }

};
