const http = require('http')
const server = http.createServer()
const template = require('art-template')
const url = require('url')
const fs = require('fs')
const querystring = require('querystring')
const path = require('path')

server.on('request', function (req, res) {
    const method = req.method.toLowerCase()

    if (method === 'get' && req.url === '/') {
        let htmlStr = template(__dirname + '/views/index.html', {})
        res.end(htmlStr)
    } else if (method === 'post' && req.url === '/add') {
        let data = ''

        req.on('data', (chunk) => {
            data += chunk
        })


        req.on('end', () => {

            let list = querystring.parse(data)
            list.ctime = new Date()
            let id = 0
            console.log(list);





            //写入数据
            fs.writeFile(path.join(__dirname, '/assets/data/log.json'), JSON.stringify(list), err => {
                if (err) return callback(err)
                res.end('success')

            })
        })


    } else { //静态资源
        fs.readFile(__dirname + req.url, (err, buf) => {
            if (err) return res.end('404')
            res.end(buf)
        })
    }


})
server.listen(3000, function () {
    console.log('http://127.0.0.1:3000');
})