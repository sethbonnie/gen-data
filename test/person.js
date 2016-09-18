import gen from '..'
import {expect} from 'chai'

describe('gen.person()', () => {
  it('returns an object with the correct keys', () => {
    const person = gen.person()

    expect(person.username).to.be.a('string')
    expect(person.firstname).to.be.a('string')
    expect(person.lastname).to.be.a('string')
  })
})

describe('gen.person.username()', () => {
  it('returns a string greater than 3 characters', () => {
    const username = gen.person.username()
    expect(username).to.be.a('string')
    expect(username).to.have.length.above(3)
  })
})

describe('gen.person.firstname()', () => {
  it('returns a non-empty string with alphabetical chars', () => {
    const pattern = /^[a-zA-Z'-]+$/
    const firstname = gen.person.firstname()
    expect(firstname).to.match(pattern)
  })
})

describe('gen.person.lastname()', () => {
  it('returns a non-empty string with alphabetical chars', () => {
    const pattern = /^[a-zA-Z'-]+$/
    const lastname = gen.person.lastname()
    expect(lastname).to.match(pattern)
  })
})

describe('gen.person.fullname()', () => {
  it('returns a non-empty string with only alphabetical chars', () => {
    // Has a first and last name, don't match the ends in case of prefixes/suffixes
    const pattern = /[a-zA-Z]+\s[a-zA-Z]+/
    const fullname = gen.person.fullname()
    expect(fullname).to.match(pattern)
  })
})

describe('gen.person.title()', () => {
  it('returns a non-empty string', () => {
    const title = gen.person.title()
    expect(title).to.be.a('string')
    expect(title).to.not.be.empty
  })
})

describe('gen.person.namePrefix()', () => {
  it('returns a string not longer than 5 chars', () => {
    const prefix = gen.person.namePrefix()
    expect(prefix).to.be.a('string')
    expect(prefix).to.have.length.below(5)
  })
})

describe('gen.person.nameSuffix()', () => {
  it('returns a string not longer than 5 chars', () => {
    const suffix = gen.person.nameSuffix()
    expect(suffix).to.be.a('string')
    expect(suffix).to.have.length.below(5)
  })
})

