'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pluralize = require('pluralize');

var _pluralize2 = _interopRequireDefault(_pluralize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Iterator = function (_Component) {
  _inherits(Iterator, _Component);

  function Iterator() {
    _classCallCheck(this, Iterator);

    return _possibleConstructorReturn(this, (Iterator.__proto__ || Object.getPrototypeOf(Iterator)).apply(this, arguments));
  }

  _createClass(Iterator, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          name = _props.name,
          iterate = _props.iterate,
          children = _props.children;

      return _react2.default.createElement(
        'div',
        null,
        iterate.map(function (object, i) {
          var childProp = {};
          childProp[_pluralize2.default.singular(name)] = object;
          return _react2.default.createElement(
            'div',
            { key: i },
            _react2.default.cloneElement(children, childProp)
          );
        })
      );
    }
  }]);

  return Iterator;
}(_react.Component);

Iterator.propTypes = {
  iterate: _react2.default.PropTypes.array.isRequired,
  children: _react2.default.PropTypes.element.isRequired,
  name: function name(props, propName, component) {
    if (!propName in props) {
      return new Error('missing ' + propName);
    }
    if (_typeof(props[propName]) === String) {
      return new Error(propName + ' shoule be string');
    }
    if (props[propName].length <= 0) {
      return new Error(propName + ' was too short');
    }
    if (_pluralize2.default.plural(props[propName]) !== props[propName]) {
      return new Error(propName + ' should be plural');
    }
  }
};

exports.default = Iterator;
