/* */ 
'use strict';
Object.defineProperty(exports, "__esModule", {value: true});
var _react = require('react');
var _react2 = _interopRequireDefault(_react);
var _styles = require('../utils/styles');
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}
exports.default = {
  propTypes: {style: _react2.default.PropTypes.object},
  mergeStyles: _styles.mergeStyles,
  mergeAndPrefix: _styles.mergeAndPrefix,
  prepareStyles: function prepareStyles() {
    var _ref = this.state && this.state.muiTheme || this.context && this.context.muiTheme || this.props && this.props.muiTheme || {};
    var _ref$prepareStyles = _ref.prepareStyles;
    var prepareStyles = _ref$prepareStyles === undefined ? function(style) {
      return style;
    } : _ref$prepareStyles;
    for (var _len = arguments.length,
        args = Array(_len),
        _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return prepareStyles(_styles.mergeStyles.apply(undefined, [{}].concat(args)));
  }
};
module.exports = exports['default'];
