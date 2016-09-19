const faker = require('faker')
const randomInt = require('lodash.random')

const lorem = () => {
  const generators = Object.keys(lorem)
  const generator = generators[randomInt(generators.length - 1)]
  return lorem[generator]()
}

const propsToAssign = [
  'word', 'words', 'sentence', 'sentences',
  'lines', 'text', 'paragraph', 'paragraphs'
]

propsToAssign.forEach((prop) => {
  lorem[prop] = faker.lorem[prop]
})

module.exports = lorem

