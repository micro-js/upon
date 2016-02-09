/**
 * Expose upon
 */

module.exports = upon

/**
 * upon
 */

function upon (/* ...args */) {
  var args = []
  var self = this

  // Write out inline for loop to avoid v8 optimization bailout:
  // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments
  for (var i = 0; i < arguments.length; i++) {
    args.push(arguments[i])
  }

  return function (fn) {
    return fn.apply(self, args)
  }
}
