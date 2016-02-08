/**
 * Imports
 */

var upon = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.ok(upon(4)(isEven))
  t.notOk(upon(4)(isOdd))
  t.deepEqual([isEven, isOdd].map(upon(4)), [true, false])

  t.end()
})

/**
 * Helpers
 */

function isEven (n) {
  return n % 2 === 0
}

function isOdd (n) {
  return !isEven(n)
}
