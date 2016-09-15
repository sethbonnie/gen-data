import gen from '..'
import {expect} from 'chai'

describe('gen.random()', () => {
  it('returns a actual value (not undefined)', () => {
    expect(
      gen.random()
    ).not.to.be.undefined
  })
})

describe('gen.random.number(max))', () => {
  it('returns a random number', () => {
    expect(
      gen.random.number()
    ).to.be.a('number')
  })

  it('does not go past the max value', () => {
    const max = 3
    expect(
      gen.random.number(max)
    ).to.be.at.most(max)
  })
})

describe('gen.random.boolean()', () => {
  it('returns a boolean', () => {
    expect(
      gen.random.boolean()
    ).to.be.a('boolean')
  })
})

describe('gen.random.uuid()', () => {
  it('returns the right uuid format', () => {
    const pattern = /^\w{8}-\w{4}-\w{4}-\w{4}-\w{12}$/
    expect(
      gen.random.uuid()
    ).to.match(pattern)
  })
})

describe('gen.random.string(len)', () => {
  it('returns a random string with the given len', () => {
    const len = 1247
    expect(
      gen.random.string(len)
    ).to.have.length(len)
  })
  
  it('defaults to a 16 character string', () => {
    expect(
      gen.random.string()
    ).to.have.length(16)
  })
})

describe('gen.random.locale()', () => {
  it('returns a correctly formatted locale string', () => {
    // 2 lowercase char base, plus optional modifiers (_<chars>)
    const pattern = /^[a-z]{2,4}(_[a-zA-Z]+)*$/
    expect(
      gen.random.locale()
    ).to.match(pattern)
  })
})

describe('gen.random.hexColor()', () => {
  it('returns an rgb color in hex form', () => {
    const pattern = /^#[0-9a-f]{6}$/
    expect(
      gen.random.hexColor()
    ).to.match(pattern)
  })
})

