const gen = (spec) => {
  if (typeof spec === 'number' ||
      typeof spec === 'string' ||
      typeof spec === 'undefined' ||
      typeof spec === 'boolean' ||
      spec === null)
    return spec

  if (typeof spec === 'function')
    return spec()

  if (spec instanceof Array) {
    return spec.map((s) => gen(s))
  }

  let result = {}

  for (let k in spec) {
    result[k] = gen(spec[k])
  }
  return result
}

gen.address = require('./src/address')
gen.random = require('./src/random')
gen.person = require('./src/person')
gen.system = require('./src/system')

module.exports = gen
