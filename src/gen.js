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

module.exports = gen