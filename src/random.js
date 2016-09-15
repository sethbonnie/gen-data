const faker = require('faker')
const _random = require('lodash/random')

const generators = [
  'number',
  'boolean',
  'uuid',
  'string',
  'locale',
  'hexColor'
]

const random = () => {
  const generator = generators[_random(generators.length)]
  return random[generator]()
}

random.number = faker.random.number
random.boolean = faker.random.boolean
random.uuid = faker.random.uuid
random.string = (len = 16) => faker.internet.password(len)
random.locale = faker.random.locale
random.hexColor = faker.internet.color

module.exports = random

