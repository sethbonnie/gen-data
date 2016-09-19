const faker = require('faker')

const internet = {}
const propsToAssign = [
  'avatar', 'email', 'password', 'mac', 
  'userAgent', 'userName', 'ip', 'url', 'protocol'
]

propsToAssign.forEach((prop) => {
  internet[prop] = faker.internet[prop]
})

internet.domain = faker.internet.domainName
internet.image = faker.image.imageUrl
internet.tld = faker.internet.domainSuffix
internet.username = internet.userName

module.exports = internet

