export default function luhn(card: string): boolean {
  return (
    card.split('').reduceRight(function(prev: any, curr: any, idx) {
      prev = parseInt(prev, 10)
      if ((idx + 1) % 2 !== 0) {
        curr = (curr * 2)
          .toString()
          .split('')
          .reduce(function(p, c) {
            return (parseInt(p, 10) + parseInt(c, 10)) as any
          })
      }
      return prev + parseInt(curr, 10)
    }, 0) %
      10 ===
    0
  )
}
