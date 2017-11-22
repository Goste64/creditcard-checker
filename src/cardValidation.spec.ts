import cardValidator from './cardValidator'

describe('cardValidator', () => {
  test('Returns true if given a valid number', () => {
    expect(cardValidator('1234567812345670')).toBe(true)
  })

  test('returns false if given an invalid number', () => {
    expect(cardValidator('00000000000444')).toBe(false)
  })
})
