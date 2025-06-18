# NumberNamer

Generates names for large numbers (up to 10^30000) using the Conway-Guy system.

## Features
- Names numbers with up to 30,000 zeros
- Uses the Conway-Guy naming convention
- Simple API

## Installation

```
npm install numbernamer
```

## Usage

```js
const { nameNumber } = require('numbernamer');

const zeros = 30000; // Number of zeros
console.log(nameNumber(zeros)); // "Novenonagintanongentinonillillion"
```

## API

### nameNumber(zeros)
- `zeros` (number): The number of zeros in the number (must be a non-negative integer)
- Returns: (string) The Conway-Guy name for the number

## Example

```js
const { nameNumber } = require('numbernamer');
console.log(nameNumber(6));      // "thousand"
console.log(nameNumber(9));      // "million"
console.log(nameNumber(12));      // "billion"
console.log(nameNumber(15));      // "trillion"
console.log(nameNumber(30000));  // "Novenonagintanongentinonillillion"
```

## License
MIT
