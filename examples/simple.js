webpackJsonp([1],{

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(130);


/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _promise = __webpack_require__(18);

var _promise2 = _interopRequireDefault(_promise);

var _asyncValidator = __webpack_require__(35);

var _asyncValidator2 = _interopRequireDefault(_asyncValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var schema = new _asyncValidator2['default']({
  name: {
    type: 'string',
    required: true,
    min: 5,
    max: 10
  },
  address: {
    type: 'object',
    required: true,
    fields: {
      province: {
        type: 'string',
        required: true,
        min: 4
      },
      city: {
        type: 'string',
        message: 'custom message',
        min: 5
      },
      async: {
        asyncValidator: function asyncValidator(rule, value, callback) {
          setTimeout(function () {
            callback(rule.message);
          }, 100);
        },

        message: 'address async fails'
      }
    }
  },
  async: {
    asyncValidator: function asyncValidator(rule, value) {
      return new _promise2['default'](function (resolve, reject) {
        setTimeout(function () {
          reject([new Error(rule.message)]);
        }, 100);
      });
    },

    message: 'async fails'
  }
}); /* eslint no-console:0 no-unused-vars:0 */

schema.validate({
  name: 2,
  address: {
    city: 2
  },
  async: '2'
}, function (errors, fields) {
  console.log('errors');
  console.log(errors);
  console.log('fields');
  console.log(fields);
})['catch'](function (_ref) {
  var errors = _ref.errors,
      fields = _ref.fields;

  console.log(errors, fields);
});

console.log('end');

/***/ })

},[129]);
//# sourceMappingURL=simple.js.map