// Read numbers from a file
// check companys, validate
// output numbers with companys + validation status

const lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('data/input.txt')
})

lineReader.on('line', function(line: string) {
  console.log('Line from file:', line)
})
