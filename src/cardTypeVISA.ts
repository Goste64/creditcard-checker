export const isVisa = (creditCard: string): boolean =>
  creditCard.substring(0, 2) === '13' ||
  creditCard.substring(0, 2) === '16' ||
  creditCard.substring(0, 1) === '4'

export const getVisaName = (creditCard: string) => {
  if (isVisa(creditCard)) {
    return 'VISA'
  }
  return
}
