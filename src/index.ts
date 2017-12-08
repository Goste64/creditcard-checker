import { createReadStream } from 'fs'
import { createInterface } from 'readline'
import * as fs from 'fs'

import { getCompanyName } from './cardType'
import { getAmexName } from './cardTypeAmex'
import { getVisaName } from './cardTypeVISA'
import { getDiscoverName } from './cardTypeDiscover'
import { getMasterCardName } from './cardTypeMasterCard'

import cardValidator from './cardValidator'

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

//AMEX FILE

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

//VISA FILE

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

//Discover

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

//MasterCard

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
