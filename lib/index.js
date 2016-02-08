/**
 * Modules
 */

var slice = require('@f/slice')

/**
 * Expose upon
 */

module.exports = upon

/**
 * upon
 */

function upon (/* ...args */) {
  var args = slice(arguments)
  var self = this

  return function (fn) {
    return fn.apply(self, args)
  }
}
