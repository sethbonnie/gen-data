const faker = require('faker')
const randomInt = require('lodash/random')

const date = () => {
  const generators = ['future', 'past', 'recent']
  const generator = generators[randomInt(generators.length - 1)]
  return date[generator]()
}

const propsToAssign = [
  'between', 'future', 'month', 'past', 'recent', 'weekday'
]

propsToAssign.forEach((prop) => {
  date[prop] = faker.date[prop]
})

module.exports = date

