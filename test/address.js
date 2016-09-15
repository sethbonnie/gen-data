import gen from '..'
import {expect} from 'chai'

// Ex. "76 Easton Village", "172 Gail Path" ... "<number> <streetName>"
const streetAddressPattern = /^\d+.+\D+$/

// Ex. "Suite 42", "Apt. 234" ... "<typeOfAddr> <number>"
const secondaryAddressPattern = /^\D+.+\d+$/

describe('gen.address()', () => {
  it('returns a standard address', () => {
    // Standard meaning: street, city, state, zip
    const address = gen.address()
    expect(address).to.have.all.keys(
      ['street', 'street2', 'city', 'state', 'zipCode']
    )
  })
})

describe('gen.address.city()', () => {
  it('returns a non-empty string', () => {
    const city = gen.address.city()

    expect(city).to.be.a('string')
    expect(city).to.have.length.above(0)
  })
})

describe('gen.address.country()', () => {
  it('returns an uppercase, 2 character string', () => {
    const country = gen.address.country()

    expect(country).to.be.a('string')
    expect(country).to.have.length.above(0)
  })
})

describe('gen.address.countryCode()', () => {
  it('returns an uppercase, 2 character string', () => {
    const countryCode = gen.address.countryCode()

    expect(countryCode).to.match(/[A-Z]{2}/)
  })
})

describe('gen.address.county()', () => {
  it('returns a non-empty string', () => {
    const county = gen.address.county()

    expect(county).to.be.a('string')
    expect(county).to.have.length.above(0)
  })
})

describe('gen.address.latitude()', () => {
  it('returns a number between -90 and +90', () => {
    const latitude = parseFloat(gen.address.latitude())

    expect(latitude).to.be.a('number')
    expect(latitude).to.be.at.least(-90)
    expect(latitude).to.be.at.most(+90)
  })
})

describe('gen.address.longitude()', () => {
  it('returns a number between -180 and +180', () => {
    const latitude = parseFloat(gen.address.latitude())

    expect(latitude).to.be.a('number')
    expect(latitude).to.be.at.least(-180)
    expect(latitude).to.be.at.most(+180)
  })
})

describe('gen.address.state()', () => {
  it('returns a non-empty string', () => {
    const state = gen.address.state()

    expect(state).to.be.a('string')
    expect(state).to.have.length.above(0)
  })
})

describe('gen.address.stateAbbr()', () => {
  it('returns an uppercase, 2 character string', () => {
    const countryCode = gen.address.countryCode()

    expect(countryCode).to.match(/[A-Z]{2}/)
  })
})

describe('gen.address.streetName()', () => {
  it('returns a non-empty string', () => {
    const streetName = gen.address.streetName()

    expect(streetName).to.be.a('string')
    expect(streetName).to.have.length.above(0)
  })
})

describe('gen.address.streetAddress()', () => {
  it('returns the right format for a street address', () => {
    expect(gen.address.streetAddress()).to.match(streetAddressPattern)
  })
})

describe('gen.address.secondaryAddress()', () => {
  it('returns the right format for a secondary address', () => {
    expect(gen.address.secondaryAddress()).to.match(secondaryAddressPattern)
  })
})

describe('gen.address.street', () => {
  it('returns the right format for a street address', () => {
    expect(gen.address.street()).to.match(streetAddressPattern)
  })
})

describe('gen.address.street2', () => {
  it('returns the right format for a secondary address', () => {
    expect(gen.address.street2()).to.match(secondaryAddressPattern)
  })
})

describe('gen.address.zipCode()', () => {
  it('returns the right format for zipcodes', () => {
    const zipCodePattern = /^\d{5}(-\d{4})?$/
    expect(gen.address.zipCode()).to.match(zipCodePattern)
  })
})

