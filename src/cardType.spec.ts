import * as cardType from './cardType'

test('AMEX', () => {
  expect(cardType.isAmex('378282246310005')).toBe(true)
  expect(cardType.isAmex('371449635398431')).toBe(true)
  expect(cardType.isAmex('378734493671000')).toBe(true)
  expect(cardType.isAmex('000000000000000')).toBe(false)
})

test('Discover', () => {
  expect(cardType.isDiscover('6011111111111117')).toBe(true)
  expect(cardType.isDiscover('0000000000000000')).toBe(false)
})

test('MasterCard', () => {
  expect(cardType.isMasterCard('5105105105105106')).toBe(true)
  expect(cardType.isMasterCard('5105105105105100')).toBe(true)
  expect(cardType.isMasterCard('0000000000000000')).toBe(false)
})

test('VISA', () => {
  expect(cardType.isVisa('4012888888881881')).toBe(true)
  expect(cardType.isVisa('4111111111111111')).toBe(true)
  expect(cardType.isVisa('4111111111111')).toBe(true)
  expect(cardType.isVisa('000000000000000')).toBe(false)
})
