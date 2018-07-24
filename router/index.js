const express = require('express')
const router = express.Router()
const model = require('../model/mysql')
const fs = require('fs')
const path = require('path')

router.get('/',(req,res)=>{
    // res.render('index', {})
    fs.readFile('./views/index.html', 'utf-8',function (err, data) {
        res.send(data);
    });
})




router.post('/add',(req,res)=>{
    console.log(req.body);
    
    model.addInfo(req.body,(err,results)=>{
        if (err) res.json({ err_code: 1, msg: '添加失败！' })

        res.json({ err_code: 0, msg: 'ok', list: results })
        
    })
})

router.get('/list',(req,res)=>{
    res.render('list',{})
})
router.post('/list',(req,res)=>{
    model.showList((err,results)=>{
        // console.log(results); 
        res.json({ err_code: 0, msg: 'ok', list: results })

        
    }) 
     
})
module.exports = router
