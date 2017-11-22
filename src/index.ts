// Read numbers from a file *TICK*
// check companys, validate
// output numbers with companys + validation status
import { createReadStream } from 'fs'
import { createInterface } from 'readline'
import { getCompanyName } from './cardType'

const lineReader = createInterface({
  input: createReadStream('data/input.txt')
})

lineReader.on('line', (creditCard: string) => {
  var company = `(${getCompanyName(creditCard)})`

  console.log('Line from file: ', company)
})
