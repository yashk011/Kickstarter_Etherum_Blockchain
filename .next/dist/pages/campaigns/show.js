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

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = require('../../ethereum/campaign.js');

var _campaign2 = _interopRequireDefault(_campaign);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../../ethereum/web3.js');

var _web2 = _interopRequireDefault(_web);

var _Contribute = require('../../components/Contribute.js');

var _Contribute2 = _interopRequireDefault(_Contribute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/yash/kickstart/pages/campaigns/show.js?entry';


var CampaignShow = function (_Component) {
    (0, _inherits3.default)(CampaignShow, _Component);

    function CampaignShow() {
        (0, _classCallCheck3.default)(this, CampaignShow);

        return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
    }

    (0, _createClass3.default)(CampaignShow, [{
        key: 'renderCards',
        value: function renderCards() {
            var _props = this.props,
                balance = _props.balance,
                manager = _props.manager,
                minimumContribution = _props.minimumContribution,
                requestsCount = _props.requestsCount,
                approversCount = _props.approversCount;

            var items = [{
                header: manager,
                meta: 'Address of Manager',
                description: 'The manager created this campaign and also create requests to withdraw money ',
                style: { overflowWrap: 'break-word' }
            }, {
                header: minimumContribution,
                meta: 'Minimum Contribution (Wei)',
                description: 'You must contribute this much minimum contribution to become a Contributor',
                style: { overflowWrap: 'break-word' }
            }, {
                header: requestsCount,
                meta: 'No. of Requests',
                description: 'Request count for given campaign , A request helps us to withdraw money from the contract',
                style: { overflowWrap: 'break-word' }
            }, {
                header: approversCount,
                meta: 'No of Approvals',
                description: 'Approval count gained till date , A majority count of approval approves the request ',
                style: { overflowWrap: 'break-word' }
            }, {
                header: _web2.default.utils.fromWei(balance, 'ether'),
                meta: 'Balance (ether) ',
                description: ' Balance left in the campaign to spend for request issued ',
                style: { overflowWrap: 'break-word' }
            }];

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                }
            }, _react2.default.createElement('h1', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                }
            }, 'Show Address'), _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 92
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 93
                }
            }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 99
                }
            }, _react2.default.createElement(_Contribute2.default, { address: this.props.address, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 101
                }
            }, ' '))));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var campaign, summary;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                campaign = (0, _campaign2.default)(props.query.address); // displays the address of the campaign instance we have deployed

                                _context.next = 3;
                                return campaign.methods.getSummary().call();

                            case 3:
                                summary = _context.sent;

                                console.log(summary);

                                return _context.abrupt('return', {
                                    address: props.query.address,
                                    minimumContribution: summary[0],
                                    balance: summary[1],
                                    requestsCount: summary[2],
                                    approversCount: summary[3],
                                    manager: summary[4]
                                });

                            case 6:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiQ2FtcGFpZ24iLCJDYXJkIiwiR3JpZCIsIndlYjMiLCJDb250cmlidXRlIiwiQ2FtcGFpZ25TaG93IiwicHJvcHMiLCJiYWxhbmNlIiwibWFuYWdlciIsIm1pbmltdW1Db250cmlidXRpb24iLCJyZXF1ZXN0c0NvdW50IiwiYXBwcm92ZXJzQ291bnQiLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwidXRpbHMiLCJmcm9tV2VpIiwicmVuZGVyQ2FyZHMiLCJhZGRyZXNzIiwiY2FtcGFpZ24iLCJxdWVyeSIsIm1ldGhvZHMiLCJnZXRTdW1tYXJ5IiwiY2FsbCIsInN1bW1hcnkiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUNQLEFBQVE7Ozs7QUFDUixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQVUsQUFBTzs7QUFDakIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBZ0I7Ozs7Ozs7OztJLEFBSWpCOzs7Ozs7Ozs7OztzQ0FvQlk7eUJBUU4sS0FSTSxBQVFEO2dCQVJDLEFBR04saUJBSE0sQUFHTjtnQkFITSxBQUlOLGlCQUpNLEFBSU47Z0JBSk0sQUFLTiw2QkFMTSxBQUtOO2dCQUxNLEFBTU4sdUJBTk0sQUFNTjtnQkFOTSxBQU9OLHdCQVBNLEFBT04sQUFHSjs7Z0JBQU07d0JBRUYsQUFDYSxBQUNUO3NCQUZKLEFBRVcsQUFDUDs2QkFISixBQUdrQixBQUNkO3VCQUFPLEVBQUMsY0FORixBQUVWLEFBSVcsQUFBZTtBQUoxQixBQUNJLGFBSE07d0JBU1YsQUFDYSxBQUNUO3NCQUZKLEFBRVcsQUFDUDs2QkFISixBQUdrQixBQUNkO3VCQUFPLEVBQUMsY0FiRixBQVNWLEFBSVcsQUFBZTtBQUoxQixBQUNJO3dCQUtKLEFBQ2EsQUFDVDtzQkFGSixBQUVXLEFBQ1A7NkJBSEosQUFHa0IsQUFDZDt1QkFBTyxFQUFDLGNBbkJGLEFBZVYsQUFJVyxBQUFlO0FBSjFCLEFBQ0k7d0JBS0osQUFDYSxBQUNUO3NCQUZKLEFBRVcsQUFDUDs2QkFISixBQUdrQixBQUNkO3VCQUFPLEVBQUMsY0F6QkYsQUFxQlYsQUFJVyxBQUFlO0FBSjFCLEFBQ0k7d0JBTVEsY0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLFNBRC9CLEFBQ1ksQUFBNkIsQUFDckM7c0JBRkosQUFFVyxBQUNQOzZCQUhKLEFBR2tCLEFBQ2Q7dUJBQU8sRUFBQyxjQS9CaEIsQUFBYyxBQTJCVixBQUlXLEFBQWUsQUFROUI7QUFaSSxBQUNJOztpREFXRCxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQXFCOzhCQUFyQjtnQ0FBUCxBQUFPLEFBQ1Y7QUFEVTthQUFBOzs7O2lDQUtYLEFBRUk7O21DQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBRUk7QUFGSjtBQUFBLGFBQUEsa0JBRUksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBRkosQUFFSSxBQUVELGlDQUFBLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0s7QUFETDtBQUFBLCtCQUNNLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBcUI7OEJBQXJCO2dDQUFBLEFBRUs7QUFGTDtvQkFETCxBQUNLLEFBRUssQUFBSyxBQUlWLGdDQUFDLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7OEJBQXBCO2dDQUFBLEFBRUk7QUFGSjsrQkFFSSxBQUFDLHNDQUFXLFNBQVcsS0FBQSxBQUFLLE1BQTVCLEFBQWtDOzhCQUFsQztnQ0FBQTtBQUFBO2VBZGhCLEFBQ0ksQUFJRyxBQU9LLEFBRUksQUFXbkI7Ozs7O2lIQW5HNEIsQTs7Ozs7aUNBRW5CO0EsMkNBQVcsd0JBQVMsTUFBQSxBQUFNLE1BQWYsQUFBcUIsQSxVQUFVOzs7dUNBRTFCLFNBQUEsQUFBUyxRQUFULEFBQWlCLGFBQWpCLEEsQUFBOEI7O2lDQUE5QztBLG1EQUNOOzt3Q0FBQSxBQUFRLElBQVIsQUFBWTs7OzZDQUdFLE1BQUEsQUFBTSxNQURiLEFBQ21CLEFBQ3RCO3lEQUFzQixRQUZuQixBQUVtQixBQUFRLEFBQzlCOzZDQUFVLFFBSFAsQUFHTyxBQUFRLEFBQ2xCO21EQUFnQixRQUpiLEFBSWEsQUFBUSxBQUN4QjtvREFBaUIsUUFMZCxBQUtjLEFBQVEsQUFDekI7NkNBQVMsUUFOTixBQU1NLEFBQVEsQTtBQU5kLEFBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFWZSxBLEFBdUczQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJzaG93LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL3lhc2gva2lja3N0YXJ0In0=