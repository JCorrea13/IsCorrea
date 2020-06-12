var isCorrea = require('./index')

describe('Testing isGeo', function () {
  it('should return true passing Correa', function () {
    expect(isCorrea('Correa')).toBeTruthy()
  })

  it('should return false passing Google', function () {
    expect(isCorrea('Goolge')).toBeFalsy()
  })
})
