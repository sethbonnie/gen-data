import gen from '..'
import {expect} from 'chai'

describe('gen.phone(format)', () => {
  describe('when given a format', () => {
    it('generates a number matching the format', () => {
      const formatPattern = /^\+44\s\d{2}\s\d{4}\s\d{4}$/
      const phoneNumber = gen.phone('+44 ## #### ####')
      expect(phoneNumber).to.match(formatPattern)
    })
  })

  describe('when called without a format', () => {
    it('returns the right default format (###)-###-####', () => {
      const defaultPattern = /^\(\d{3}\)-\d{3}-\d{4}$/
      const phoneNumber = gen.phone()
      expect(phoneNumber).to.match(defaultPattern)
    })
  })
})

