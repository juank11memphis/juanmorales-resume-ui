module.exports = { contents : "'use strict';\n\nvar _react = require('react');\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = require('react-dom');\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _App = require('./App.js');\n\nvar _App2 = _interopRequireDefault(_App);\n\nrequire('./index.css');\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.getElementById('root'));", 
dependencies : ["react","react-dom","./App.js","./index.css"], 
sourceMap : "{\"version\":3,\"sources\":[\"index.js\"],\"names\":[\"render\",\"document\",\"getElementById\"],\"mappings\":\";;AAAA;;;;AACA;;;;AACA;;;;AACA;;;;AAEA,mBAASA,MAAT,CACE,kDADF,EACWC,SAASC,cAAT,CAAwB,MAAxB,CADX\",\"file\":\"index.js\",\"sourcesContent\":[\"import React from 'react';\\nimport ReactDOM from 'react-dom';\\nimport App from './App.js';\\nimport './index.css';\\n\\nReactDOM.render(\\n  <App />, document.getElementById('root'));\\n\"]}",
headerContent : undefined, 
mtime : 1487377115000
};