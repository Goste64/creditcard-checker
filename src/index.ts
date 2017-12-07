// Read numbers from a file *TICK*
// check companys, validate *TICK*
// output numbers with companys + validation status *TICK && failure*
import { createReadStream } from 'fs'
import { createInterface } from 'readline'
import { getCompanyName } from './cardType'
import cardValidator from './cardValidator'
import * as fs from 'fs'

const lineReader = createInterface({
  input: createReadStream('data/input.txt')
})

const output: string[] = []

lineReader.on('line', (creditCard: string) => {
  output.push(
    `${getCompanyName(creditCard)}: ${creditCard} (${
      cardValidator(creditCard) ? 'valid' : 'invalid'
    })`
  )
})

lineReader.on('close', () => {
  fs.writeFile('./data/output.txt', output.join('\n'), err => {
    if (err) throw err
    console.log('The file has been saved!')
  })
})
//make company output an array
