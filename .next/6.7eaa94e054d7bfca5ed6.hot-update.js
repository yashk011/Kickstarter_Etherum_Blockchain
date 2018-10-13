webpackHotUpdate(6,{

/***/ 1193:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(69);

var _promise2 = _interopRequireDefault(_promise);

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

var _Layout = __webpack_require__(1168);

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = __webpack_require__(727);

var _semanticUiReact = __webpack_require__(497);

var _campaign = __webpack_require__(1187);

var _campaign2 = _interopRequireDefault(_campaign);

var _RequestRow = __webpack_require__(1194);

var _RequestRow2 = _interopRequireDefault(_RequestRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/yash/kickstart/pages/campaigns/requests/index.js?entry';


var RequestIndex = function (_Component) {
    (0, _inherits3.default)(RequestIndex, _Component);

    function RequestIndex() {
        (0, _classCallCheck3.default)(this, RequestIndex);

        return (0, _possibleConstructorReturn3.default)(this, (RequestIndex.__proto__ || (0, _getPrototypeOf2.default)(RequestIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(RequestIndex, [{
        key: 'renderRows',
        value: function renderRows() {
            var _this2 = this;

            return this.props.requests.map(function (request, index) {
                return (// downward communication trandfer v.v.v.v.imp 
                    _react2.default.createElement(_RequestRow2.default, { key: index,
                        id: index,
                        request: request,
                        address: _this2.props.address,
                        approversCount: _this2.props.approversCount, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 41
                        }
                    })
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var Header = _semanticUiReact.Table.Header,
                Row = _semanticUiReact.Table.Row,
                HeaderCell = _semanticUiReact.Table.HeaderCell,
                Body = _semanticUiReact.Table.Body;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, ' Requests '), _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests/new', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, floated: 'right', style: { marginBottom: '10px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, 'Add Request'))), _react2.default.createElement(_semanticUiReact.Table, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, _react2.default.createElement(Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }, _react2.default.createElement(Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, ' ID'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, ' Description'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }, ' Amount'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            }, ' Reciepient '), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }, ' Approval'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }, ' Approve'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }, ' Finalize'))), _react2.default.createElement(Body, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                }
            }, this.renderRows())), _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 92
                }
            }, 'Found ', this.props.requestCount, ' requests'))

            // this.renderRows() f=gives an error coz div is rendered inside table body !!!


            ;
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var address, campaign, requestCount, approversCount, requests;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                address = props.query.address;
                                campaign = (0, _campaign2.default)(address);
                                _context.next = 4;
                                return campaign.methods.getRequestsCount().call();

                            case 4:
                                requestCount = _context.sent;
                                _context.next = 7;
                                return campaign.methods.approversCount().call();

                            case 7:
                                approversCount = _context.sent;
                                _context.next = 10;
                                return _promise2.default.all(Array(parseInt(requestCount)).fill().map(function (elements, index) {
                                    return campaign.methods.requests(index).call();
                                }));

                            case 10:
                                requests = _context.sent;

                                console.log(requests);

                                return _context.abrupt('return', { address: address, requests: requests, requestCount: requestCount, approversCount: approversCount });

                            case 14:
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

    return RequestIndex;
}(_react.Component);

exports.default = RequestIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkxpbmsiLCJCdXR0b24iLCJUYWJsZSIsIkNhbXBhaWduIiwiUmVxdWVzdFJvdyIsIlJlcXVlc3RJbmRleCIsInByb3BzIiwicmVxdWVzdHMiLCJtYXAiLCJyZXF1ZXN0IiwiaW5kZXgiLCJhZGRyZXNzIiwiYXBwcm92ZXJzQ291bnQiLCJIZWFkZXIiLCJSb3ciLCJIZWFkZXJDZWxsIiwiQm9keSIsIm1hcmdpbkJvdHRvbSIsInJlbmRlclJvd3MiLCJyZXF1ZXN0Q291bnQiLCJxdWVyeSIsImNhbXBhaWduIiwibWV0aG9kcyIsImdldFJlcXVlc3RzQ291bnQiLCJjYWxsIiwiYWxsIiwiQXJyYXkiLCJwYXJzZUludCIsImZpbGwiLCJlbGVtZW50cyIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFPOzs7O0FBQ2QsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVEsQUFBVzs7QUFDbkIsQUFBUSxBQUFTOztBQUNqQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFnQjs7Ozs7Ozs7O0ksQUFJakI7Ozs7Ozs7Ozs7O3FDQTJCVzt5QkFFVjs7d0JBQU8sQUFBSyxNQUFMLEFBQVcsU0FBWCxBQUFvQixJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVcsT0FBVSxBQUMvQztBQUFTLHVCQUNMO29DQUFBLEFBQUMsc0NBQVcsS0FBWixBQUFpQixBQUNiOzRCQURKLEFBQ1MsQUFDTDtpQ0FGSixBQUVjLEFBQ1Y7aUNBQVMsT0FBQSxBQUFLLE1BSGxCLEFBR3dCLEFBQ3BCO3dDQUFnQixPQUFBLEFBQUssTUFKekIsQUFJK0I7c0NBSi9CO3dDQURKLEFBQ0ksQUFRUjtBQVJROzs7QUFGVCxBQUFPLEFBV1QsYUFYUzs7OztpQ0FhTDtnQkFBQSxBQUVFLFNBRkYsQUFFc0MsdUJBRnRDLEFBRUU7Z0JBRkYsQUFFVyxNQUZYLEFBRXNDLHVCQUZ0QyxBQUVXO2dCQUZYLEFBRWlCLGFBRmpCLEFBRXNDLHVCQUZ0QyxBQUVpQjtnQkFGakIsQUFFOEIsT0FGOUIsQUFFc0MsdUJBRnRDLEFBRThCLEFBRW5DOzttQ0FFSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUVLO0FBRkw7QUFBQSxhQUFBLGtCQUVLLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUZMLEFBRUssQUFDQSwrQkFBQSxBQUFDLDhCQUFLLHVCQUF1QixLQUFBLEFBQUssTUFBNUIsQUFBa0MsVUFBeEM7OEJBQUE7Z0NBQUEsQUFFRztBQUZIOytCQUVHLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUMseUNBQU8sU0FBUixNQUFnQixTQUFoQixBQUF3QixTQUFRLE9BQU8sRUFBQyxjQUF4QyxBQUF1QyxBQUFnQjs4QkFBdkQ7Z0NBQUE7QUFBQTtlQU5aLEFBR0ssQUFFRyxBQUNJLEFBT1Isa0NBQUEsQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRDs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRDs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLHdCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUZKLEFBRUksQUFDQSxpQ0FBQyxjQUFEOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFISixBQUdJLEFBQ0EsNEJBQUMsY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBSkosQUFJSSxBQUNBLGlDQUFDLGNBQUQ7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUxKLEFBS0ksQUFDQSw4QkFBQyxjQUFEOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFOSixBQU1JLEFBQ0EsNkJBQUMsY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBVFosQUFDSSxBQUNJLEFBT0ksQUFJUCxnQ0FBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUVJO0FBRko7QUFBQSxvQkExQlQsQUFhSSxBQWFLLEFBRUksQUFBSyxBQU1kLGdDQUFBLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUNXLGVBQUEsQUFBSyxNQURoQixBQUNzQixjQW5DMUIsQUFrQ0ksQUFNWjs7QUExQ0ksQUFnREQ7Ozs7Ozs7O2lIQTNGOEIsQTs7Ozs7aUNBRWxCO0EsMENBQVksTSxBQUFNLE1BQWxCLEFBR0QsQTtBLDJDQUFXLHdCLEFBQUEsQUFBUzs7dUNBRUMsU0FBQSxBQUFTLFFBQVQsQUFBaUIsbUJBQWpCLEFBQW9DLEE7O2lDQUF6RDtBOzt1Q0FFdUIsU0FBQSxBQUFTLFFBQVQsQUFBaUIsaUIsQUFBakIsQUFBa0M7O2lDQUF6RDtBOzt5REFFaUIsQUFBUSxVQUNyQixTQUFOLEFBQU0sQUFBUyxlQUFmLEFBQThCLE9BQTlCLEFBQXFDLElBQUksVUFBQSxBQUFDLFVBQUQsQUFBWSxPQUFVLEFBQzNEOzJDQUFPLFNBQUEsQUFBUyxRQUFULEFBQWlCLFNBQWpCLEFBQTBCLE9BQWpDLEFBQU8sQUFBaUMsQUFDM0M7QUFGRCxBLEFBRG1CLGlDQUNuQixDQURtQjs7aUNBQWpCO0Esb0RBTU47O3dDQUFBLEFBQVEsSUFBUixBQUFZOztpRUFFTCxFQUFDLFNBQUQsU0FBVyxVQUFYLFVBQXNCLGNBQXRCLGNBQXNDLGdCQUF0QyxBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdEJZLEEsQUFrRzNCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL3lhc2gva2lja3N0YXJ0In0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/yash/kickstart/pages/campaigns/requests/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/yash/kickstart/pages/campaigns/requests/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/campaigns/requests")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi43ZWFhOTRlMDU0ZDdiZmNhNWVkNi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzPzM0ZTJkMTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IHtMaW5rfSBmcm9tICcuLi8uLi8uLi9yb3V0ZXMuanMnO1xuaW1wb3J0IHtCdXR0b24gLCBUYWJsZX0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IENhbXBhaWduIGZyb20gJy4uLy4uLy4uL2V0aGVyZXVtL2NhbXBhaWduJztcbmltcG9ydCBSZXF1ZXN0Um93IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvUmVxdWVzdFJvdyc7XG5cblxuXG5jbGFzcyBSZXF1ZXN0SW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHByb3BzKSB7XG5cbiAgICAgICAgY29uc3Qge2FkZHJlc3N9ID0gIHByb3BzLnF1ZXJ5O1xuXG5cbiAgICAgICAgY29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbihhZGRyZXNzKTtcblxuICAgICAgICBjb25zdCByZXF1ZXN0Q291bnQgPSBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmdldFJlcXVlc3RzQ291bnQoKS5jYWxsKCk7XG5cbiAgICAgICAgY29uc3QgYXBwcm92ZXJzQ291bnQgPSBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmFwcHJvdmVyc0NvdW50KCkuY2FsbCgpO1xuXG4gICAgICAgIGNvbnN0IHJlcXVlc3RzID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICBBcnJheShwYXJzZUludChyZXF1ZXN0Q291bnQpKS5maWxsKCkubWFwKChlbGVtZW50cyAsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbXBhaWduLm1ldGhvZHMucmVxdWVzdHMoaW5kZXgpLmNhbGwoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgKTsgICAgICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcXVlc3RzKTtcblxuICAgICAgICByZXR1cm4ge2FkZHJlc3MgLCByZXF1ZXN0cyAsIHJlcXVlc3RDb3VudCAgLCBhcHByb3ZlcnNDb3VudH07XG5cbiAgICAgICAgY29uc29sZS5sb2coYXBwcm92ZXJzQ291bnQpO1xuICAgIH1cblxuICAgIHJlbmRlclJvd3MoKSB7XG5cbiAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5yZXF1ZXN0cy5tYXAoKHJlcXVlc3QgLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICggLy8gZG93bndhcmQgY29tbXVuaWNhdGlvbiB0cmFuZGZlciB2LnYudi52LmltcCBcbiAgICAgICAgICAgICAgICA8UmVxdWVzdFJvdyBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICBpZCA9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0ID17cmVxdWVzdH1cbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzcz17dGhpcy5wcm9wcy5hZGRyZXNzfVxuICAgICAgICAgICAgICAgICAgICBhcHByb3ZlcnNDb3VudD17dGhpcy5wcm9wcy5hcHByb3ZlcnNDb3VudH0+XG5cbiAgICAgICAgICAgICAgICA8L1JlcXVlc3RSb3c+XG4gICAgICAgICAgICApO1xuICAgICAgIH0pO1xuICAgIH1cblxucmVuZGVyKCkge1xuXG4gICAgY29uc3Qge0hlYWRlciAsIFJvdyAsIEhlYWRlckNlbGwgLCBCb2R5fSA9IFRhYmxlO1xuXG4gICAgcmV0dXJuKCAgIFxuICAgICAgICBcbiAgICAgICAgPExheW91dD5cblxuICAgICAgICAgICAgIDxoMz4gUmVxdWVzdHMgPC9oMz5cbiAgICAgICAgICAgICA8TGluayByb3V0ZSA9IHtgL2NhbXBhaWducy8ke3RoaXMucHJvcHMuYWRkcmVzc30vcmVxdWVzdHMvbmV3YH0+XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgZmxvYXRlZD1cInJpZ2h0XCIgc3R5bGU9e3ttYXJnaW5Cb3R0b20gOiAnMTBweCd9fT4gXG4gICAgICAgICAgICAgICAgICAgICAgICBBZGQgUmVxdWVzdFxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgIDxUYWJsZT5cbiAgICAgICAgICAgICAgICA8SGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+IElEPC9IZWFkZXJDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+IERlc2NyaXB0aW9uPC9IZWFkZXJDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+IEFtb3VudDwvSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXJDZWxsPiBSZWNpZXBpZW50IDwvSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXJDZWxsPiBBcHByb3ZhbDwvSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXJDZWxsPiBBcHByb3ZlPC9IZWFkZXJDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+IEZpbmFsaXplPC9IZWFkZXJDZWxsPlxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICA8L0hlYWRlcj5cblxuICAgICAgICAgICAgICAgICA8Qm9keT5cblxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJSb3dzKCl9IFxuXG4gICAgICAgICAgICAgICAgPC9Cb2R5PlxuXG4gICAgICAgICAgICA8L1RhYmxlPlxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIEZvdW5kIHt0aGlzLnByb3BzLnJlcXVlc3RDb3VudH0gcmVxdWVzdHMgXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L0xheW91dD4gICAgICAgIFxuXG4vLyB0aGlzLnJlbmRlclJvd3MoKSBmPWdpdmVzIGFuIGVycm9yIGNveiBkaXYgaXMgcmVuZGVyZWQgaW5zaWRlIHRhYmxlIGJvZHkgISEhXG4gICAgICAgXG4gICAgICAgXG4gICAgKTsgXG5cbiAgICBcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RJbmRleDtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThCQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUpBO0FBUUE7QUFSQTs7O0FBU0E7Ozs7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTs7QUFBQTtBQUVBO0FBRkE7QUFBQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFGQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBT0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBSUE7QUFFQTtBQUZBO0FBQUE7O0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVdBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUEzRkE7QUFBQTtBQUdBOztBQUVBO0FBQ0E7QUFEQTs7O0FBRUE7QUFDQTtBQURBOzs7QUFFQTtBQUVBO0FBREE7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9