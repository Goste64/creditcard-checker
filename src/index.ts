// Read numbers from a file *TICK*
// check companys, validate *TICK*
// output numbers with companys + validation status
import { createReadStream } from 'fs'
import { createInterface } from 'readline'
import { getCompanyName } from './cardType'
import cardValidator from './cardValidator'

const lineReader = createInterface({
  input: createReadStream('data/input.txt')
})

lineReader.on('line', (creditCard: string) => {
  var company = `${getCompanyName(creditCard)}: ${creditCard} (${
    cardValidator(creditCard) ? 'valid' : 'invalid'
  })`

  console.log(company)
})
