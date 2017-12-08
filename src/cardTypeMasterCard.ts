export const isMasterCard = (creditCard: string): boolean =>
  creditCard.length === 16 &&
  (creditCard.substring(0, 2) === '51' || creditCard.substring(0, 2) === '55')

export const getMasterCardName = (creditCard: string) => {
  if (isMasterCard(creditCard)) {
    return 'MasterCard'
  }
  return
}
