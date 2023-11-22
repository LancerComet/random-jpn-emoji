const assert = require('assert')

const { happy, sad, shock, helpless } = require('./index')

assert(typeof happy() === 'string')
assert(typeof sad() === 'string')
assert(typeof shock() === 'string')
assert(typeof helpless() === 'string')
