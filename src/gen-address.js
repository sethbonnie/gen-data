const faker = require('faker')

const address = () => ({
  street: address.street(),
  street2: address.street2(),
  city: address.city(),
  state: address.stateAbbr(),
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

