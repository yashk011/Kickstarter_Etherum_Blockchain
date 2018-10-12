'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;

// if we are in browser and using metamask 

if (typeof window !== "undefined") {
    web3 = new _web2.default(window.web3.currentProvider);
}
// if we are in server and we are not  using metamask 
else {
        var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/fcd6f7b51bd044adb25417faf10dd526');

        web3 = new _web2.default(provider);
    }

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQOzs7Ozs7QUFHQSxJQUFJLFlBQUo7O0FBRUE7O0FBRUEsSUFBRyxPQUFPLEFBQVAsV0FBa0IsQUFBckIsYUFDQSxBQUNJO1dBQU8sQUFBSSxBQUFKLGtCQUFTLE9BQU8sQUFBUCxLQUFZLEFBQXJCLEFBQVAsQUFFSDs7QUFDRCxBQUxBO0tBT0EsQUFDSTtZQUFNLFdBQVcsSUFBSSxjQUFLLEFBQUwsVUFBZSxBQUFuQixhQUNqQixBQURpQixBQUFqQixBQUdBOztlQUFPLEFBQUksQUFBSixrQkFBUyxBQUFULEFBQVAsQUFFSDtBQUVEOztrQkFBZSxBQUFmIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiL2hvbWUveWFzaC9raWNrc3RhcnQifQ==