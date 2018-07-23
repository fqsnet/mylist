const express = require('express')
const app = express()
const ejs = require('ejs')

//配置默认模板引擎为EJS
app.engine('html', ejs.renderFile)
//修改后缀名
app.set('view engine', 'html')
app.set('views', './views');

app.get('/',(req,res)=>{
    res.render('index', {})
})
// 托管静态资源
app.use('/node_modules',express.static('./node_modules'))
app.use('/assets',express.static('./assets'))

app.listen(3000, function () {
    console.log('http://127.0.0.1:3000');
})