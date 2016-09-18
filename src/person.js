const faker = require('faker')

const person = () => ({
  username: person.username(),
  firstname: person.firstname(),
  lastname: person.lastname()
})

person.username = person.userName = faker.internet.userName
person.firstname = person.firstName = faker.name.firstName
person.lastname = person.lastName = faker.name.lastName
person.fullname = person.fullName = faker.name.findName
person.title = faker.name.title
person.namePrefix = faker.name.prefix
person.nameSuffix = faker.name.suffix

module.exports =  person

