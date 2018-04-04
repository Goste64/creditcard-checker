import { createReadStream } from 'fs'
import { createInterface } from 'readline'
import * as fs from 'fs'

import { getAmexName } from './cardTypeAmex'

import cardValidator from './cardValidator'

const lineReader = createInterface({
  input: createReadStream('data/input.txt')
})

const outputAmex: string[] = []

lineReader.on('line', (creditCard: string) => {
  if (getAmexName(creditCard)) {
    outputAmex.push(
      `${getAmexName(creditCard)}: ${creditCard} (${
        cardValidator(creditCard) ? 'valid' : 'invalid'
      })`
    )
  }
})

lineReader.on('close', () => {
  fs.writeFile('./data/Amex.txt', outputAmex.join('\n'), err => {
    if (err) throw err
    console.log('The file has been saved!')
  })
})
