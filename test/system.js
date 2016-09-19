import gen from '..'
import {expect} from 'chai'

const fileExtPattern = /^[a-z0-9_-]+$/
const fileNamePattern = /^\w+\.\w+$/
const fileTypePattern = /^[a-z_-]+$/
const mimeTypePattern = /^[a-z]+\/[\w.+\-]+$/
const semverPattern = /^(\d+\.){2}\d+$/

describe('gen.system.fileName()', () => {
  it('returns a string that matches the file name pattern', () => {
    const filename = gen.system.fileName()
    expect(filename).to.match(fileNamePattern)
  })
})

describe('gen.system.commonFilename()', () => {
  it('returns a string that matches the file name pattern', () => {
    const filename = gen.system.commonFileName()
    expect(filename).to.match(fileNamePattern)
  })
})

describe('gen.system.mimeType()', () => {
  it('returns a correctly formatted mimetype', () => {
    const mimeType = gen.system.mimeType()
    expect(mimeType).to.match(mimeTypePattern)
  })
})

describe('gen.system.commonFileType()', () => {
  it('returns a string of the right pattern', () => {
    const fileType = gen.system.commonFileType()
    expect(fileType).to.match(fileTypePattern)
  })
})

describe('gen.system.commonFileExt()', () => {
  it('returns a string of the right pattern', () => {
    const fileExt = gen.system.commonFileExt()
    expect(fileExt).to.match(fileExtPattern)
  })
})

describe('gen.system.fileType()', () => {
  it('returns a string of the right pattern', () => {
    const fileType = gen.system.fileType()
    expect(fileType).to.match(fileTypePattern)
  })
})

describe('gen.system.fileExt()', () => {
  it('returns a string of the right pattern', () => {
    const fileExt = gen.system.commonFileExt()
    expect(fileExt).to.match(fileExtPattern)
  })
})

describe('gen.system.semver()', () => {
  it('returns a string with the right format', () => {
    const result = gen.system.semver()
    expect(result).to.match(semverPattern)
  })
})

