const {readFileSync, writeFileSync, readFile} = require('fs');


const first = readFileSync('./built-in-modules/content/first.txt', 'utf-8')
const second = readFileSync('./built-in-modules/content/second.txt', 'utf-8')


writeFileSync('./built-in-modules/content/result-sync.txt', `Here is the result ${first}, ${second}`)