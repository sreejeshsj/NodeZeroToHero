const lodash = require('lodash')

const names=['sree','john','alex','min']

const capitalize=lodash.map(names,lodash.capitalize)

console.log(capitalize)