const path = require('path')
const fs = require('fs')
const template = require('art-template')

function showIndexpage(req,res) {
    let htmlStr = template(path.join(__dirname + '../views/index.html'), {})
    res.end(htmlStr)
}

module.exports = {
    showIndexpage
}