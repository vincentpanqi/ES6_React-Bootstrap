/* */ 
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = gradient;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;

function gradient(pluginInterface) {
  var property = pluginInterface.property;
  var value = pluginInterface.value;
  var browserInfo = pluginInterface.browserInfo;
  var prefix = pluginInterface.prefix;
  var keepUnprefixed = pluginInterface.keepUnprefixed;
  var forceRun = pluginInterface.forceRun;
  var browser = browserInfo.browser;
  var version = browserInfo.version;

  if (typeof value === 'string' && value.match(values) !== null && (forceRun || browser === 'firefox' && version < 16 || browser === 'chrome' && version < 26 || (browser === 'safari' || browser === 'ios_saf') && version < 7 || (browser === 'opera' || browser === 'op_mini') && version < 12.1 || browser === 'android' && version < 4.4 || browser === 'and_uc')) {
    var newValue = forceRun ?
    // prefix all
    ['-webkit-', '-moz-'].map(function (prefix) {
      return prefix + value;
    }).join(';' + property + ':') :
    // default
    prefix.css + value;
    return _defineProperty({}, property, newValue + (keepUnprefixed ? ';' + property + ':' + value : ''));
  }
}

module.exports = exports['default'];