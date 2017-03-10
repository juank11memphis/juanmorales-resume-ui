export const styles = {

  DEEP_BLUE: '#24292e',
  BLUE: '#264475',

  margin: (top, right, bottom, left) => {
    let styleObj = {};
    (top !== undefined) && (styleObj.marginTop = top + 'px');
    (right !== undefined) && (styleObj.marginRight = right + 'px');
    (bottom !== undefined) && (styleObj.marginBottom = bottom + 'px');
    (left !== undefined) && (styleObj.marginLeft = left + 'px');
    return styleObj;
  },

  marginAll: (padding) => {
    return {
      margin: padding + 'px'
    };
  },

  padding: (top, right, bottom, left) => {
    let styleObj = {};
    (top !== undefined) && (styleObj.paddingTop = top + 'px');
    (right !== undefined) && (styleObj.paddingRight = right + 'px');
    (bottom !== undefined) && (styleObj.paddingBottom = bottom + 'px');
    (left !== undefined) && (styleObj.paddingLeft = left + 'px');
    return styleObj;
  },

  paddingAll: (padding) => {
    return {
      padding: padding + 'px'
    };
  },

  size: (width, height) => {
    let styleObj = {};

    if (width !== undefined && typeof width === 'number') {
      styleObj.width = width + 'px';
    } else if (width !== undefined) {
      styleObj.width = width;
    }

    if (height !== undefined && typeof height === 'number') {
      styleObj.height = height + 'px';
    } else if (height !== undefined) {
      styleObj.height = height;
    }

    return styleObj;
  },

  minMaxHeight: (min, max) => {
    let styleObj = {};
    (min !== undefined) && (styleObj.minHeight = min + 'px');
    (max !== undefined) && (styleObj.maxHeight = max + 'px');
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
