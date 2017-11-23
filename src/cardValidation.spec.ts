import cardValidator from './cardValidator'

describe('cardValidator', () => {
  test('Returns true if given a valid number', () => {
    expect(cardValidator('4012888888881881')).toBe(true)
    expect(cardValidator('4111111111111111')).toBe(true)
    expect(cardValidator('6011111111111117')).toBe(true)
    expect(cardValidator('5105105105105100')).toBe(true)
  })

  test('returns false if given an invalid number', () => {
    expect(cardValidator('4111111111111')).toBe(false)
    expect(cardValidator('378282246310005')).toBe(false)
    expect(cardValidator('5105105105105106')).toBe(false)
    expect(cardValidator('9111111111111111')).toBe(false)
    expect(cardValidator('371449635398431')).toBe(false)
    expect(cardValidator('378734493671000')).toBe(false)
  })
})
