import {expect} from 'chai'
import gen from '..'

describe('gen(spec)', () => {
  describe('when spec is an array', () => {
    it('returns an empty array when given an empty array', () => {
      expect(gen([])).to.eql([])
    })

    it('realizes each spec in the array', () => {
      const spec = [gen.type.internet.email, gen.type.random.number, gen.type.random.boolean]
      const result = gen(spec)

      expect(result[0]).to.be.a('string')
      expect(result[1]).to.be.a('number')
      expect(result[2]).to.be.a('boolean')
    })

    it('returns the results of functions in the array', () => {
      const returnOne = () => 1
      const returnTrue = () => true
      const sideEffectFn = () => { /* stuff */ }
      const spec = [returnOne, returnTrue, sideEffectFn]

      expect(gen(spec)).to.eql([1, true, undefined])
    })

    it('returns any scalar values as is', () => {
      const spec = [1,true,undefined]
      expect(gen(spec)).to.eql(spec)
    })
    
    it('handles recursive specs correctly', () => {
      const spec = [
        {
          name: gen.type.name.firstName,
          phone: gen.type.phone.phoneNumber,
          bio: gen.type.lorem.paragraph
        },
        'scalar',
        () => 'function',
        [1, 2, 3]
      ]
      const result = gen(spec)

      expect(result[0].name).to.be.a('string')
      expect(result[1]).to.eql('scalar')
      expect(result[2]).to.eql('function')
      expect(result[3][0]).to.eql(1)
    })
  })

  describe('when spec is an object', () => {
    it('returns an empty object when given an empty object', () => {
      const spec = {}
      const result = gen(spec)
      expect(result).to.eql({})
    })

    it('realizes each spec in the object', () => {
      const spec = {
        name: gen.type.name.lastName,
        bio: gen.type.lorem.paragraph
      }
      const result = gen(spec)
      expect(result.name).to.be.a('string')
      expect(result.bio).to.be.a('string')
    })

    it('returns the results of function values in the object', () => {
      const spec = {
        number() {
          return Math.random()
        }
      }
      const result = gen(spec)
      expect(result.number).to.be.a('number')
    })

    it('returns any scalar values as is', () => {
      const spec = {
        number: 1,
        string: '',
        nothing: undefined
      }
      const result = gen(spec)

      expect(result.number).to.eql(spec.number)
      expect(result.string).to.eql(spec.string)
      expect(result.nothing).to.eql(spec.nothing)
    })

    it('handles recursive specs correctly', () => {
      const spec = {
        object: {
          number: 1,
          string: '123',
        },
        array: [1, () => '123']
      }
      const result = gen(spec)

      expect(result.object.number).to.be.a('number')
      expect(result.array[1]).to.eql('123')
    })
  })

  describe('when spec is not a collection type', () => {
    it('realizes data specs', () => {
      const name = gen(gen.type.name.firstName)
      const email = gen(gen.type.internet.email)
      expect(name.length).to.be.at.least(1)
      expect(email.length).to.be.at.least(1)
    })

    it('returns scalars as is', () => {
      expect(gen(10)).to.equal(10)
      expect(gen("hello")).to.equal("hello")
      expect(gen(null)).to.equal(null)
      expect(gen(true)).to.equal(true)
      expect(gen(undefined)).to.equal(undefined)
    })
  })
})
