import { createReadStream } from 'fs'
import { createInterface } from 'readline'
import * as fs from 'fs'

import { getDiscoverName } from './cardTypeDiscover'

import cardValidator from './cardValidator'

const lineReader = createInterface({
  input: createReadStream('data/input.txt')
})

const outputDiscover: string[] = []

lineReader.on('line', (creditCard: string) => {
  if (getDiscoverName(creditCard)) {
    outputDiscover.push(
      `${getDiscoverName(creditCard)}: ${creditCard} (${
        cardValidator(creditCard) ? 'valid' : 'invalid'
      })`
    )
  }
})

lineReader.on('close', () => {
  fs.writeFile('./data/Discover.txt', outputDiscover.join('\n'), err => {
    if (err) throw err
    console.log('The file has been saved!')
  })
})
