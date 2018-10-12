'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../ethereum/web3.js');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../routes');

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