/* */ 
'use strict';
var _extends = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
Object.defineProperty(exports, "__esModule", {value: true});
var _react = require('react');
var _react2 = _interopRequireDefault(_react);
var _contextPure = require('./mixins/context-pure');
var _contextPure2 = _interopRequireDefault(_contextPure);
var _transitions = require('./styles/transitions');
var _transitions2 = _interopRequireDefault(_transitions);
var _children = require('./utils/children');
var _children2 = _interopRequireDefault(_children);
var _colorManipulator = require('./utils/color-manipulator');
var _colorManipulator2 = _interopRequireDefault(_colorManipulator);
var _styles = require('./utils/styles');
var _typography = require('./styles/typography');
var _typography2 = _interopRequireDefault(_typography);
var _enhancedButton = require('./enhanced-button');
var _enhancedButton2 = _interopRequireDefault(_enhancedButton);
var _flatButtonLabel = require('./buttons/flat-button-label');
var _flatButtonLabel2 = _interopRequireDefault(_flatButtonLabel);
var _getMuiTheme = require('./styles/getMuiTheme');
var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}
function _objectWithoutProperties(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0)
      continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i))
      continue;
    target[i] = obj[i];
  }
  return target;
}
function validateLabel(props, propName, componentName) {
  if (!props.children && !props.label) {
    return new Error('Required prop label or children was not ' + 'specified in ' + componentName + '.');
  }
}
var FlatButton = _react2.default.createClass({
  displayName: 'FlatButton',
  propTypes: {
    backgroundColor: _react2.default.PropTypes.string,
    children: _react2.default.PropTypes.node,
    disabled: _react2.default.PropTypes.bool,
    hoverColor: _react2.default.PropTypes.string,
    href: _react2.default.PropTypes.string,
    icon: _react2.default.PropTypes.node,
    label: validateLabel,
    labelPosition: _react2.default.PropTypes.oneOf(['before', 'after']),
    labelStyle: _react2.default.PropTypes.object,
    linkButton: _react2.default.PropTypes.bool,
    onKeyboardFocus: _react2.default.PropTypes.func,
    onMouseEnter: _react2.default.PropTypes.func,
    onMouseLeave: _react2.default.PropTypes.func,
    onTouchStart: _react2.default.PropTypes.func,
    primary: _react2.default.PropTypes.bool,
    rippleColor: _react2.default.PropTypes.string,
    secondary: _react2.default.PropTypes.bool,
    style: _react2.default.PropTypes.object
  },
  contextTypes: {muiTheme: _react2.default.PropTypes.object},
  childContextTypes: {muiTheme: _react2.default.PropTypes.object},
  mixins: [_contextPure2.default],
  statics: {
    getRelevantContextKeys: function getRelevantContextKeys(muiTheme) {
      var buttonTheme = muiTheme.button;
      var flatButtonTheme = muiTheme.flatButton;
      return {
        buttonColor: flatButtonTheme.color,
        buttonFilterColor: flatButtonTheme.buttonFilterColor,
        buttonHeight: buttonTheme.height,
        buttonMinWidth: buttonTheme.minWidth,
        disabledTextColor: flatButtonTheme.disabledTextColor,
        primaryTextColor: flatButtonTheme.primaryTextColor,
        secondaryTextColor: flatButtonTheme.secondaryTextColor,
        textColor: flatButtonTheme.textColor,
        textTransform: flatButtonTheme.textTransform ? flatButtonTheme.textTransform : buttonTheme.textTransform ? buttonTheme.textTransform : 'uppercase'
      };
    },
    getChildrenClasses: function getChildrenClasses() {
      return [_enhancedButton2.default, _flatButtonLabel2.default];
    }
  },
  getDefaultProps: function getDefaultProps() {
    return {
      disabled: false,
      labelStyle: {},
      labelPosition: 'after',
      onKeyboardFocus: function onKeyboardFocus() {},
      onMouseEnter: function onMouseEnter() {},
      onMouseLeave: function onMouseLeave() {},
      onTouchStart: function onTouchStart() {},
      primary: false,
      secondary: false
    };
  },
  getInitialState: function getInitialState() {
    return {
      hovered: false,
      isKeyboardFocused: false,
      touch: false,
      muiTheme: this.context.muiTheme || (0, _getMuiTheme2.default)()
    };
  },
  getChildContext: function getChildContext() {
    return {muiTheme: this.state.muiTheme};
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
    this.setState({muiTheme: newMuiTheme});
  },
  _handleKeyboardFocus: function _handleKeyboardFocus(e, isKeyboardFocused) {
    this.setState({isKeyboardFocused: isKeyboardFocused});
    this.props.onKeyboardFocus(e, isKeyboardFocused);
  },
  _handleMouseEnter: function _handleMouseEnter(e) {
    if (!this.state.touch)
      this.setState({hovered: true});
    this.props.onMouseEnter(e);
  },
  _handleMouseLeave: function _handleMouseLeave(e) {
    this.setState({hovered: false});
    this.props.onMouseLeave(e);
  },
  _handleTouchStart: function _handleTouchStart(e) {
    this.setState({touch: true});
    this.props.onTouchStart(e);
  },
  render: function render() {
    var _props = this.props;
    var children = _props.children;
    var disabled = _props.disabled;
    var hoverColor = _props.hoverColor;
    var backgroundColor = _props.backgroundColor;
    var icon = _props.icon;
    var label = _props.label;
    var labelStyle = _props.labelStyle;
    var labelPosition = _props.labelPosition;
    var primary = _props.primary;
    var rippleColor = _props.rippleColor;
    var secondary = _props.secondary;
    var style = _props.style;
    var other = _objectWithoutProperties(_props, ['children', 'disabled', 'hoverColor', 'backgroundColor', 'icon', 'label', 'labelStyle', 'labelPosition', 'primary', 'rippleColor', 'secondary', 'style']);
    var _constructor$getRelev = this.constructor.getRelevantContextKeys(this.state.muiTheme);
    var buttonColor = _constructor$getRelev.buttonColor;
    var buttonHeight = _constructor$getRelev.buttonHeight;
    var buttonMinWidth = _constructor$getRelev.buttonMinWidth;
    var disabledTextColor = _constructor$getRelev.disabledTextColor;
    var buttonFilterColor = _constructor$getRelev.buttonFilterColor;
    var primaryTextColor = _constructor$getRelev.primaryTextColor;
    var secondaryTextColor = _constructor$getRelev.secondaryTextColor;
    var textColor = _constructor$getRelev.textColor;
    var textTransform = _constructor$getRelev.textTransform;
    var defaultTextColor = disabled ? disabledTextColor : primary ? primaryTextColor : secondary ? secondaryTextColor : textColor;
    var defaultHoverColor = _colorManipulator2.default.fade(buttonFilterColor, 0.2);
    var defaultRippleColor = buttonFilterColor;
    var buttonHoverColor = hoverColor || defaultHoverColor;
    var buttonRippleColor = rippleColor || defaultRippleColor;
    var buttonBackgroundColor = backgroundColor || buttonColor;
    var hovered = (this.state.hovered || this.state.isKeyboardFocused) && !disabled;
    var mergedRootStyles = (0, _styles.mergeStyles)({
      color: defaultTextColor,
      transition: _transitions2.default.easeOut(),
      fontSize: _typography2.default.fontStyleButtonFontSize,
      letterSpacing: 0,
      textTransform: textTransform,
      fontWeight: _typography2.default.fontWeightMedium,
      borderRadius: 2,
      userSelect: 'none',
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: hovered ? buttonHoverColor : buttonBackgroundColor,
      lineHeight: buttonHeight + 'px',
      minWidth: buttonMinWidth,
      padding: 0,
      margin: 0
    }, style);
    var iconCloned = undefined;
    var labelStyleIcon = {};
    if (icon) {
      iconCloned = _react2.default.cloneElement(icon, {
        color: mergedRootStyles.color,
        style: {
          verticalAlign: 'middle',
          marginLeft: labelPosition === 'before' ? 0 : 12,
          marginRight: labelPosition === 'before' ? 12 : 0
        }
      });
      if (labelPosition === 'before') {
        labelStyleIcon.paddingRight = 8;
      } else {
        labelStyleIcon.paddingLeft = 8;
      }
    }
    var labelElement = label ? _react2.default.createElement(_flatButtonLabel2.default, {
      label: label,
      style: (0, _styles.mergeStyles)(labelStyleIcon, labelStyle)
    }) : undefined;
    var childrenFragment = labelPosition === 'before' ? {
      labelElement: labelElement,
      iconCloned: iconCloned,
      children: children
    } : {
      children: children,
      iconCloned: iconCloned,
      labelElement: labelElement
    };
    var enhancedButtonChildren = _children2.default.create(childrenFragment);
    return _react2.default.createElement(_enhancedButton2.default, _extends({}, other, {
      disabled: disabled,
      focusRippleColor: buttonRippleColor,
      focusRippleOpacity: 0.3,
      onKeyboardFocus: this._handleKeyboardFocus,
      onMouseLeave: this._handleMouseLeave,
      onMouseEnter: this._handleMouseEnter,
      onTouchStart: this._handleTouchStart,
      style: mergedRootStyles,
      touchRippleColor: buttonRippleColor,
      touchRippleOpacity: 0.3
    }), enhancedButtonChildren);
  }
});
exports.default = FlatButton;
module.exports = exports['default'];
