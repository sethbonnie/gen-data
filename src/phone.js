const faker = require('faker')

const phone = (format='(###)-###-####') => {
  return faker.phone.phoneNumber(format)
}

module.exports = phone

