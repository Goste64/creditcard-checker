import { createReadStream } from 'fs'
import { createInterface } from 'readline'
import * as fs from 'fs'

import { getVisaName } from './cardTypeVISA'

import cardValidator from './cardValidator'

const lineReader = createInterface({
  input: createReadStream('data/input.txt')
})

const outputVISA: string[] = []

lineReader.on('line', (creditCard: string) => {
  if (getVisaName(creditCard)) {
    outputVISA.push(
      `${getVisaName(creditCard)}: ${creditCard} (${
        cardValidator(creditCard) ? 'valid' : 'invalid'
      })`
    )
  }
})

lineReader.on('close', () => {
  fs.writeFile('./data/VISA.txt', outputVISA.join('\n'), err => {
    if (err) throw err
    console.log('The file has been saved!')
  })
})
