# Credit card checker

## Purpose

- Read from a file where each line is a credit card number, example:
```
4111111111111111
4111111111111
4012888888881881
378282246310005
6011111111111117
5105105105105100
5105105105105106
9111111111111111
371449635398431
378734493671000
```
- For each credit card number, write one line to an output file in the following format:
```
VISA: 4111111111111111 (valid)
VISA: 4111111111111 (invalid)
VISA: 4012888888881881 (valid)
AMEX: 378282246310005 (valid)
Discover: 6011111111111117 (valid)
MasterCard: 5105105105105100 (valid)
MasterCard: 5105105105105106 (invalid)
Unknown: 9111111111111111 (invalid)
AMEX: 371449635398431 (valid)
AMEX: 378734493671000 (valid)
```
- Each output line will contain:
    - Card type (AMEX, Discover, MasterCard, VISA, Unknown)
    - Card number
    - Card validity (valid, invalid)
- Results must be accurate and covered by unit tests

## Resources

### Luhn Algorithm
This is the algorithm that we can use to determine the validity of a credit card number.

- https://en.wikipedia.org/wiki/Luhn_algorithm
-	

### Suggested Technology

- Node.js
- TypeScript (ts-node)
- Mocha or Jest (test runners)

## Learning Outcomes
- Git & GitHub
- TypeScript
- Unit Testing / Test Driven Development
- Node.js and file IO