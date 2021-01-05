const fs =  require('fs');
const moveFile = require('./fstest')

fs.watch('./', {persistent:true, recursive: false}, (event, filename) => {
    console.log(event)
    moveFile(filename)
})