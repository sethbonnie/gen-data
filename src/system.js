const faker = require('faker')

const system = {}
const propsToAssign = [ 
  'fileName', 'commonFileName', 'mimeType', 'commonFileType',
  'commonFileExt', 'fileType', 'fileExt', 'semver'
]

propsToAssign.forEach((prop) => {
  system[prop] = faker.system[prop]
})

module.exports = system

