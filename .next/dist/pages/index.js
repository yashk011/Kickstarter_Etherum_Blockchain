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

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../components/Layout.js');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/yash/kickstart/pages/index.js?entry';


var CampaignIndex = function (_Component) {
    (0, _inherits3.default)(CampaignIndex, _Component);

    function CampaignIndex() {
        (0, _classCallCheck3.default)(this, CampaignIndex);

        return (0, _possibleConstructorReturn3.default)(this, (CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(CampaignIndex, [{
        key: 'renderCampaigns',

        /* async componentDidMount(){
             const campaigns = await factory.methods.getDeployedCampaigns().call();
            console.log(campaigns);
         } */

        value: function renderCampaigns() {

            var items = this.props.campaigns.map(function (address) {
                return {
                    description: _react2.default.createElement(_routes.Link, { route: '/campaigns/' + address, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 30
                        }
                    }, _react2.default.createElement('a', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 31
                        }
                    }, 'View Campaign')),
                    fluid: true,
                    header: address
                };
            });

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, ' Open Camapigns '), _react2.default.createElement(_routes.Link, { route: '/campaigns/new', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { floated: 'right', content: 'Create Campaign', icon: 'plus', primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }))), this.renderCampaigns()));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var campaigns;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _factory2.default.methods.getDeployedCampaigns().call();

                            case 2:
                                campaigns = _context.sent;
                                return _context.abrupt('return', { campaigns: campaigns });

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps() {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return CampaignIndex;
}(_react.Component);

// Necessary to export from index file

exports.default = CampaignIndex;

/*

//functional component 

export default ()=> {
    return <h1> This is the camapign list page !!</h1>
}

*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiZmFjdG9yeSIsIkNvbXBvbmVudCIsIkNhcmQiLCJCdXR0b24iLCJMYXlvdXQiLCJMaW5rIiwiQ2FtcGFpZ25JbmRleCIsIml0ZW1zIiwicHJvcHMiLCJjYW1wYWlnbnMiLCJtYXAiLCJkZXNjcmlwdGlvbiIsImFkZHJlc3MiLCJmbHVpZCIsImhlYWRlciIsInJlbmRlckNhbXBhaWducyIsIm1ldGhvZHMiLCJnZXREZXBsb3llZENhbXBhaWducyIsImNhbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFhLEFBQ3BCLEFBQVE7Ozs7QUFDUixBQUFRLEFBQU07O0FBQ2QsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVEsQUFBVzs7Ozs7OztJLEFBRWI7Ozs7Ozs7Ozs7YUFVRjs7Ozs7OzswQ0FPaUIsQUFFYjs7Z0JBQU0sYUFBUSxBQUFLLE1BQUwsQUFBVyxVQUFYLEFBQXFCLElBQUksbUJBQVcsQUFDOUM7O2lEQUVJLEFBQUMsOEJBQUssdUJBQU4sQUFBNkI7c0NBQTdCO3dDQUFBLEFBQ0k7QUFESjtxQkFBQSxrQkFDSSxjQUFBOztzQ0FBQTt3Q0FBQTtBQUFBO0FBQUEsdUJBSEQsQUFFSCxBQUNJLEFBSUo7MkJBUEcsQUFPSyxBQUNSOzRCQVJKLEFBQU8sQUFRTSxBQUVoQjtBQVZVLEFBQ0g7QUFGUixBQUFjLEFBYWQsYUFiYzs7aURBYVAsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFxQjs4QkFBckI7Z0NBQVAsQUFBTyxBQUNWO0FBRFU7YUFBQTs7OztpQ0FJWCxBQUNJO21DQUNBLEFBQUM7OzhCQUFEO2dDQUFBLEFBRUs7QUFGTDtBQUFBLGFBQUEsa0JBRUssY0FBQTs7OEJBQUE7Z0NBQUEsQUFDRztBQURIO0FBQUEsK0JBQ0csY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREgsQUFDRyxBQUVBLHFDQUFBLEFBQUMsOEJBQUssT0FBTixBQUFjOzhCQUFkO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDLHlDQUFPLFNBQVIsQUFBa0IsU0FBUSxTQUExQixBQUFvQyxtQkFBa0IsTUFBdEQsQUFBNEQsUUFBTyxTQUFuRTs4QkFBQTtnQ0FMWCxBQUdHLEFBQ0ksQUFDSSxBQUlQO0FBSk87dUJBUmhCLEFBQ0EsQUFFSyxBQVNJLEFBQUssQUFNakI7Ozs7Ozs7Ozs7Ozt1Q0FuRDJCLGtCQUFBLEFBQVEsUUFBUixBQUFnQix1QkFBaEIsQUFBdUMsQTs7aUNBQXpEO0E7aUVBRUMsRUFBQyxXQUFELEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFOYSxBOztBQTJENUIsQUFFQTs7a0JBQUEsQUFBZTs7QUFFZiIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS95YXNoL2tpY2tzdGFydCJ9