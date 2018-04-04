import { createReadStream } from 'fs'
import { createInterface } from 'readline'
import * as fs from 'fs'

import { getMasterCardName } from './cardTypeMasterCard'

import cardValidator from './cardValidator'

const lineReader = createInterface({
  input: createReadStream('data/input.txt')
})

const outputMasterCard: string[] = []

lineReader.on('line', (creditCard: string) => {
  if (getMasterCardName(creditCard)) {
    outputMasterCard.push(
      `${getMasterCardName(creditCard)}: ${creditCard} (${
        cardValidator(creditCard) ? 'valid' : 'invalid'
      })`
    )
  }
})

lineReader.on('close', () => {
  fs.writeFile('./data/MasterCard.txt', outputMasterCard.join('\n'), err => {
    if (err) throw err
    console.log('The file has been saved!')
  })
})
