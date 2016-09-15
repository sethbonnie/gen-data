const faker = require('faker')

const address = () => ({
  street: address.streetAddress(),
  city: address.city(),
  state: address.state(),
  zipCode: address.zipCode()
})

const propsToAssign = [
  'city', 'country', 'countryCode', 'county',
  'state', 'stateAbbr', 'latitude', 'longitude',
  'streetName', 'streetAddress', 'secondaryAddress',
  'zipCode'
]

propsToAssign.forEach((prop) => {
  address[prop] = faker.address[prop]
})

// Aliases
address.street = address.streetAddress
address.street2 = address.secondaryAddress

module.exports = address
