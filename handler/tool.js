const fs = require('fs')
const path = require('path')

function getAll(callback) {
    fs.readFile(path.join(__dirname, '/assets/data/log.json'), 'utf-8', (err, dataStr) => {
        if (err) return callback(err)
        const heros = JSON.parse(dataStr)
        callback(null, heros)
    })
}

module.exports = {
    getAll
}