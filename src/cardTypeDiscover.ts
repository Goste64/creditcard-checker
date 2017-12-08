export const isDiscover = (creditCard: string): boolean =>
  creditCard.length === 16 && creditCard.substring(0, 4) === '6011'

export const getDiscoverName = (creditCard: string) => {
  if (isDiscover(creditCard)) {
    return 'Discover'
  }
  return
}
