export const isAmex = (creditCard: string): boolean =>
  creditCard.length === 15 &&
  (creditCard.substring(0, 2) === '37' || creditCard.substring(0, 2) === '34')

export const getAmexName = (creditCard: string) => {
  if (isAmex(creditCard)) {
    return 'AMEX'
  }
  return
}
