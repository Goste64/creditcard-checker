import { createReadStream } from 'fs'
import { createInterface } from 'readline'
import * as fs from 'fs'

import { getCompanyName } from './cardType'
import { getAmexName } from './cardTypeAmex'
import { getVisaName } from './cardTypeVISA'
import { getDiscoverName } from './cardTypeDiscover'
import { getMasterCardName } from './cardTypeMasterCard'

import cardValidator from './cardValidator'

import * as outputVISA from './outputVisa'
import * as outputDiscover from './outputDiscover'
import * as outputAmex from './outputAmex'
import * as outputMasterCard from './outputMastercard'

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

outputAmex

//VISA FILE

outputVISA

//Discover

outputDiscover

//MasterCard

outputMasterCard
