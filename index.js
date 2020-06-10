exports.check = function (vendorCode) {
  if (typeof vendorCode == 'string' && vendorCode.length > 0) {
    var addon = require('bindings')('hello')
    return addon.hello(vendorCode)
  } else {
    return 0
  }
}
