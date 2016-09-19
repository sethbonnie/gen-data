import gen from '..'
import {expect} from 'chai'

describe('gen.date()', () => {
  it('returns a random date', () => {
    const date = gen.date()
    expect(date).to.be.an.instanceof(Date)
  })
})

describe('gen.date.past()', () => {
  it('returns a date some time in the past', () => {
    const now = new Date()
    const past = gen.date.past()
    expect(past).to.be.below(now)
  })
})

describe('gen.date.future()', () => {
  it('returns a date some time in the future', () => {
    const now = new Date()
    const future = gen.date.future()
    expect(future).to.be.above(now)
  })
})

describe('gen.date.between(a, b)', () => {
  it('returns a datetime between the two given dates', () => {
    const days = 24 * 60 * 60 * 1000
    const now = new Date()
    const later = new Date(now.getTime() + (3 * days))
    const inBetween = gen.date.between(now, later)

    expect(inBetween).to.be.above(now)
    expect(inBetween).to.be.below(later)
  })
})

describe('gen.date.recent()', () => {
  it('returns a recent date', () => {
    const recent = gen.date.recent()
    const now = new Date()
    expect(now.getMonth()).to.equal(recent.getMonth())
    expect(now.getFullYear()).to.equal(recent.getFullYear())
  })
})

describe('gen.date.month()', () => {
  it('returns the name of a month', () => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ]
    const month = gen.date.month()
    expect(month).to.be.oneOf(months)
  })
})

describe('gen.date.weekday()', () => {
  it('returns a day of the week', () => {
    const weekdays = [
      'Sunday', 'Monday', 'Tuesday', 'Wednesday', 
      'Thursday', 'Friday', 'Saturday'
    ]
    const weekday = gen.date.weekday()
    expect(weekday).to.be.oneOf(weekdays)
  })
})

