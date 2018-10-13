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

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/yash/kickstart/components/RequestRow.js';


var RequestRow = function (_Component) {
    (0, _inherits3.default)(RequestRow, _Component);

    function RequestRow() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, RequestRow);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.onApprove = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var campaign, accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                campaign = (0, _campaign2.default)(_this.props.address);
                                _context.next = 3;
                                return _web2.default.eth.getAccounts();

                            case 3:
                                accounts = _context.sent;
                                _context.next = 6;
                                return campaign.methods.approveRequest(_this.props.id).send({
                                    from: accounts[0]
                                });

                            case 6:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _this.onFinalise = function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
                var campaign, accounts;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                campaign = (0, _campaign2.default)(_this.props.address);
                                _context2.next = 3;
                                return _web2.default.eth.getAccounts();

                            case 3:
                                accounts = _context2.sent;
                                _context2.next = 6;
                                return campaign.methods.finalizeRequest(_this.props.id).send({
                                    from: accounts[0]
                                });

                            case 6:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, _this2);
            }));

            return function (_x2) {
                return _ref3.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(RequestRow, [{
        key: 'render',
        value: function render() {
            var Row = _semanticUiReact.Table.Row,
                Cell = _semanticUiReact.Table.Cell;
            var _props = this.props,
                id = _props.id,
                request = _props.request,
                approversCount = _props.approversCount;

            var readyToBeFinalised = request.approvalCount > approversCount / 2;

            return _react2.default.createElement(Row, { disabled: request.complete, positive: readyToBeFinalised && !request.complete, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, ' ', id, ' '), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, ' ', request.description, ' '), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, ' ', _web2.default.utils.fromWei(request.value, 'ether')), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, request.recipient), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, ' ', request.approvalCount, ' / ', approversCount, ' '), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { basic: true, color: 'green', onClick: this.onApprove, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, 'Aprove')), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'teal', basic: true, onClick: this.onFinalise, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, 'Finalise')));
        }
    }]);

    return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVxdWVzdFJvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRhYmxlIiwiQnV0dG9uIiwid2ViMyIsIkNhbXBhaWduIiwiUmVxdWVzdFJvdyIsIm9uQXBwcm92ZSIsInByb3BzIiwiY2FtcGFpZ24iLCJhZGRyZXNzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJhcHByb3ZlUmVxdWVzdCIsImlkIiwic2VuZCIsImZyb20iLCJvbkZpbmFsaXNlIiwiZmluYWxpemVSZXF1ZXN0IiwiUm93IiwiQ2VsbCIsInJlcXVlc3QiLCJhcHByb3ZlcnNDb3VudCIsInJlYWR5VG9CZUZpbmFsaXNlZCIsImFwcHJvdmFsQ291bnQiLCJjb21wbGV0ZSIsImRlc2NyaXB0aW9uIiwidXRpbHMiLCJmcm9tV2VpIiwidmFsdWUiLCJyZWNpcGllbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUSxBQUFROztBQUNoQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFjOzs7Ozs7Ozs7SUFHZixBOzs7Ozs7Ozs7Ozs7Ozs7d04sQUFHTjtpR0FBWSxpQkFBQSxBQUFPLE9BQVA7OEJBQUE7OEVBQUE7OEJBQUE7eURBQUE7aUNBQ047QUFETSwyQ0FDSyx3QkFBUyxNQUFBLEFBQUssTUFEbkIsQUFDSyxBQUFvQjtnREFEekI7dUNBR1csY0FBQSxBQUFLLElBSGhCLEFBR1csQUFBUzs7aUNBQTFCO0FBSE0sb0RBQUE7Z0RBQUE7Z0RBS04sQUFBUyxRQUFULEFBQWlCLGVBQWUsTUFBQSxBQUFLLE1BQXJDLEFBQTJDLElBQTNDLEFBQStDOzBDQUV2QyxTQVBGLEFBS04sQUFDRixBQUNVLEFBQVM7QUFEbkIsQUFDSSxpQ0FGRjs7aUNBTE07aUNBQUE7Z0RBQUE7O0FBQUE7NEJBQUE7QTs7Ozs7bUJBV1osQTtpR0FBYSxrQkFBQSxBQUFPLE9BQVA7OEJBQUE7Z0ZBQUE7OEJBQUE7MkRBQUE7aUNBQ1A7QUFETywyQ0FDSSx3QkFBUyxNQUFBLEFBQUssTUFEbEIsQUFDSSxBQUFvQjtpREFEeEI7dUNBR1UsY0FBQSxBQUFLLElBSGYsQUFHVSxBQUFTOztpQ0FBMUI7QUFITyxxREFBQTtpREFBQTtnREFLUCxBQUFTLFFBQVQsQUFBaUIsZ0JBQWdCLE1BQUEsQUFBSyxNQUF0QyxBQUE0QyxJQUE1QyxBQUFnRDswQ0FDM0MsU0FORSxBQUtQLEFBQXFELEFBQ2hELEFBQVM7QUFEdUMsQUFDdkQsaUNBREU7O2lDQUxPO2lDQUFBO2lEQUFBOztBQUFBOzZCQUFBO0E7Ozs7Ozs7Ozs7aUNBV0o7Z0JBQUEsQUFFRSxNQUZGLEFBRWlCLHVCQUZqQixBQUVFO2dCQUZGLEFBRVEsT0FGUixBQUVpQix1QkFGakIsQUFFUTt5QkFDMkIsS0FIbkMsQUFHd0M7Z0JBSHhDLEFBR0UsWUFIRixBQUdFO2dCQUhGLEFBR08saUJBSFAsQUFHTztnQkFIUCxBQUdpQix3QkFIakIsQUFHaUIsQUFDdEI7O2dCQUFNLHFCQUFxQixRQUFBLEFBQVEsZ0JBQWdCLGlCQUFuRCxBQUFrRSxBQUlsRTs7bUNBRUMsY0FBRCxPQUFLLFVBQVUsUUFBZixBQUF1QixVQUFVLFVBQVksc0JBQXNCLENBQUMsUUFBcEUsQUFBNEU7OEJBQTVFO2dDQUFBLEFBQ0k7QUFESjthQUFBLGtCQUNLLGNBQUQ7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUFRLEtBQVIsSUFESixBQUNJLEFBQ0Esc0JBQUMsY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBQVEsYUFBUixBQUFnQixhQUZwQixBQUVJLEFBQ0Esc0JBQUMsY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBQVEsbUJBQUEsQUFBSyxNQUFMLEFBQVcsUUFBUSxRQUFuQixBQUEyQixPQUh2QyxBQUdJLEFBQVEsQUFBbUMsQUFDM0MsMkJBQUMsY0FBRDs7OEJBQUE7Z0NBQUEsQUFBTztBQUFQO0FBQUEsdUJBSkosQUFJSSxBQUFlLEFBQ2YsNEJBQUMsY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBQVEsYUFBUixBQUFnQixlQUFrQixPQUFsQyxnQkFMSixBQUtJLEFBQ0Esc0JBQUMsY0FBRDs7OEJBQUE7Z0NBQUEsQUFDSztBQURMO0FBQUEsdUJBQ0ssQUFBUSxXQUFSLEFBQWtCLHVCQUNuQixBQUFDLHlDQUFPLE9BQVIsTUFBYyxPQUFkLEFBQW9CLFNBQVEsU0FBUyxLQUFyQyxBQUEwQzs4QkFBMUM7Z0NBQUE7QUFBQTthQUFBLEVBUlIsQUFNSSxBQUVJLEFBSUosNEJBQUMsY0FBRDs7OEJBQUE7Z0NBQUEsQUFDSztBQURMO0FBQUEsdUJBQ0ssQUFBUSxXQUFSLEFBQWtCLHVCQUNuQixBQUFDLHlDQUFPLE9BQVIsQUFBYyxRQUFPLE9BQXJCLE1BQTJCLFNBQVMsS0FBcEMsQUFBeUM7OEJBQXpDO2dDQUFBO0FBQUE7YUFBQSxFQWhCUixBQUVBLEFBWUksQUFFSSxBQU1YOzs7OztBQXZEd0IsQSxBQTZEekI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiUmVxdWVzdFJvdy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS95YXNoL2tpY2tzdGFydCJ9