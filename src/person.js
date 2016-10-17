const faker = require('faker')

const person = () => ({
  userName: person.userName(),
  firstName: person.firstName(),
  lastName: person.lastName()
})

person.userName = faker.internet.userName
person.firstName = faker.name.firstName
person.lastName = faker.name.lastName
person.fullName = faker.name.findName
person.title = faker.name.title
person.namePrefix = faker.name.prefix
person.nameSuffix = faker.name.suffix

module.exports =  person
