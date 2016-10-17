import gen from '..'
import {expect} from 'chai'

describe('gen.person()', () => {
  it('returns an object with the correct keys', () => {
    const person = gen.person()

    expect(person.userName).to.be.a('string')
    expect(person.firstName).to.be.a('string')
    expect(person.lastName).to.be.a('string')
  })
})

describe('gen.person.userName()', () => {
  it('returns a string greater than 3 characters', () => {
    const userName = gen.person.userName()
    expect(userName).to.be.a('string')
    expect(userName).to.have.length.above(3)
  })
})

describe('gen.person.firstName()', () => {
  it('returns a non-empty string with alphabetical chars', () => {
    const pattern = /^[a-zA-Z'-]+$/
    const firstName = gen.person.firstName()
    expect(firstName).to.match(pattern)
  })
})

describe('gen.person.lastName()', () => {
  it('returns a non-empty string with alphabetical chars', () => {
    const pattern = /^[a-zA-Z'-]+$/
    const lastName = gen.person.lastName()
    expect(lastName).to.match(pattern)
  })
})

describe('gen.person.fullName()', () => {
  it('returns a non-empty string with only alphabetical chars', () => {
    // Has a first and last name, don't match the ends in case of prefixes/suffixes
    const pattern = /[a-zA-Z]+\s[a-zA-Z]+/
    const fullName = gen.person.fullName()
    expect(fullName).to.match(pattern)
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
