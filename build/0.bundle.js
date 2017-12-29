webpackJsonp([0],{

/***/ "./src/module/Test/Test.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _redux = __webpack_require__("./node_modules/redux/es/index.js");

var _TestAction = __webpack_require__("./src/module/Test/TestAction.js");

var Action = _interopRequireWildcard(_TestAction);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Test = function (_React$Component) {
    _inherits(Test, _React$Component);

    function Test() {
        _classCallCheck(this, Test);

        return _possibleConstructorReturn(this, (Test.__proto__ || Object.getPrototypeOf(Test)).apply(this, arguments));
    }

    _createClass(Test, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    null,
                    'Hello World Test'
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'button',
                        { type: 'button', onClick: this.props.action.btnTestSwitch },
                        '\u6E2C\u8A66\u958B\u95DC'
                    ),
                    _react2.default.createElement(
                        'span',
                        null,
                        '：' + this.props.btn_test
                    )
                )
            );
        }
    }]);

    return Test;
}(_react2.default.Component);

function mapStateToProps(state) {
    return {
        btn_test: state.Test.btn_test
    };
}

function mapDispatchToProps(dispatch) {
    return {
        action: (0, _redux.bindActionCreators)(Action, dispatch)
    };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Test);

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Test, 'Test', '/Applications/XAMPP/xamppfiles/htdocs/my-project/react-starter/src/module/Test/Test.js');

    __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Applications/XAMPP/xamppfiles/htdocs/my-project/react-starter/src/module/Test/Test.js');

    __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Applications/XAMPP/xamppfiles/htdocs/my-project/react-starter/src/module/Test/Test.js');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Applications/XAMPP/xamppfiles/htdocs/my-project/react-starter/src/module/Test/Test.js');
}();

;

/***/ }),

/***/ "./src/module/Test/TestAction.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.btnTestSwitch = btnTestSwitch;

var _TestDispatch = __webpack_require__("./src/module/Test/TestDispatch.js");

function btnTestSwitch() {
    return function (dispatch, getState) {

        dispatch({ type: _TestDispatch.BTN_TEST_SWITCH });
    };
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(btnTestSwitch, 'btnTestSwitch', '/Applications/XAMPP/xamppfiles/htdocs/my-project/react-starter/src/module/Test/TestAction.js');
}();

;

/***/ })

});