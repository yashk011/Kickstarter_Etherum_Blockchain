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

var _campaign = require('../../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../../../ethereum/web3.js');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../../routes');

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/yash/kickstart/pages/campaigns/requests/new.js?entry';


var RequestNew = function (_Component) {
    (0, _inherits3.default)(RequestNew, _Component);

    function RequestNew() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, RequestNew);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestNew.__proto__ || (0, _getPrototypeOf2.default)(RequestNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {

            value: '',
            receipient: '',
            description: '',
            loading: false,
            errorMessage: ''

        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var campaign, _this$state, description, value, receipient, accounts;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:

                                event.preventDefault();

                                campaign = (0, _campaign2.default)(_this.props.address);
                                _this$state = _this.state, description = _this$state.description, value = _this$state.value, receipient = _this$state.receipient;

                                _this.setState({ loading: true, errorMessage: '' });

                                _context.prev = 4;
                                _context.next = 7;
                                return _web2.default.eth.getAccounts();

                            case 7:
                                accounts = _context.sent;
                                _context.next = 10;
                                return campaign.methods.createRequest(description, _web2.default.utils.toWei(value, 'ether'), receipient).send({

                                    from: accounts[0]

                                });

                            case 10:

                                _routes.Router.pushRoute('/campaigns/' + _this.props.address + '/requests}');

                                _context.next = 16;
                                break;

                            case 13:
                                _context.prev = 13;
                                _context.t0 = _context['catch'](4);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 16:

                                _this.setState({ loading: false });

                            case 17:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[4, 13]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(RequestNew, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, 'Back')), _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }, 'Create a Request'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                }
            }, 'Description'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.description,
                onChange: function onChange(event) {
                    return _this3.setState({ description: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 92
                }
            }, 'Amount in Ether'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.value,
                onChange: function onChange(event) {
                    return _this3.setState({ value: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 93
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 100
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 102
                }
            }, 'Receipient'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.receipient,
                onChange: function onChange(event) {
                    return _this3.setState({ receipient: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 103
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops', content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 109
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, type: 'submit', loading: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 113
                }
            }, 'Create Request !')));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
                var address;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                address = props.query.address;
                                return _context2.abrupt('return', { address: address });

                            case 2:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getInitialProps(_x2) {
                return _ref3.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return RequestNew;
}(_react.Component);

exports.default = RequestNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiQnV0dG9uIiwiTWVzc2FnZSIsIklucHV0IiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiTGluayIsIlJvdXRlciIsIkxheW91dCIsIlJlcXVlc3ROZXciLCJzdGF0ZSIsInZhbHVlIiwicmVjZWlwaWVudCIsImRlc2NyaXB0aW9uIiwibG9hZGluZyIsImVycm9yTWVzc2FnZSIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwic2V0U3RhdGUiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImNyZWF0ZVJlcXVlc3QiLCJ1dGlscyIsInRvV2VpIiwic2VuZCIsImZyb20iLCJwdXNoUm91dGUiLCJtZXNzYWdlIiwidGFyZ2V0IiwicXVlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUSxBQUFPLEFBQVMsQUFBUzs7QUFDakMsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFRLEFBQU8sQUFBYTs7QUFDNUIsQUFBTyxBQUFZOzs7Ozs7Ozs7SUFFYixBOzs7Ozs7Ozs7Ozs7Ozs7d04sQUFHRjs7bUJBQVEsQUFFSyxBQUNUO3dCQUhJLEFBR1MsQUFDYjt5QkFKSSxBQUlVLEFBQ2Q7cUJBTEksQUFLTSxBQUNWOzBCQU5JLEEsQUFNVzs7QUFOWCxBQUVKLGlCLEFBZ0JKO2lHQUFXLGlCQUFBLEFBQU8sT0FBUDsyRUFBQTs7OEVBQUE7OEJBQUE7eURBQUE7aUNBRVA7O3NDQUFBLEFBQU0sQUFFQTs7QUFKQywyQ0FJVyx3QkFBUyxNQUFBLEFBQUssTUFKekIsQUFJVyxBQUFvQjs4Q0FDSyxNQUxwQyxBQUt5QyxPQUx6QyxBQUtBLDBCQUxBLEFBS0EsYUFMQSxBQUtjLG9CQUxkLEFBS2MsT0FMZCxBQUtzQix5QkFMdEIsQUFLc0IsQUFHN0I7O3NDQUFBLEFBQUssU0FBUyxFQUFDLFNBQUQsQUFBVyxNQUFPLGNBUnpCLEFBUVAsQUFBYyxBQUFpQzs7Z0RBUnhDO2dEQUFBO3VDQVlvQixjQUFBLEFBQUssSUFaekIsQUFZb0IsQUFBUzs7aUNBQTFCO0FBWkgsb0RBQUE7Z0RBQUE7Z0RBY0csQUFBUyxRQUFULEFBQWlCLGNBQWpCLEFBQStCLGFBQWMsY0FBQSxBQUFLLE1BQUwsQUFBVyxNQUFYLEFBQWlCLE9BQTlELEFBQTZDLEFBQXlCLFVBQXRFLEFBQWlGLFlBQWpGLEFBQThGOzswQ0FFM0YsU0FoQk4sQUFjRyxBQUFtRyxBQUVoRyxBQUFTOztBQUZ1RixBQUVyRyxpQ0FGRTs7aUNBTU47OytDQUFBLEFBQU8sMEJBQXdCLE1BQUEsQUFBSyxNQUFwQyxBQUEwQyxVQXBCdkM7O2dEQUFBO0FBQUE7O2lDQUFBO2dEQUFBO2dFQTBCQzs7c0NBQUEsQUFBSyxTQUFTLEVBQUMsY0FBYyxZQTFCOUIsQUEwQkMsQUFBYyxBQUFtQjs7aUNBR3pDOztzQ0FBQSxBQUFLLFNBQVMsRUFBQyxTQTdCUixBQTZCUCxBQUFjLEFBQVc7O2lDQTdCbEI7aUNBQUE7Z0RBQUE7O0FBQUE7eUNBQUE7QTs7Ozs7Ozs7OztpQ0FvQ1g7eUJBQ0k7O21DQUVJLEFBQUM7OzhCQUFEO2dDQUFBLEFBRUk7QUFGSjtBQUFBLGFBQUEsa0JBRUksQUFBQyw4QkFBSyx1QkFBdUIsS0FBQSxBQUFLLE1BQTVCLEFBQWtDLFVBQXhDOzhCQUFBO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFIUixBQUVJLEFBQ0ksQUFPSiwwQkFBQSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFWSixBQVVJLEFBRUEscUNBQUEsQUFBQyx1Q0FBSyxVQUFZLEtBQWxCLEFBQXVCLFVBQVUsT0FBUSxDQUFDLENBQUMsS0FBQSxBQUFLLE1BQWhELEFBQXNEOzhCQUF0RDtnQ0FBQSxBQUNDO0FBREQ7K0JBQ0UsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUVHO0FBRkg7QUFBQSwrQkFFRyxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFGSCxBQUVHLEFBQ0EsZ0NBQUEsQUFBQzt1QkFDUSxLQUFBLEFBQUssTUFEZCxBQUNvQixBQUNwQjswQkFBWSx5QkFBQTsyQkFBUyxPQUFBLEFBQUssU0FBUyxFQUFDLGFBQWMsTUFBQSxBQUFNLE9BQTVDLEFBQVMsQUFBYyxBQUE0QjtBQUYvRDs4QkFBQTtnQ0FKSixBQUNDLEFBR0csQUFNSjtBQU5JO0FBQ0EsaUNBS0gsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUVJO0FBRko7QUFBQSwrQkFFSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFGSixBQUVJLEFBQ0Esb0NBQUEsQUFBQzt1QkFDUSxLQUFBLEFBQUssTUFEZCxBQUNvQixBQUNwQjswQkFBWSx5QkFBQTsyQkFBUyxPQUFBLEFBQUssU0FBUyxFQUFDLE9BQVEsTUFBQSxBQUFNLE9BQXRDLEFBQVMsQUFBYyxBQUFzQjtBQUZ6RDs4QkFBQTtnQ0FiSixBQVVBLEFBR0ksQUFPSjtBQVBJO0FBQ0EsaUNBTUgsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUVJO0FBRko7QUFBQSwrQkFFSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFGSixBQUVJLEFBQ0EsK0JBQUEsQUFBQzt1QkFDTyxLQUFBLEFBQUssTUFEYixBQUNtQixBQUNuQjswQkFBVyx5QkFBQTsyQkFBUyxPQUFBLEFBQUssU0FBUyxFQUFDLFlBQWEsTUFBQSxBQUFNLE9BQTNDLEFBQVMsQUFBYyxBQUEyQjtBQUY3RDs4QkFBQTtnQ0F2QkosQUFvQkEsQUFHSSxBQU1SO0FBTlE7QUFDQSxpQ0FLUixBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXNCLFFBQU8sU0FBUyxLQUFBLEFBQUssTUFBM0MsQUFBaUQ7OEJBQWpEO2dDQTdCSSxBQTZCSixBQUlBO0FBSkE7Z0NBSUEsQUFBQyx5Q0FBTyxTQUFSLE1BQWdCLE1BQWhCLEFBQXFCLFVBQVMsU0FBVyxLQUFBLEFBQUssTUFBOUMsQUFBb0Q7OEJBQXBEO2dDQUFBO0FBQUE7ZUEvQ0osQUFFSSxBQVlJLEFBaUNKLEFBZVA7Ozs7O21IQTNHNEIsQTs7Ozs7aUNBRWxCO0EsMENBQVcsTUFBTSxBLE1BQWpCLEE7a0VBRUEsRUFBQyxTLEFBQUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFqQlUsQSxBQTJIekI7O2tCQUFBLEFBQWUiLCJmaWxlIjoibmV3LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL3lhc2gva2lja3N0YXJ0In0=