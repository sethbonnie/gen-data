import gen from '..'
import {expect} from 'chai'

describe('gen.internet.avatar()', () => {
  it('returns a url to an image', () => {
    const urlPattern = /^https?:\/\/.+128\.(png|jpg)$/
    const avatar = gen.internet.avatar()
    expect(avatar).to.match(urlPattern)
  })
})

describe('gen.internet.domain()', () => {
  it('returns a domain name with a tld', () => {
    const domainPattern = /[a-zA-Z\-0-9]+\.[a-z]{2,}/
    const domain = gen.internet.domain()
    expect(domain).to.match(domainPattern)
  })
})

describe('gen.internet.email()', () => {
  it('returns a valid email address', () => {
    const emailPattern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const email = gen.internet.email()
    expect(email).to.match(emailPattern)
  })
})

describe('gen.internet.image()', () => {
  it('returns a url to a random image', () => {
    const urlPattern = /http:\/\/\w+.+/
    const imageUrl = gen.internet.image()
    expect(imageUrl).to.match(urlPattern)
  })
})

describe('gen.internet.ip()', () => {
  it('returns a correctly formatted ip addresss', () => {
    const ipAddrPattern = /^(?:\d{1,3}\.){3}\d{1,3}$/
    const ipAddr = gen.internet.ip()
    expect(ipAddr).to.match(ipAddrPattern)
  })
})

describe('gen.internet.mac()', () => {
  it('returns a correctly formatted mac address', () => {
    const macAddrPattern = /^(?:[0-9a-f]{2}:){5}[0-9a-f]{2}$/
    const macAddr = gen.internet.mac()
    expect(macAddr).to.match(macAddrPattern)
  })
})

describe('gen.internet.password()', () => {
  it('returns a non-empty string', () => {
    const password = gen.internet.password()
    expect(password).to.be.a('string')
    expect(password).to.not.be.empty
  })

  it('is at least 8 characters long', () => {
    const password = gen.internet.password()
    expect(password).to.have.length.above(7)
  })
})

describe('gen.internet.protocol()', () => {
  it('returns a valid protocol', () => {
    const protocols = ['http', 'https']
    const protocol = gen.internet.protocol()
    expect(protocol).to.be.oneOf(protocols)
  })
})

describe('gen.internet.tld()', () => {
  it('returns a valid tld', () => {
    const tldPattern = /^[a-z]+$/
    const tld = gen.internet.tld()
    expect(tld).to.match(tldPattern)
  })
})

describe('gen.internet.userAgent()', () => {
  it('returns a valid user agent', () => {

  })
})

describe('gen.internet.userName()', () => {
  it('returns a nonempty string()', () => {
    const userName = gen.internet.userName()
    expect(userName).to.be.a('string')
    expect(userName).to.not.be.empty
  })
})

describe('gen.internet.url()', () => {
  it('returns a valid url', () => {
    const urlPattern = /^https?:\/\/[a-z0-9\-]+\.[a-z]+$/
    const url = gen.internet.url()
    expect(url).to.match(urlPattern)
  })
})
