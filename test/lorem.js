import gen from '..'
import {expect} from 'chai'

const multiSentencePattern = /^([A-Z][a-z]+\s(\w+\s)\w+[!.?]\s?)*/

describe('gen.lorem()', () => {
  it('returns a non-empty string', () => {
    const result = gen.lorem()
    expect(result).to.be.a('string')
    expect(result).to.not.be.empty
  })
})

describe('gen.lorem.word()', () => {
  it('returns a word', () => {
    const word = gen.lorem.word()
    expect(word).to.match(/\w+/)
  })
})

describe('gen.lorem.words()', () => {
  it('returns a set of words separated by spaces', () => {
    const words = gen.lorem.words()
    expect(words).to.match(/^(?:\w+\s?)*$/)
  })
})

describe('gen.lorem.sentence()', () => {
  it('returns a complete sentence', () => {
    const sentencePattern = /^[A-Z][a-z]+\s(\w+\s)+\w+[!.?]$/
    const sentence = gen.lorem.sentence()
    expect(sentence).to.match(sentencePattern)
  })
})

describe('gen.lorem.sentences()', () => {
  it('returns multiple sentences', () => {
    const sentences = gen.lorem.sentences()
    expect(sentences).to.match(multiSentencePattern)
  })
})

describe('gen.lorem.paragraph()', () => {
  it('returns a paragraph', () => {
    const paragraph = gen.lorem.paragraph()
    expect(paragraph).to.match(multiSentencePattern)
  })
})

describe('gen.lorem.paragraphs()', () => {
  it('returns a paragraph', () => {
    const paragraphs = gen.lorem.paragraphs()
    expect(paragraphs).to.match(multiSentencePattern)
  })
})

describe('gen.lorem.text()', () => {
  it('returns a non-empty string', () => {
    const text = gen.lorem.text()
    expect(text).to.be.a('string')
    expect(text).to.not.be.empty
  })
})

describe('gen.lorem.lines()', () => {
  it('returns multiples lines of text', () => {
    const pattern = /([\w .!?]+\n?)*/
    const lines = gen.lorem.lines()
    expect(lines).to.match(pattern)
  })
})

