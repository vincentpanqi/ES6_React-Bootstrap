/* */ 
'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports['default'] = calc;
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {'default': obj};
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var _utilsCamelToDashCase = require('../utils/camelToDashCase');
var _utilsCamelToDashCase2 = _interopRequireDefault(_utilsCamelToDashCase);
var _utilsCapitalizeString = require('../utils/capitalizeString');
var _utilsCapitalizeString2 = _interopRequireDefault(_utilsCapitalizeString);
function calc(pluginInterface) {
  var property = pluginInterface.property;
  var value = pluginInterface.value;
  var browserInfo = pluginInterface.browserInfo;
  var prefix = pluginInterface.prefix;
  var keepUnprefixed = pluginInterface.keepUnprefixed;
  var forceRun = pluginInterface.forceRun;
  var requiresPrefix = pluginInterface.requiresPrefix;
  var browser = browserInfo.browser;
  var version = browserInfo.version;
  if (typeof value === 'string' && (property.toLowerCase().indexOf('transition') > -1 || property.toLowerCase().indexOf('transitionproperty') > -1)) {
    var _ref;
    var _ret = (function() {
      var requiresPrefixDashCased = Object.keys(requiresPrefix).map(function(property) {
        return (0, _utilsCamelToDashCase2['default'])(property);
      });
      var newValue = value;
      var multipleValues = newValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g);
      requiresPrefixDashCased.forEach(function(property) {
        multipleValues.forEach(function(val, index) {
          if (val.indexOf(property) > -1) {
            var newVal = forceRun ? ['-webkit-', '-moz-', '-ms-'].map(function(prefix) {
              return val.replace(property, prefix + property);
            }).join(',') : val.replace(property, prefix.css + property);
            multipleValues[index] = newVal + (keepUnprefixed ? ',' + val : '');
          }
        });
      });
      var outputValue = multipleValues.join(',');
      if (forceRun) {
        return {v: (_ref = {}, _defineProperty(_ref, 'Webkit' + (0, _utilsCapitalizeString2['default'])(property), outputValue), _defineProperty(_ref, 'Moz' + (0, _utilsCapitalizeString2['default'])(property), outputValue), _defineProperty(_ref, 'ms' + (0, _utilsCapitalizeString2['default'])(property), outputValue), _defineProperty(_ref, property, outputValue), _ref)};
      }
      return {v: _defineProperty({}, property, outputValue)};
    })();
    if (typeof _ret === 'object')
      return _ret.v;
  }
}
module.exports = exports['default'];
