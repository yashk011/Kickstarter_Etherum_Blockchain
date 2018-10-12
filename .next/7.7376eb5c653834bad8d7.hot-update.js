webpackHotUpdate(7,{

/***/ 1191:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(497);

var _campaign = __webpack_require__(1187);

var _campaign2 = _interopRequireDefault(_campaign);

var _web = __webpack_require__(736);

var _web2 = _interopRequireDefault(_web);

var _routes = __webpack_require__(727);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/yash/kickstart/components/Contribute.js';


var Contribute = function (_Component) {
    (0, _inherits3.default)(Contribute, _Component);

    function Contribute() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Contribute);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Contribute.__proto__ || (0, _getPrototypeOf2.default)(Contribute)).call.apply(_ref, [this].concat(args))), _this), _this.state = {

            value: ''

        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var campaign, accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:

                                event.preventDefault();
                                campaign = (0, _campaign2.default)(_this.props.address);
                                _context.prev = 2;
                                _context.next = 5;
                                return _web2.default.eth.getAccounts();

                            case 5:
                                accounts = _context.sent;

                                campaign.methods.contribute().send({

                                    from: accounts[0],
                                    value: _web2.default.utils.toWei(_this.state.value, 'ether')

                                });

                                _routes.Router.replaceRoute('/campaigns/' + _this.props.address);

                                _context.next = 12;
                                break;

                            case 10:
                                _context.prev = 10;
                                _context.t0 = _context['catch'](2);

                            case 12:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[2, 10]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Contribute, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, _react2.default.createElement(_semanticUiReact.FormField, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, _react2.default.createElement(_semanticUiReact.Label, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, 'Enter Amount to contribute'), _react2.default.createElement(_semanticUiReact.Input, { onChange: function onChange(event) {
                    return _this3.setState({ value: event.target.value });
                },
                value: this.state.value,
                label: 'ether',
                labelPosition: 'right', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            })), _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, 'Contribute!'));
        }
    }]);

    return Contribute;
}(_react.Component);

exports.default = Contribute;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ29udHJpYnV0ZS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxhYmVsIiwiSW5wdXQiLCJCdXR0b24iLCJGb3JtRmllbGQiLCJGb3JtIiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiUm91dGVyIiwiQ29udHJpYnV0ZSIsInN0YXRlIiwidmFsdWUiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiY29udHJpYnV0ZSIsInNlbmQiLCJmcm9tIiwidXRpbHMiLCJ0b1dlaSIsInJlcGxhY2VSb3V0ZSIsInNldFN0YXRlIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFPOzs7O0FBQ2QsQUFBUSxBQUFRLEFBQVEsQUFBUSxBQUFZOztBQUM1QyxBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVEsQUFBYTs7Ozs7OztJQUdmLEE7Ozs7Ozs7Ozs7Ozs7Ozt3TkFJRixBOzttQkFBUSxBQUVHLEE7O0FBRkgsQUFFSixpQkFJSixBO2lHQUFXLGlCQUFBLEFBQU8sT0FBUDs4QkFBQTs4RUFBQTs4QkFBQTt5REFBQTtpQ0FFUDs7c0NBQUEsQUFBTSxBQUNBO0FBSEMsMkNBR1Usd0JBQVMsTUFBQSxBQUFLLE1BSHhCLEFBR1UsQUFBb0I7Z0RBSDlCO2dEQUFBO3VDQVFvQixjQUFBLEFBQUssSUFSekIsQUFRb0IsQUFBUzs7aUNBQTFCO0FBUkgsb0RBVUg7O3lDQUFBLEFBQVMsUUFBVCxBQUFpQixhQUFqQixBQUE4Qjs7MENBRXBCLFNBRnlCLEFBRXpCLEFBQVMsQUFDZjsyQ0FBUSxjQUFBLEFBQUssTUFBTCxBQUFXLE1BQU0sTUFBQSxBQUFLLE1BQXRCLEFBQTRCLE9BSHhDLEFBQW1DLEFBR3ZCLEFBQW9DLEFBSWhEOztBQVBtQyxBQUUvQjs7K0NBS0osQUFBTyxhQUFhLGdCQUFlLE1BQUEsQUFBSyxNQWpCckMsQUFpQkgsQUFBOEM7O2dEQWpCM0M7QUFBQTs7aUNBQUE7Z0RBQUE7Z0VBQUE7O2lDQUFBO2lDQUFBO2dEQUFBOztBQUFBO3lDQUFBO0E7Ozs7Ozs7Ozs7aUNBOEJIO3lCQUVKOzttQ0FFSSxBQUFDLHVDQUFLLFVBQVksS0FBbEIsQUFBdUI7OEJBQXZCO2dDQUFBLEFBRUk7QUFGSjthQUFBLGtCQUVJLEFBQUM7OzhCQUFEO2dDQUFBLEFBRUk7QUFGSjtBQUFBLCtCQUVJLEFBQUM7OzhCQUFEO2dDQUFBO0FBQUE7QUFBQSxlQUZKLEFBRUksQUFJQSwrQ0FBQSxBQUFDLHdDQUFNLFVBQVkseUJBQUE7MkJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBQyxPQUFRLE1BQUEsQUFBTSxPQUF0QyxBQUFTLEFBQWMsQUFBc0I7QUFBaEUsQUFDQzt1QkFBUyxLQUFBLEFBQUssTUFEZixBQUNxQixBQUNwQjt1QkFGRCxBQUVPLEFBQ047K0JBSEQsQUFHZTs4QkFIZjtnQ0FSUixBQUVJLEFBTUksQUFRSDtBQVJHO2lDQVFILEFBQUMseUNBQU8sU0FBUjs4QkFBQTtnQ0FBQTtBQUFBO2VBbEJULEFBRUksQUFnQkssQUFhWjs7Ozs7QUF6RW9CLEEsQUErRXpCOztrQkFBQSxBQUFlIiwiZmlsZSI6IkNvbnRyaWJ1dGUuanMiLCJzb3VyY2VSb290IjoiL2hvbWUveWFzaC9raWNrc3RhcnQifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/yash/kickstart/components/Contribute.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/yash/kickstart/components/Contribute.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy43Mzc2ZWI1YzY1MzgzNGJhZDhkNy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db250cmlidXRlLmpzPzNmMTYzMzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TGFiZWwgLCBJbnB1dCAsIEJ1dHRvbiwgRm9ybUZpZWxkICwgRm9ybX0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IENhbXBhaWduIGZyb20gJy4uL2V0aGVyZXVtL2NhbXBhaWduJztcbmltcG9ydCB3ZWIzIGZyb20gJy4uL2V0aGVyZXVtL3dlYjMuanMnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJy4uL3JvdXRlcyc7XG5cblxuY2xhc3MgQ29udHJpYnV0ZSBleHRlbmRzIENvbXBvbmVudCBcbntcblxuXG4gICAgc3RhdGUgPSB7XG5cbiAgICAgICAgdmFsdWU6ICcnXG5cbiAgICB9O1xuXG4gICAgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBjYW1wYWlnbiA9IENhbXBhaWduKHRoaXMucHJvcHMuYWRkcmVzcyk7XG5cblxuICAgICAgICB0cnl7XG5cbiAgICAgICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcblxuICAgICAgICAgICAgY2FtcGFpZ24ubWV0aG9kcy5jb250cmlidXRlKCkuc2VuZCh7XG5cbiAgICAgICAgICAgICAgICBmcm9tOiBhY2NvdW50c1swXSxcbiAgICAgICAgICAgICAgICB2YWx1ZSA6IHdlYjMudXRpbHMudG9XZWkodGhpcy5zdGF0ZS52YWx1ZSAsICdldGhlcicpXG5cbiAgICAgICAgICAgIH0pOyAgIFxuXG4gICAgICAgICAgICBSb3V0ZXIucmVwbGFjZVJvdXRlKCcvY2FtcGFpZ25zLycrIHRoaXMucHJvcHMuYWRkcmVzcyk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGNhdGNoKGVycilcbiAgICAgICAge1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cblxuXG4gICAgcmVuZGVyKCl7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQgPSB7dGhpcy5vblN1Ym1pdH0gPlxuXG4gICAgICAgICAgICAgICAgPEZvcm1GaWVsZD5cblxuICAgICAgICAgICAgICAgICAgICA8TGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICBFbnRlciBBbW91bnQgdG8gY29udHJpYnV0ZVxuICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPElucHV0IG9uQ2hhbmdlID0ge2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUoe3ZhbHVlIDogZXZlbnQudGFyZ2V0LnZhbHVlfSl9IFxuICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7dGhpcy5zdGF0ZS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdldGhlcidcbiAgICAgICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249J3JpZ2h0Jz4gICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9JbnB1dCA+XG5cbiAgICAgICAgICAgICAgICA8L0Zvcm1GaWVsZD5cblxuICAgICAgICAgICAgICAgICA8QnV0dG9uIHByaW1hcnk+XG4gICAgICAgICAgICAgICAgICAgICAgICBDb250cmlidXRlIVxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cblxuXG4gICAgICAgICAgIDwvRm9ybT5cblxuXG4gICAgICAgICk7XG4gICAgICAgIFxuXG5cbiAgICAgIFxuICAgIH1cblxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgQ29udHJpYnV0ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvQ29udHJpYnV0ZS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBSEE7QUFBQTtBQUFBO0FBUUE7QUFDQTtBQURBO0FBUkE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQWxCQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOzs7Ozs7Ozs7OztBQThCQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUFBOztBQUVBO0FBRUE7QUFGQTtBQUFBOztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUhBO0FBUUE7QUFSQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBYUE7Ozs7Ozs7QUFNQTs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9