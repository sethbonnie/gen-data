Gen Data
=========

`gen-data` is a library for, much like the name implies, generating data, usually for prototypes and testing.

Like the name implies, `gen-data` is a library for generating data, mostly in prototyping and testing scenarios.

Installation
-------------

```
$ npm install -D gen-data
```

Or

```
$ yarn add --dev gen-data
```

Usage
-----

```js
import gen from 'gen-data';

// Scalars evaluate to themselves
gen(5) 			// => 5
gen(-98) 		// => -98
gen("hello") 	// => "hello"
gen(false) 		// => false
gen(true) 		// => true

// Collections are iterated over recursively
gen([
	{a: gen.random.number},
	{b: gen.random.string}
])
// => [ { a: 39764 }, { b: 'rSI5X0Vwf8O3Cc_b' } ]

// Generators are simply functions
let _id = 1
const incrementingId = () => _id++
const animal = () => ['cat', 'dog', 'hamster'][gen.random.number(2)]

const pet = {
	name: gen.person.firstName,
	type: animal
}

let users = []
for (let i = 0, user; i < 3; i++) {
	user = gen({
		id: incrementingId,
		username: gen.internet.username,
		profileImage: gen.internet.avatar,
		pets: [pet, pet]
	})
	users.push(user)
}

// Results in
[
  {
    "id": 4,
    "username": "Giles.Vandervort50",
    "profileImage": "https://s3.amazonaws.com/uifaces/faces/twitter/renbyrd/128.jpg",
    "pets": [
      {
        "name": "Cristina",
        "type": "dog"
      },
      {
        "name": "Wanda",
        "type": "cat"
      }
    ]
  },
  {
    "id": 5,
    "username": "Nellie5",
    "profileImage": "https://s3.amazonaws.com/uifaces/faces/twitter/gabrielizalo/128.jpg",
    "pets": [
      {
        "name": "Dariana",
        "type": "hamster"
      },
      {
        "name": "Kristopher",
        "type": "dog"
      }
    ]
  },
  {
    "id": 6,
    "username": "Paolo.Corkery10",
    "profileImage": "https://s3.amazonaws.com/uifaces/faces/twitter/mtolokonnikov/128.jpg",
    "pets": [
      {
        "name": "Hailee",
        "type": "cat"
      },
      {
        "name": "Cody",
        "type": "hamster"
      }
    ]
  }
]
```

`gen-data` wraps [faker](https://github.com/marak/Faker.js/) to provide some useful default generators. Note that the full `faker` api is not exactly mirrored, it's a rough approximation. You can use faker directly if you need any of its generators. The following API covers quite a bit of what one might need and creating more is simply a matter of defining new functions -- generators are simply functions after all.

API
----

`gen(spec) : Any -> Any`

Takes a spec and produces data and generators which are used to describe the data that you want to generate. Generators are can be simple types (`Number`, `String`, `Boolean`, `null`, and `undefined`) which simply evaluate to themselves, collections (arrays and objects) which are iterated over recursively evaluating any nested generators or they are functions which can do a number of operations before returning a value. Essentially, you just pass the shape of what you want your data to look like to `gen()` and it takes cares of giving you something usable.

### Address

`gen.address() : Object`

Generates a random address object.

```js
gen.address()
/* =>
{ street: '588 Blick Parkways',
  street2: 'Apt. 303',
  city: 'Port Enolamouth',
  state: 'IA',
  zipCode: '40317-5991' }
*/
```

`gen.address.city() : String`

Generates a random city.

```js
gen.address.city() 		// => 'East Danikaland'
```

`gen.address.country() : String`

Returns the name of a randomly selected country.

```js
gen.address.country() 	// => 'Cote d\'Ivoire'
```

`gen.address.countryCode() : String`

Generates a random country code.

```js
gen.address.countryCode() 	// => 'TO'
```

`gen.address.county() : String`

Generates a random country.

```js
gen.address.county() 	// => 'Buckinghamshire'
```

`gen.address.latitude() : String`

Generates a random latitude (a value ranging from -90 to 90).

```js
gen.address.latitude() 	// => '48.9096'
```

`gen.address.longitude() : String`

Generates a random longitude (a value ranging from -90 to 90).

```js
gen.address.longitude() 	// => '11.8738'
gen.address.longitude()		// => '-163.2458'
```

`gen.address.secondaryAddress() : String`

Generates a random secondary street address.

```js
gen.address.secondaryAddress()	// => 'Suite 264'
```

`gen.address.state() : String`

Generates the name of a random US state.

```js
gen.address.state() 	// => 'Georgia'
gen.address.state() 	// => 'Minnesota'
```

`gen.address.stateAbbr() : String`

Generates a random US state in abbreviated form.

```js
gen.address.stateAbbr()	// => 'AZ'
gen.address.stateAbbr()	// => 'FL'
```
`gen.address.street() : String`

Generates a random primary street address.

```js
gen.address.street()	// => '29878 Ward Stream'
```

`gen.address.street2() : String`

Generates a random secondary street address.

```js
gen.address.street2()	// => 'Apt. 601'
```

`gen.address.streetName() : String`

Generates the name of a street.

```js
gen.address.streetName()	// => 'Felton Ways'
```

`gen.address.streetAddress() : String`

Generates a random street address.

```js
gen.address.streetAddress()	// => '5769 Friesen Cape'
```

`gen.address.zipCode() : String`

Generates a random 5 or 9 digit zip code.

```js
gen.address.zipCode()	// => '08719-0159'
gen.address.zipCode()	// => '50396'
```

### Date

`gen.date() : Date`

Generates a random date.

```js
gen.date()	// => 2016-09-10T08:07:53.405Z
```

`gen.date.between(minDate, maxDate) : Date`

Generates a date between the two given dates.

```js
const minDate = new Date('1970-01-01')
const maxDate = new Date('1975-12-31')
gen.date.between(minDate, maxDate)	// => 1974-05-28T04:47:25.736Z
gen.date.between(minDate, maxDate)	// => 1971-05-26T18:10:40.182Z
```

`gen.date.future() : Date`

Generates a date in the future. I.e., a date greater than `Date.now()`.

```js
new Date() 			// => 2016-10-17T01:12:42.830Z
gen.date.future() 	// => 2017-05-02T05:00:31.965Z
```

`gen.date.month() : String`

Generates the name of a random month.

```js
gen.date.month()	// => 'October'
gen.date.month()	// => 'September'
```

`gen.date.past() : Date`

Generates a date in the past. I.e, a date less than `Date.now()`.

```js
new Date() 			// => 2016-10-17T01:14:49.804Z
gen.date.past() 	// => 2016-04-16T23:25:53.662Z
```

`gen.date.recent() : Date`

Generates a date within 24 hours of the current time.

```js
new Date()			// => 2016-10-17T01:16:14.117Z
gen.date.recent()	// => 2016-10-16T02:08:37.091Z
gen.date.recent()	// => 2016-10-16T17:05:13.610Z
```

`gen.date.weekday() : String`

Generates the name of a random weekday.

```js
gen.date.weekday()	// => 'Wednesday'
gen.date.weekday()	// => 'Friday'
```

### Internet

`gen.internet.avatar() : String`

Generates a URL for an avatar.

```js
gen.internet.avatar() 	// => 'https://s3.amazonaws.com/uifaces/faces/twitter/stephcoue/128.jpg'
```

`gen.internet.domain() : String`

Generates a random domain name.

```js
gen.internet.domain()	// => 'barbara.net'
```

`gen.internet.email(firstName, lastName, provider) : String`

Generates a valid email address based on optional input criteria.

All the arguments are optional, you can for instance pass in only the first name and provider, letting the generator pick a random last name:

```js
gen.internet.email('Fernando', undefined, 'example.com')
// => 'Fernando_Hills56@example.com'
```

`gen.internet.image() : String`

Generates a random [lorempixel](http://lorempixel.com) url.

```js
gen.internet.image() 	// => 'http://lorempixel.com/640/480'
```

`gen.internet.ip() : String`

Generates a random IPv4 address.

```js
gen.internet.ip() 		// => '19.204.38.170'
```

`gen.internet.mac() : String`

Generates a random mac address.

```js
gen.internet.mac() 		// => 'e9:f8:e4:32:4f:01'
```

`gen.internet.password(length=15, memorable=false, pattern, prefix) : String`

Generates a random password. When `memorable` if `true`, it interleaves vowels between consonants.

```js
gen.internet.password() 	// => '_ugp1jGGHuJbjcg'
gen.internet.password(undefined, true) // => 'gakunujevotubus'
```

`gen.internet.protocol() : String`

Randomly generates the strings `'http'` or `'https'`.

```js
gen.internet.protocol() 	// => 'https'
```

`gen.internet.tld() : String`

Generates a random domain suffix.

```js
gen.internet.tld() 		// => 'net'
```

`gen.internet.url() : String`

Generates a random URL. The URL could be secure or insecure.

```js
gen.internet.url() 		// => 'https://shania.org'
```

`gen.internet.userAgent() : String`

Generates a random user agent.

```js
gen.internet.userAgent()
// => 'Mozilla/5.0 (Windows; U; Windows NT 6.1) AppleWebKit/534.2.2 (KHTML, like Gecko) Chrome/14.0.801.0 Safari/534.2.2'
```

`gen.internet.userName(firstName, lastName) : String`

Generates a username based on one of several patterns. The pattern is chosen randomly.

```js
gen.internet.userName()	// => 'Jodie85'
```

### Lorem

`gen.lorem() : String`

Randomly generates a word, phrase, sentence or paragraph.

```js
gen.lorem()
'Et eaque mollitia reiciendis omnis.\nQuia voluptas fuga voluptas blanditiis.\nIllum voluptas consequatur maiores nemo veritatis eius.\nIste fugiat porro et.'
gen.lorem()
'accusamus enim rem'
```

`gen.lorem.lines() : String`

Generates one or more random sentences each separated by a newline (`\n`) character.

```js
gen.lorem.lines()
'Excepturi maiores quae.\nQuis facilis excepturi asperiores qui adipisci.\nUt quia voluptas quisquam adipisci et eligendi velit odio.'
```

`gen.lorem.paragraph() : String`

Generates a random paragraph of text.

```js
gen.lorem.paragraph()
'Aut sint id dolores. Vero totam cupiditate repellendus quia. Ducimus sequi suscipit natus illo eum alias quos eligendi.'
```

`gen.lorem.paragraphs() : String`

Generates random multiple paragraphs of text separated by `\n \r`.

```js
gen.lorem.paragraphs()
'Atque quis aut rerum totam commodi consequuntur. Dolor est eaque. Tempore nobis officia. Non culpa sit vel magnam voluptatem deserunt aut.\n \rRerum explicabo consectetur maxime voluptatem neque illo hic reiciendis cum. Ut aliquam aliquam non explicabo. Aut est corporis et quia occaecati sit pariatur sint iste. Et dolorum eum velit est.\n \rQuia dolores asperiores. Quia qui eius quisquam voluptates praesentium consequuntur. A distinctio veritatis commodi distinctio magni quae sint. Reprehenderit ullam dolorem enim quam et dolor quas et. Est aut non tempora.'
```

`gen.lorem.sentence() : String`

Generates a random sentence.

```js
gen.lorem.sentence()
'Enim commodi voluptas ratione velit dolores nihil eaque quia.'
```

`gen.lorem.sentences() : String`

Generates multiple sentences. Effectively equal to `gen.lorem.paragraph`.

```js
gen.lorem.sentences()
'Maxime soluta quae nemo. Et et cum ipsa ut recusandae dicta rerum. Saepe aut omnis quam. Et ut quo voluptatum minus ut assumenda vitae. Omnis itaque omnis est quisquam.'
```

`gen.lorem.text() : String`

Randomly generates a word, phrase, sentence or paragraph.

```js
gen.lorem.text()
'Voluptatem minima harum illo pariatur modi non ut.\nAut dolorem consequuntur et enim dolor.\nPraesentium nihil incidunt nemo voluptatem.'
```

`gen.lorem.word() : String`

Generates a random word.

```js
gen.lorem.word()
'natus'
```

`gen.lorem.words() : String`

Generates a random string of words.

```js
gen.lorem.words()
'excepturi consectetur et'
```
### Person

`gen.person() : Object`

Generates a generic `person` object.

```js
gen.person()
{ username: 'Savannah4',
  firstname: 'Maudie',
  lastname: 'Runolfsdottir' }
```

`gen.person.firstName() : String`

Generates a random first name.

```js
gen.person.firstName() 	// => 'Kiara'
```

`gen.person.fullName() : String`

Generates a random full name (first and last).

```js
gen.person.fullName()	// => 'Pinkie Ullrich'
```

`gen.person.lastName() : String`

Generates a random last name.

```js
gen.person.lastName() 	// => 'Monahan'
```

`gen.person.namePrefix() : String`

Generates a random name prefix.

```js
gen.person.namePrefix() 	// => 'Dr.'
```

`gen.person.nameSuffix() : String`

Generates a random name suffix.

```js
gen.person.nameSuffix() 	// => 'Jr.'
```

`gen.person.title() : String`

Generates the a random title for a person.

```js
gen.person.title() 		// => 'Dynamic Assurance Executive'
```

`gen.person.userName() : String`

Generates a username based on one of several patterns. The pattern is chosen randomly.

```js
gen.person.userName()	// => 'Dayne1'
```

### Phone

`gen.phone(format) : String`

Generates a random phone number. Takes an optional format which defaults to `'(###)-###-####'` -- `#` characters are replaced with numbers in the format string.

```js
gen.phone() 					// => '(320)-710-6369'
gen.phone('1(800)-###-####')	// => '1(800)-720-6242'
gen.phone('+44 #### ### #####')	// => '+44 2270 397 29959'
```

### Random

`gen.random() : Any`

Generates a random value from the generators under the `gen.random` module.

```js
gen.random()	// => '8d46a487-ff8e-48d9-a32e-ce8fb3e7f56d', uuid
gen.random()	// => 'pt_BR', locale
gen.random()	// => true, boolean
```

`gen.random.boolean() : Boolean`

Generates a boolean value.

```js
gen.random.boolean() 	// => true
gen.random.boolean() 	// => false
```

`gen.random.hexColor() : String`

Generates a random color in hex form.

```js
gen.random.hexColor() 	// => '#364e07'
```

`gen.random.locale() : String`

Generates a random locale

```js
gen.random.locale() 	// => 'fr_CA'
```

`gen.random.number(max) : Number`

Generates a random integer up to an optional max.

`gen.random.string(length=15) : String`

Generates a random string. Takes an optional `length` argument which defaults to `15`.

```js
gen.random.string()		// => 'rb7WUna7kOKCHXSw'
gen.random.string(3) 	// => 'P0a'
gen.random.string(20) 	// => 'QloEmpKriDgYCcJqZyzH'
```

`gen.random.uuid() : String`

Generates a random `UUID`.

```js
gen.random.uuid()		// => '6bb1c37c-33a5-4398-a9b6-dcb47c04f90e'
```

### System

`gen.system.commonFileExt() : String`

Generates a random, yet common, file extension.

```js
gen.system.commonFileExt()		// => 'html'
```

`gen.system.commonFileName() : String`

Generates a random, yet common, file name.

```js
gen.system.commonFileName()		// => 'fresh.mpeg'
gen.system.commonFileName() 	// => 'parse.png'
```

`gen.system.commonFileType() : String`

Generates a random, yet common, file type.

```js
gen.system.commonFileType()		// => 'audio'
gen.system.commonFileType()		// => 'application'
```

`gen.system.fileExt() : String`

Generates a random file extension.

```js
gen.system.fileExt()	// => 'clkt'
gen.system.fileExt()	// => 'pdb'
```

`gen.system.fileName() : String`

Generates a random file name.

```js
gen.system.fileName()	// => 'generic.mk3d'
gen.system.fileName() 	// => 'maximized_reciprocal.xsl'
```

`gen.system.fileType() : String`

Generates a random file type.

```js
gen.system.fileType()	// => 'video'
gen.system.fileType()	// => 'chemical'
```

`gen.system.mimeType() : String`
Generates a random mime type.

```js
gen.system.mimeType()	// => 'application/vnd.xfdl'
gen.system.mimeType()	// => 'audio/vmr-wb'
```

`gen.system.semver() : String`
Generates a random semver string.

```js
gen.system.semver() 	// => '0.2.6'
```

License
=======

The MIT License (MIT)

Copyright &copy; 2016 Seth Bonnie

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
