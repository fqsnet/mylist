const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()


//art-template
const tmpl = require('express-art-template')
app.engine('html', tmpl);//  自定义一个模板引擎
app.set('view engine', 'html')//  设置express的默认模板引擎


const bodyParser = require('body-parser')    //body-parser中间件 -- 解析req上的数据
//bodyParser.urlencoded   对应解析 这种提交格式的表单：enctype="application/x-www-form-urlencoded
//配置对象中的  extended: false   表示：不适用第三方的解析模块去解析表单中的数据，而是直接使用 Node.js 内置的 核心 querystring 模块来解析 提交过来的表单数据
app.use(bodyParser.urlencoded({ extended: false })) 


// 托管静态资源
app.use('/node_modules',express.static('./node_modules'))
app.use('/assets',express.static('./assets'))


//导入路由模块
fs.readdir(path.join(__dirname,'./router'),(err,filename)=>{
    filename.forEach(filename=>{  //router文件下的文件名
        const fullpath = path.join(__dirname,'./router',filename)  //拼接完整路径
        const tempModule = require(fullpath) 
        app.use(tempModule) //导入完整路径
    })
    console.log(filename);
})


app.listen(3000, function () {
    console.log('http://127.0.0.1:3000');
})