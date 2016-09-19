const faker = require('faker')
const randomInt = require('lodash.random')

const random = () => {
  const generators = Object.keys(random)
  const generator = generators[randomInt(generators.length - 1)]
  return random[generator]()
}

random.number = faker.random.number
random.boolean = faker.random.boolean
random.uuid = faker.random.uuid
random.string = (len = 16) => faker.internet.password(len)
random.locale = faker.random.locale
random.hexColor = faker.internet.color

module.exports = random

