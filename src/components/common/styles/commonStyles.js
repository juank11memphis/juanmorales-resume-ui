export const styles = {

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
    width && (styleObj.width = width + 'px');
    height && (styleObj.height = height + 'px');
    return styleObj;
  },

  inlineBlockElement: {
    display: 'inline-block',
    marginRight: '10px'
  }

};
