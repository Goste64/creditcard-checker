export const isAmex = (creditCard: string): boolean =>
  creditCard.length === 15 &&
  (creditCard.substring(0, 2) === '37' || creditCard.substring(0, 2) === '34')

export const isDiscover = (creditCard: string): boolean =>
  creditCard.length === 16 && creditCard.substring(0, 4) === '6011'

export const isVisa = (creditCard: string): boolean =>
  creditCard.substring(0, 2) === '13' ||
  creditCard.substring(0, 2) === '16' ||
  creditCard.substring(0, 1) === '4'

export const isMasterCard = (creditCard: string): boolean =>
  creditCard.length === 16 &&
  (creditCard.substring(0, 2) === '51' || creditCard.substring(0, 2) === '55')

export const getCompanyName = (creditCard: string) => {
  if (isAmex(creditCard)) {
    return 'AMEX'
  }

  if (isDiscover(creditCard)) {
    return 'Discover'
  }

  if (isMasterCard(creditCard)) {
    return 'MasterCard'
  }

  if (isVisa(creditCard)) {
    return 'VISA'
  }

  return 'Invalid'
}
